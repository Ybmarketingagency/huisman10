import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  wallsArea: string;
  ceilingsArea: string;
  floorPlan: File | null;
  comments: string;
}

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
    wallsArea: '',
    ceilingsArea: '',
    floorPlan: null,
    comments: ''
  });

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

    const packageNames: Record<string, string> = {
      comfort: 'Pakket Comfort (€9,50/m²)',
      pro: 'Pakket Pro (€14,50/m²)',
      master: 'Pakket Master (€19,50/m²)'
    };

    const serviceNames: Record<string, string> = {
      'behanger-inhuren': 'Behanger inhuren voor eigen behang',
      'schuren-wanden': 'Schuren van de wanden',
      'airless-spuiten': 'Airless spuiten van zolderkappen'
    };

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

    // Maak een complete message body met alle informatie
    const messageBody = `
Nieuwe offerte aanvraag van:

GEKOZEN PAKKET:
${packageNames[formData.package] || formData.package}

EXTRA DIENSTEN:
${extraServicesText}

CONTACTGEGEVENS:
Naam: ${formData.name}
E-mail: ${formData.email}
Telefoon: ${formData.phone}
Adres: ${formData.street} ${formData.houseNumber}, ${formData.postcode}

OPPERVLAKTE:
Wanden: ${formData.wallsArea ? `${formData.wallsArea} m²` : 'Niet opgegeven'}
Plafonds: ${formData.ceilingsArea ? `${formData.ceilingsArea} m²` : 'Niet opgegeven'}
${!formData.wallsArea && !formData.ceilingsArea ? 'Plattegrond geüpload (zie hieronder)' : ''}

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
        'service_dac928r',
        'template_ytp0ow4',
        templateParams,
        'o1zr2f6mQFLqSAGyJ'
      );
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
        wallsArea: '',
        ceilingsArea: '',
        floorPlan: null,
        comments: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Er is een fout opgetreden bij het verzenden van uw aanvraag. Probeer het later opnieuw.');
    }
  };

  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-8 text-center">
            Offerte aanvragen
          </h1>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Kies uw pakket</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Voorwaarden voor renovlies</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>De pakketten zijn geschikt voor wanden die behangklaar zijn. Vaak is de afwerking echter niet goed genoeg voor het aanbrengen van renovlies.</p>
                  <p>Als wij tijdens inspectie constateren dat extra voorbereidingswerkzaamheden nodig zijn (zoals schuren, stucwerk of herstelwerkzaamheden), dan komen hier extra kosten bij. We informeren u hierover voordat we beginnen met de werkzaamheden.</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Pakket Comfort */}
                <label className="block p-5 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="package"
                      value="comfort"
                      checked={formData.package === 'comfort'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 mt-1"
                      required
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Pakket Comfort</div>
                        <div className="font-bold text-emerald-700 text-lg">€9,50/m²</div>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Aanbrengen renovlies 150 gram</li>
                        <li>• Professionele behangers</li>
                        <li>• Inclusief materiaal en afvoer bouwafval</li>
                        <li>• Geen aanbetaling</li>
                        <li>• Exclusief sauzen en kitten</li>
                      </ul>
                    </div>
                  </div>
                </label>

                {/* Pakket Pro */}
                <label className="block p-5 border-2 border-emerald-700 rounded-lg cursor-pointer hover:border-emerald-800 transition-colors bg-emerald-50">
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="package"
                      value="pro"
                      checked={formData.package === 'pro'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Pakket Pro</div>
                        <div className="font-bold text-emerald-700 text-lg">€14,50/m²</div>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Aanbrengen renovlies 150 gram</li>
                        <li>• Professionele behangers</li>
                        <li>• Inclusief materiaal en afvoer bouwafval</li>
                        <li>• Geen aanbetaling</li>
                        <li>• Dekkend sauzen</li>
                        <li>• Schrobklasse 1 latex</li>
                        <li>• Naden en kieren kitten</li>
                        <li>• 12 maanden garantie</li>
                      </ul>
                    </div>
                  </div>
                </label>

                {/* Pakket Master */}
                <label className="block p-5 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="package"
                      value="master"
                      checked={formData.package === 'master'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 mt-1"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-800 text-lg">Pakket Master</div>
                        <div className="font-bold text-emerald-700 text-lg">€19,50/m²</div>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Aanbrengen glasvlies 150 gram</li>
                        <li>• Professionele behangers</li>
                        <li>• Inclusief materiaal en afvoer bouwafval</li>
                        <li>• Geen aanbetaling</li>
                        <li>• Naden en kieren kitten</li>
                        <li>• Twee lagen sauzen</li>
                        <li>• Schrobklasse 1</li>
                        <li>• 12 maanden garantie</li>
                      </ul>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Extra diensten (optioneel)</h2>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <input
                    type="checkbox"
                    value="behanger-inhuren"
                    checked={formData.extraServices.includes('behanger-inhuren')}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">Behanger inhuren voor eigen behang</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <input
                    type="checkbox"
                    value="schuren-wanden"
                    checked={formData.extraServices.includes('schuren-wanden')}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">Schuren van de wanden</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <input
                    type="checkbox"
                    value="airless-spuiten"
                    checked={formData.extraServices.includes('airless-spuiten')}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 text-emerald-700 focus:ring-emerald-700 rounded"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">Airless spuiten van zolderkappen</div>
                  </div>
                </label>
                <div className="p-4 border-2 border-gray-300 rounded-lg">
                  <label className="block">
                    <div className="font-semibold text-gray-800 mb-2">Anders</div>
                    <input
                      type="text"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleInputChange}
                      placeholder="Beschrijf andere dienst..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Uw gegevens</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Naam
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
                    E-mail
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
                    Telefoon
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
                    Straatnaam
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
                    Huisnummer
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
                    Postcode
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
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Oppervlakte</h2>
              <p className="text-sm text-gray-600 mb-4">Vul het aantal m² in of upload een plattegrond zodat wij dit kunnen berekenen.</p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="wallsArea" className="block text-sm font-medium text-gray-700 mb-1">
                      Wanden in m² (optioneel)
                    </label>
                    <input
                      type="number"
                      id="wallsArea"
                      name="wallsArea"
                      value={formData.wallsArea}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      placeholder="Bijv. 100"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="ceilingsArea" className="block text-sm font-medium text-gray-700 mb-1">
                      Plafonds in m² (optioneel)
                    </label>
                    <input
                      type="number"
                      id="ceilingsArea"
                      name="ceilingsArea"
                      value={formData.ceilingsArea}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      placeholder="Bijv. 50"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                    />
                  </div>
                </div>

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