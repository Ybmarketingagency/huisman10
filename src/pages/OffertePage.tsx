import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Plus, Trash2, Layers, Grid2X2, Paintbrush, Scissors } from 'lucide-react';

interface AreaCalculation {
  id: number;
  service: string;
  roomName: string;
  area: string;
}

interface FormData {
  package: string;
  extraServices: string[];
  otherService: string;
  name: string;
  email: string;
  phone: string;
  street: string;
  houseNumber: string;
  postcode: string;
  city: string;
  areaCalculations: AreaCalculation[];
  floorPlan: File | null;
  comments: string;
}

const packageNames: Record<string, string> = {
  'renovlies-allround': 'Renovlies Allround Pakket (€22,50/m²)',
  'glasweefsel-allround': 'Glasweefsel Allround Pakket (€22,50/m²)',
};

const serviceNames: Record<string, string> = {
  'muren-schilderen': 'Muren schilderen (Op aanvraag)',
  'behanger-inhuren': 'Behanger inhuren (Op aanvraag)',
  'airless-spuiten': 'Airless spuiten van zolderkappen (Op aanvraag)',
  'vloeren-leggen': 'Vloeren leggen (epoxy, pvc, laminaat) (Op aanvraag)',
  'plafond-egaliseren': 'Plafond egaliseren (Op aanvraag)',
  'plafond-spuiten': 'Plafond spuiten (Op aanvraag)',
  'stukadoor-inhuren': 'Stukadoor inhuren (Op aanvraag)'
};

const OffertePage = () => {
  const [formData, setFormData] = useState<FormData>({
    package: '',
    extraServices: [],
    otherService: '',
    name: '',
    email: '',
    phone: '',
    street: '',
    houseNumber: '',
    postcode: '',
    city: '',
    areaCalculations: [],
    floorPlan: null,
    comments: ''
  });

  const [nextId, setNextId] = useState(1);
  const formRef = useRef<HTMLDivElement>(null);

  const quickSelect = (type: 'package' | 'service', value: string) => {
    if (type === 'package') {
      setFormData(prev => ({ ...prev, package: value, extraServices: [] }));
    } else {
      setFormData(prev => ({
        ...prev,
        package: '',
        extraServices: prev.extraServices.includes(value)
          ? prev.extraServices
          : [...prev.extraServices, value],
      }));
    }
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, floorPlan: file }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      extraServices: checked
        ? [...prev.extraServices, value]
        : prev.extraServices.filter(service => service !== value)
    }));
  };

  const addAreaCalculation = () => {
    setFormData(prev => {
      const newCalculation: AreaCalculation = {
        id: nextId,
        service: prev.package || (prev.extraServices.filter(s => !['airless-spuiten', 'vloeren-leggen', 'plafond-egaliseren', 'plafond-spuiten', 'stukadoor-inhuren', 'muren-schilderen', 'behanger-inhuren', 'glasweefsel-behang'].includes(s))[0] || ''),
        roomName: '',
        area: ''
      };
      return {
        ...prev,
        areaCalculations: [...prev.areaCalculations, newCalculation]
      };
    });
    setNextId(prev => prev + 1);
  };

  const calculateEstimate = () => {
    let total = 0;

    formData.areaCalculations.forEach(calc => {
      const area = parseFloat(calc.area) || 0;

      if (calc.service === 'renovlies-allround' || calc.service === 'glasweefsel-allround') {
        total += area * 22.50;
      }
    });

    return total;
  };

  const removeAreaCalculation = (id: number) => {
    setFormData(prev => ({
      ...prev,
      areaCalculations: prev.areaCalculations.filter(calc => calc.id !== id)
    }));
  };

  const updateAreaCalculation = (id: number, field: keyof AreaCalculation, value: string) => {
    setFormData(prev => ({
      ...prev,
      areaCalculations: prev.areaCalculations.map(calc =>
        calc.id === id ? { ...calc, [field]: value } : calc
      )
    }));
  };

  const uploadImageToImgur = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
          'Authorization': 'Client-ID 546c25a59c58ad7',
        },
        body: formData,
      });

      const data = await response.json();
      if (data.success && data.data) {
        return data.data.link;
      }
      return null;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let extraServicesText = formData.extraServices.length > 0
      ? formData.extraServices.map(service => serviceNames[service] || service).join(', ')
      : 'Geen';

    if (formData.otherService) {
      extraServicesText += extraServicesText === 'Geen'
        ? formData.otherService
        : `, ${formData.otherService}`;
    }

    let imageUrl: string | null = null;

    if (formData.floorPlan) {
      imageUrl = await uploadImageToImgur(formData.floorPlan);
      console.log('Uploaded image URL:', imageUrl);
    }

    // Maak oppervlakte berekeningen tekst
    let areaCalculationsText = 'Geen berekeningen opgegeven';
    if (formData.areaCalculations.length > 0) {
      areaCalculationsText = formData.areaCalculations
        .map((calc, index) => {
          const serviceName = packageNames[calc.service] || serviceNames[calc.service] || calc.service;
          return `${index + 1}. ${calc.roomName || 'Naamloze ruimte'} - ${calc.area} m² (${serviceName})`;
        })
        .join('\n');
    }

    // Maak een complete message body met alle informatie
    const messageBody = `
Nieuwe offerte aanvraag van:

GEKOZEN PAKKET:
${packageNames[formData.package] || 'Geen renovlies pakket geselecteerd'}

DIENSTEN:
${extraServicesText}

CONTACTGEGEVENS:
Naam: ${formData.name}
E-mail: ${formData.email}
Telefoon: ${formData.phone}
Adres: ${formData.street} ${formData.houseNumber}, ${formData.postcode} ${formData.city}

OPPERVLAKTE BEREKENINGEN:
${areaCalculationsText}
${formData.areaCalculations.length === 0 && !formData.floorPlan ? '\nPlattegrond geüpload (zie hieronder)' : ''}

GEÜPLOADE FOTO:
${imageUrl || 'Geen foto geüpload'}

OPMERKINGEN:
${formData.comments || 'Geen opmerkingen'}
    `.trim();

    const templateParams = {
      to_name: 'Huisman Wandafwerking',
      from_name: formData.name,
      from_email: formData.email,
      message: messageBody,
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        'service_z20osse',
        'template_ytp0ow4',
        templateParams,
        'o1zr2f6mQFLqSAGyJ'
      );

      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Offerte Aanvraag',
          content_category: 'Quote Request',
          value: calculateEstimate(),
          currency: 'EUR'
        });
      }

      // Google Ads conversie tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        const estimatedValue = calculateEstimate();
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-17738015375/f_jzCIH57OgZELzMjIQ-',
          'value': estimatedValue > 0 ? estimatedValue : 1.0,
          'currency': 'EUR'
        });
      }

      alert('Bedankt voor uw aanvraag! We nemen zo snel mogelijk contact met u op.');
      setFormData({
        package: '',
        extraServices: [],
        otherService: '',
        name: '',
        email: '',
        phone: '',
        street: '',
        houseNumber: '',
        postcode: '',
        city: '',
        areaCalculations: [],
        floorPlan: null,
        comments: ''
      });
      setNextId(1);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Er is een fout opgetreden bij het verzenden van uw aanvraag. Probeer het later opnieuw.');
    }
  };

  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-3 text-center">
            Offerte aanvragen
          </h1>
          <p className="text-center text-gray-600 mb-8">Kies wat u zoekt — we vullen het formulier al voor u in.</p>

          {/* Quick-select tiles */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              {
                icon: Layers,
                label: 'Renovlies Allround Pakket',
                sub: '€22,50/m² · plaatsen + sausen',
                type: 'package' as const,
                value: 'renovlies-allround',
                img: 'https://imgur.com/130MQxa.jpg',
              },
              {
                icon: Grid2X2,
                label: 'Glasweefsel Allround Pakket',
                sub: '€22,50/m² · plaatsen + sausen',
                type: 'package' as const,
                value: 'glasweefsel-allround',
                img: 'https://imgur.com/m7wjcxN.jpg',
              },
              {
                icon: Paintbrush,
                label: 'Muren/plafond laten schilderen',
                sub: 'Op aanvraag',
                type: 'service' as const,
                value: 'muren-schilderen',
                img: 'https://imgur.com/USExe76.jpg',
              },
              {
                icon: Scissors,
                label: 'Muren/plafond laten behangen',
                sub: 'Op aanvraag',
                type: 'service' as const,
                value: 'behanger-inhuren',
                img: 'https://imgur.com/WDPnN4C.jpg',
              },
            ].map(({ icon: Icon, label, sub, type, value, img }) => {
              const isActive =
                (type === 'package' && formData.package === value) ||
                (type === 'service' && formData.extraServices.includes(value));
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => quickSelect(type, value)}
                  className={`relative overflow-hidden rounded-2xl text-left transition-all duration-200 hover:scale-[1.02] shadow-md ${isActive ? 'ring-4 ring-emerald-500 ring-offset-2' : ''}`}
                >
                  {/* Background photo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
                  {/* Active check */}
                  {isActive && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  {/* Content */}
                  <div className="relative z-10 p-4 pt-10 md:pt-14">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white font-bold text-sm md:text-base leading-tight">{label}</p>
                    <p className="text-emerald-300 text-xs mt-1">{sub}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div ref={formRef} />
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Kies uw pakket (optioneel)</h2>
              <p className="text-sm text-gray-600 mb-4">Selecteer een renovlies pakket of gebruik alleen de diensten.</p>

              <div className="space-y-4">
                {/* Renovlies Allround Pakket */}
                <label className={`block p-5 border-2 rounded-lg cursor-pointer transition-colors ${formData.package === 'renovlies-allround' ? 'border-emerald-700 bg-emerald-50' : 'border-gray-300 hover:border-emerald-700'}`}>
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="package"
                      value="renovlies-allround"
                      checked={formData.package === 'renovlies-allround'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Renovlies Allround Pakket</div>
                        <div>
                          <div className="font-bold text-emerald-700 text-lg">€22,50/m²</div>
                          <div className="text-xs text-gray-600 text-right">excl. BTW</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3 italic">
                        Alles-in-één pakket voor nieuwbouwwoningen. Renovlies plaatsen én afsausen in uw gewenste kleur — één vaste prijs, zonder verrassingen.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Renovlies professioneel plaatsen op alle wanden</li>
                        <li>• Volledig afsausen in gewenste kleur</li>
                        <li>• Sigma muurverf schrobklasse 1</li>
                        <li>• Keuze uit 1 basiskleur + 2 extra kleuren</li>
                        <li>• Inclusief materiaal: renovlies + lijm + Sigma verf</li>
                        <li>• Geen verborgen kosten · Geen aanbetaling</li>
                        <li>• 12 maanden garantie</li>
                      </ul>
                    </div>
                  </div>
                </label>

                {/* Glasweefsel Allround Pakket */}
                <label className={`block p-5 border-2 rounded-lg cursor-pointer transition-colors ${formData.package === 'glasweefsel-allround' ? 'border-emerald-700 bg-emerald-50' : 'border-gray-300 hover:border-emerald-700'}`}>
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="package"
                      value="glasweefsel-allround"
                      checked={formData.package === 'glasweefsel-allround'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Glasweefsel Allround Pakket</div>
                        <div>
                          <div className="font-bold text-emerald-700 text-lg">€22,50/m²</div>
                          <div className="text-xs text-gray-600 text-right">excl. BTW</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3 italic">
                        Ideaal voor renovatie of muren met een minder goede ondergrond. Glasweefsel overbrugt oneffenheden en scheuren — inclusief schilderwerk voor een vaste prijs.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Glasweefsel professioneel plaatsen op alle wanden</li>
                        <li>• Volledig afsausen in gewenste kleur</li>
                        <li>• Sigma muurverf schrobklasse 1</li>
                        <li>• Keuze uit 1 basiskleur + 2 extra kleuren</li>
                        <li>• Overbrugt oneffenheden en kleine scheuren</li>
                        <li>• Geen verborgen kosten · Geen aanbetaling</li>
                        <li>• 12 maanden garantie</li>
                      </ul>
                    </div>
                  </div>
                </label>

              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Diensten (optioneel)</h2>
              <p className="text-sm text-gray-600 mb-4">U kunt meerdere diensten selecteren.</p>
              <div className="space-y-4">
                {/* Muren/Plafond Schilderen */}
                <label className={`block p-5 border-2 rounded-lg cursor-pointer transition-colors ${formData.extraServices.includes('muren-schilderen') ? 'border-emerald-700 bg-emerald-50' : 'border-gray-300 hover:border-emerald-700'}`}>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      value="muren-schilderen"
                      checked={formData.extraServices.includes('muren-schilderen')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Muren Schilderen</div>
                        <div className="font-bold text-emerald-700 text-lg">Op aanvraag</div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3 italic">
                        Professionele schilders voor strak, egaal en duurzaam schilderwerk. Geschikt voor renovatie, nieuwbouw, opfrissen van bestaande wanden of na renovlies.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Wanden en/of plafond professioneel schuren</li>
                        <li>• Dekkend schilderen in gewenste kleur</li>
                        <li>• Inclusief schrobklasse 1 muurverf</li>
                        <li>• Geen verborgen kosten · Geen aanbetaling</li>
                        <li>• 12 maanden garantie</li>
                      </ul>
                    </div>
                  </div>
                </label>

                {/* Muren/Plafond Behangen */}
                <label className={`block p-5 border-2 rounded-lg cursor-pointer transition-colors ${formData.extraServices.includes('behanger-inhuren') ? 'border-emerald-700 bg-emerald-50' : 'border-gray-300 hover:border-emerald-700'}`}>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      value="behanger-inhuren"
                      checked={formData.extraServices.includes('behanger-inhuren')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Behanger Inhuren</div>
                        <div className="font-bold text-emerald-700 text-lg">Op aanvraag</div>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Aanbrengen van door u zelf aangeschaft behang</li>
                        <li>• Geschikt voor alle behangsoorten, ook luxe en exclusief</li>
                        <li>• Professionele en ervaren behangers</li>
                        <li>• Strak en vakkundig eindresultaat</li>
                        <li>• Geen verborgen kosten · Geen aanbetaling</li>
                        <li>• 12 maanden garantie</li>
                      </ul>
                    </div>
                  </div>
                </label>

                {/* Airless Spuiter */}
                <label className="block p-5 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      value="airless-spuiten"
                      checked={formData.extraServices.includes('airless-spuiten')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Airless Spuiter</div>
                        <div className="font-bold text-emerald-700 text-lg">Op aanvraag</div>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Perfect geschikt voor grote oppervlakken, wanden en plafonds</li>
                        <li>• Professionele en ervaren airless spuiters</li>
                        <li>• Snelle en efficiënte uitvoering dankzij geavanceerde apparatuur</li>
                        <li>• Egaal, streeploos en zeer dekkend resultaat</li>
                        <li>• Uitermate geschikt voor zolderkappen, nieuwbouwwoningen en renovatie</li>
                        <li>• Strakke afwerking binnen korte tijd</li>
                      </ul>
                    </div>
                  </div>
                </label>

                {/* Vloeren Leggen */}
                <label className="block p-5 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      value="vloeren-leggen"
                      checked={formData.extraServices.includes('vloeren-leggen')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Vloeren Leggen</div>
                        <div className="font-bold text-emerald-700 text-lg">Op aanvraag</div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3 italic">
                        Professioneel vloeren leggen voor elk type vloer.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Epoxy vloeren voor garages en bedrijfshallen</li>
                        <li>• PVC vloeren voor kantoren en woonruimtes</li>
                        <li>• Laminaat vloeren voor elke ruimte</li>
                        <li>• Professionele en ervaren vloerleggers</li>
                        <li>• Strakke afwerking en duurzaam resultaat</li>
                        <li>• Advies over de beste vloerkeuze voor uw situatie</li>
                      </ul>
                    </div>
                  </div>
                </label>

                {/* Plafond Egaliseren */}
                <label className="block p-5 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      value="plafond-egaliseren"
                      checked={formData.extraServices.includes('plafond-egaliseren')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Plafond Egaliseren</div>
                        <div className="font-bold text-emerald-700 text-lg">Op aanvraag</div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3 italic">
                        Maak uw plafond weer strak en egaal.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Professioneel plafond egaliseren</li>
                        <li>• Geschikt voor alle soorten plafonds</li>
                        <li>• Oneffenheden en scheuren worden verholpen</li>
                        <li>• Strak en egaal eindresultaat</li>
                        <li>• Klaar voor behangen of schilderen</li>
                        <li>• Ervaren vakmannen voor het beste resultaat</li>
                      </ul>
                    </div>
                  </div>
                </label>

                {/* Stukadoor Inhuren */}
                <label className="block p-5 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      value="stukadoor-inhuren"
                      checked={formData.extraServices.includes('stukadoor-inhuren')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Stukadoor Inhuren</div>
                        <div className="font-bold text-emerald-700 text-lg">Op aanvraag</div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3 italic">
                        Professionele stukadoors voor al uw stucwerk.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Ervaren stukadoors met jarenlange expertise</li>
                        <li>• Geschikt voor nieuwbouw en renovatie</li>
                        <li>• Wandafwerking en plafondafwerking</li>
                        <li>• Professioneel stucwerk en egaliseren</li>
                        <li>• Strak en duurzaam eindresultaat</li>
                        <li>• Flexibele planning afgestemd op uw project</li>
                      </ul>
                    </div>
                  </div>
                </label>

                {/* Plafond Spuiten */}
                <label className="block p-5 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      value="plafond-spuiten"
                      checked={formData.extraServices.includes('plafond-spuiten')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Plafond Spuiten</div>
                        <div className="font-bold text-emerald-700 text-lg">Op aanvraag</div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3 italic">
                        Professioneel plafond spuiten voor een strak, egaal en dekkend resultaat.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Professionele airless spuittechniek voor plafonds</li>
                        <li>• Egaal en streeploos resultaat</li>
                        <li>• Geschikt voor alle soorten plafonds</li>
                        <li>• Snelle uitvoering dankzij geavanceerde apparatuur</li>
                        <li>• Inclusief afdekkingsmateriaal voor vloeren en meubels</li>
                        <li>• Ervaren specialisten voor het beste eindresultaat</li>
                      </ul>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Uw gegevens</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Naam <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefoon <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                    Straatnaam <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    required
                    placeholder="Bijv. Hoofdstraat"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Huisnummer <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="Bijv. 123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                    Postcode <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    required
                    placeholder="Bijv. 1234 AB"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    Stad/Plaats <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="Bijv. Hengelo"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Oppervlakte Berekening</h2>
              <p className="text-sm text-gray-600 mb-4">Voeg ruimtes toe met de gewenste dienst en oppervlakte in m². Of upload een plattegrond zodat wij dit kunnen berekenen.</p>

              <div className="space-y-4">
                {formData.areaCalculations.map((calc) => (
                  <div key={calc.id} className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      <div className="md:col-span-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Dienst
                        </label>
                        <select
                          value={calc.service}
                          onChange={(e) => updateAreaCalculation(calc.id, 'service', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                        >
                          <option value="">Selecteer dienst</option>
                          {formData.package && (
                            <optgroup label="Geselecteerd Pakket">
                              <option value={formData.package}>
                                {packageNames[formData.package]}
                              </option>
                            </optgroup>
                          )}
                          {formData.extraServices.filter(s => !['airless-spuiten', 'vloeren-leggen', 'plafond-egaliseren', 'plafond-spuiten', 'stukadoor-inhuren', 'muren-schilderen', 'behanger-inhuren', 'glasweefsel-behang'].includes(s)).length > 0 && (
                            <optgroup label="Diensten">
                              {formData.extraServices
                                .filter(s => !['airless-spuiten', 'vloeren-leggen', 'plafond-egaliseren', 'plafond-spuiten', 'stukadoor-inhuren', 'muren-schilderen', 'behanger-inhuren', 'glasweefsel-behang'].includes(s))
                                .map(service => (
                                  <option key={service} value={service}>
                                    {serviceNames[service]}
                                  </option>
                                ))}
                            </optgroup>
                          )}
                        </select>
                      </div>
                      <div className="md:col-span-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ruimte naam
                        </label>
                        <input
                          type="text"
                          value={calc.roomName}
                          onChange={(e) => updateAreaCalculation(calc.id, 'roomName', e.target.value)}
                          placeholder="Bijv. Woonkamer"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Oppervlakte (m²)
                        </label>
                        <input
                          type="number"
                          value={calc.area}
                          onChange={(e) => updateAreaCalculation(calc.id, 'area', e.target.value)}
                          step="0.01"
                          min="0"
                          placeholder="Bijv. 25"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-1 flex items-end">
                        <button
                          type="button"
                          onClick={() => removeAreaCalculation(calc.id)}
                          className="w-full p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                          title="Verwijder"
                        >
                          <Trash2 className="w-5 h-5 mx-auto" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addAreaCalculation}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-emerald-700 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  disabled={!formData.package && formData.extraServices.filter(s => !['airless-spuiten', 'vloeren-leggen', 'plafond-egaliseren', 'plafond-spuiten', 'stukadoor-inhuren', 'muren-schilderen', 'behanger-inhuren', 'glasweefsel-behang'].includes(s)).length === 0}
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">Voeg ruimte toe</span>
                </button>

                {(!formData.package && formData.extraServices.filter(s => !['airless-spuiten', 'vloeren-leggen', 'plafond-egaliseren', 'plafond-spuiten', 'stukadoor-inhuren', 'muren-schilderen', 'behanger-inhuren', 'glasweefsel-behang'].includes(s)).length === 0) && (
                  <p className="text-sm text-amber-600 text-center">
                    Selecteer eerst een pakket of dienst hierboven om ruimtes toe te voegen
                  </p>
                )}

                {formData.areaCalculations.length > 0 && calculateEstimate() > 0 && (
                  <div className="p-4 bg-emerald-50 border-2 border-emerald-700 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">Geschatte totaalprijs:</span>
                      <span className="text-2xl font-bold text-emerald-700">
                        €{calculateEstimate().toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Dit is een indicatie op basis van de ingevoerde oppervlaktes. De exacte prijs wordt bepaald na een opname.
                    </p>
                  </div>
                )}

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">of</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="floorPlan" className="block text-sm font-medium text-gray-700 mb-1">
                    Upload plattegrond (optioneel)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-emerald-500 transition-colors">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="floorPlan"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-700 hover:text-emerald-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
                        >
                          <span>Upload een bestand</span>
                          <input
                            id="floorPlan"
                            name="floorPlan"
                            type="file"
                            accept="image/*,.pdf"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">of sleep het hier naartoe</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF tot 10MB</p>
                      {formData.floorPlan && (
                        <p className="text-sm text-emerald-700 font-medium mt-2">
                          Bestand geselecteerd: {formData.floorPlan.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Opmerkingen</h2>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                placeholder="Voeg hier eventuele opmerkingen toe..."
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-12 rounded-md transition-colors text-lg"
              >
                Verstuur offerte
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OffertePage;