import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Plus, Trash2, Layers, Grid2X2, Paintbrush, Scissors, Wind, Hammer, ChevronRight, ChevronLeft, Check, Phone } from 'lucide-react';

interface AreaCalculation {
  id: number;
  service: string;
  roomName: string;
  area: string;
}

interface FormData {
  package: string;
  extraServices: string[];
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
  'muren-schilderen': 'Muren/plafond schilderen',
  'behanger-inhuren': 'Muren/plafond behangen',
  'airless-spuiten': 'Airless spuiten',
  'stukadoor-inhuren': 'Stukadoor inhuren',
  'plafond-spuiten': 'Plafond spuiten',
  'plafond-egaliseren': 'Plafond egaliseren',
};

const MAIN_TILES = [
  { icon: Layers, label: 'Renovlies Allround Pakket', sub: '€22,50/m² · plaatsen + sausen', value: 'renovlies-allround', img: 'https://imgur.com/130MQxa.jpg' },
  { icon: Grid2X2, label: 'Glasweefsel Allround Pakket', sub: '€22,50/m² · plaatsen + sausen', value: 'glasweefsel-allround', img: 'https://imgur.com/m7wjcxN.jpg' },
  { icon: Paintbrush, label: 'Muren/plafond laten schilderen', sub: 'Op aanvraag', value: 'muren-schilderen', img: 'https://imgur.com/USExe76.jpg' },
  { icon: Scissors, label: 'Muren/plafond laten behangen', sub: 'Op aanvraag', value: 'behanger-inhuren', img: 'https://imgur.com/WDPnN4C.jpg' },
];

const EXTRA_SERVICES = [
  { value: 'airless-spuiten', label: 'Airless spuiten', icon: Wind },
  { value: 'stukadoor-inhuren', label: 'Stukadoor inhuren', icon: Hammer },
  { value: 'plafond-spuiten', label: 'Plafond spuiten', icon: Paintbrush },
  { value: 'plafond-egaliseren', label: 'Plafond egaliseren', icon: Layers },
];

const STEPS = ['Dienst', 'Gegevens', 'Project', 'Versturen'];

const OffertePage = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [nextId, setNextId] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    package: '',
    extraServices: [],
    name: '',
    email: '',
    phone: '',
    street: '',
    houseNumber: '',
    postcode: '',
    city: '',
    areaCalculations: [],
    floorPlan: null,
    comments: '',
  });

  const scrollTop = () => setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);

  const goTo = (n: number) => { setStep(n); scrollTop(); };

  const toggleTile = (value: string) => {
    setFormData(prev => ({
      ...prev,
      extraServices: prev.extraServices.includes(value)
        ? prev.extraServices.filter(s => s !== value)
        : [...prev.extraServices, value],
    }));
  };

  const toggleExtra = (value: string) => {
    setFormData(prev => ({
      ...prev,
      extraServices: prev.extraServices.includes(value)
        ? prev.extraServices.filter(s => s !== value)
        : [...prev.extraServices, value],
    }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, floorPlan: e.target.files?.[0] || null }));
  };

  const addRoom = () => {
    setFormData(prev => ({
      ...prev,
      areaCalculations: [...prev.areaCalculations, { id: nextId, service: prev.extraServices.find(s => ['renovlies-allround','glasweefsel-allround'].includes(s)) || '', roomName: '', area: '' }],
    }));
    setNextId(p => p + 1);
  };

  const removeRoom = (id: number) => setFormData(prev => ({ ...prev, areaCalculations: prev.areaCalculations.filter(c => c.id !== id) }));

  const updateRoom = (id: number, field: keyof AreaCalculation, value: string) =>
    setFormData(prev => ({ ...prev, areaCalculations: prev.areaCalculations.map(c => c.id === id ? { ...c, [field]: value } : c) }));

  const estimate = () => formData.areaCalculations.reduce((sum, c) => {
    const area = parseFloat(c.area) || 0;
    return sum + (['renovlies-allround', 'glasweefsel-allround'].includes(c.service) ? area * 22.5 : 0);
  }, 0);

  const step1Valid = formData.extraServices.length > 0;
  const step2Valid = formData.name && formData.email && formData.phone && formData.street && formData.houseNumber && formData.postcode && formData.city;

  const uploadToImgur = async (file: File): Promise<string | null> => {
    const fd = new FormData();
    fd.append('image', file);
    try {
      const res = await fetch('https://api.imgur.com/3/image', { method: 'POST', headers: { Authorization: 'Client-ID 546c25a59c58ad7' }, body: fd });
      const data = await res.json();
      return data.success ? data.data.link : null;
    } catch { return null; }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const imageUrl = formData.floorPlan ? await uploadToImgur(formData.floorPlan) : null;
    const servicesText = formData.extraServices.map(s => serviceNames[s] || s).join(', ') || 'Geen';
    const areasText = formData.areaCalculations.length
      ? formData.areaCalculations.map((c, i) => `${i + 1}. ${c.roomName || 'Ruimte'} - ${c.area} m² (${packageNames[c.service] || serviceNames[c.service] || c.service})`).join('\n')
      : 'Niet opgegeven';

    const msg = `Nieuwe offerte aanvraag\n\nGEKOZEN DIENSTEN:\n${servicesText}\n\nCONTACT:\nNaam: ${formData.name}\nE-mail: ${formData.email}\nTelefoon: ${formData.phone}\nAdres: ${formData.street} ${formData.houseNumber}, ${formData.postcode} ${formData.city}\n\nOPPERVLAKTE:\n${areasText}\n\nFOTO:\n${imageUrl || 'Geen'}\n\nOPMERKINGEN:\n${formData.comments || 'Geen'}`;

    try {
      await emailjs.send('service_z20osse', 'template_ytp0ow4', { to_name: 'Huisman Wandafwerking', from_name: formData.name, from_email: formData.email, message: msg, reply_to: formData.email }, 'o1zr2f6mQFLqSAGyJ');
      if ((window as any).fbq) (window as any).fbq('track', 'Lead', { content_name: 'Offerte Aanvraag', value: estimate(), currency: 'EUR' });
      if ((window as any).gtag) (window as any).gtag('event', 'conversion', { send_to: 'AW-17738015375/f_jzCIH57OgZELzMjIQ-', value: estimate() || 1, currency: 'EUR' });
      setSubmitted(true);
      scrollTop();
    } catch {
      alert('Er is een fout opgetreden. Probeer het later opnieuw of bel ons: 078-3690154');
    }
    setSubmitting(false);
  };

  const selectedLabel = formData.extraServices
    .map(s => packageNames[s] || serviceNames[s] || s)
    .join(', ');

  // ── Success screen ──────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 pt-20 pb-12 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Aanvraag verstuurd!</h2>
          <p className="text-gray-600 mb-2">Bedankt, <strong>{formData.name}</strong>. We nemen binnen 24 uur contact met u op.</p>
          <p className="text-gray-500 text-sm mb-8">U ontvangt ook een bevestiging op <strong>{formData.email}</strong>.</p>
          <a href="tel:0786690154" className="inline-flex items-center gap-2 bg-emerald-700 text-white font-bold py-3 px-7 rounded-xl">
            <Phone className="w-4 h-4" /> Liever bellen? 078-3690154
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-20 pb-12">
      <div ref={topRef} className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-1">Offerte aanvragen</h1>
            <p className="text-gray-500 text-sm">Gratis · Vrijblijvend · Binnen 24 uur reactie</p>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-1 mb-8">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const done = step > n;
              const active = step === n;
              return (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${done ? 'bg-emerald-600 text-white' : active ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-400'}`}>
                      {done ? <Check className="w-4 h-4" /> : n}
                    </div>
                    <span className={`text-xs mt-1 font-medium hidden sm:block ${active ? 'text-emerald-700' : 'text-gray-400'}`}>{label}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-1 rounded-full mx-1 transition-colors ${done ? 'bg-emerald-600' : 'bg-gray-200'}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* ── STEP 1: Dienst ── */}
          {step === 1 && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Wat kan Huisman voor u doen?</h2>
              <p className="text-sm text-gray-500 mb-5">Kies een of meerdere opties — u kunt altijd combineren.</p>

              {/* Main 4 tiles */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {MAIN_TILES.map(({ icon: Icon, label, sub, value, img }) => {
                  const isActive = formData.extraServices.includes(value);
                  return (
                    <button key={value} type="button" onClick={() => toggleTile(value)}
                      className={`relative overflow-hidden rounded-2xl text-left transition-all duration-200 hover:scale-[1.02] shadow-md ${isActive ? 'ring-4 ring-emerald-500 ring-offset-2' : ''}`}>
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
                      {isActive && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      )}
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

              {/* Extra services compact */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Overige diensten</p>
                <div className="flex flex-wrap gap-2">
                  {EXTRA_SERVICES.map(({ value, label, icon: Icon }) => {
                    const active = formData.extraServices.includes(value);
                    return (
                      <button key={value} type="button" onClick={() => toggleExtra(value)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${active ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600 hover:border-emerald-400'}`}>
                        <Icon className="w-4 h-4" />
                        {label}
                        {active && <Check className="w-3 h-3" strokeWidth={3} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button onClick={() => goTo(2)} disabled={!step1Valid}
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-4 px-8 rounded-xl transition-colors text-base">
                Doorgaan <ChevronRight className="w-5 h-5" />
              </button>
              {!step1Valid && <p className="text-center text-sm text-amber-600 mt-2">Selecteer eerst een dienst of pakket</p>}
            </div>
          )}

          {/* ── STEP 2: Gegevens ── */}
          {step === 2 && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Uw contactgegevens</h2>
              <p className="text-sm text-gray-500 mb-5">Zodat we u snel een offerte kunnen sturen.</p>

              {/* Selected service summary */}
              {selectedLabel && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 mb-5 text-sm text-emerald-700 font-medium">
                  ✓ {selectedLabel}
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Naam <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleInput} required placeholder="Jan de Vries"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefoon <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInput} required placeholder="06-12345678"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mailadres <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleInput} required placeholder="jan@email.nl"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Straatnaam <span className="text-red-500">*</span></label>
                    <input type="text" name="street" value={formData.street} onChange={handleInput} required placeholder="Hoofdstraat"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Huisnr. <span className="text-red-500">*</span></label>
                    <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleInput} required placeholder="12A"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postcode <span className="text-red-500">*</span></label>
                    <input type="text" name="postcode" value={formData.postcode} onChange={handleInput} required placeholder="1234 AB"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Plaats <span className="text-red-500">*</span></label>
                    <input type="text" name="city" value={formData.city} onChange={handleInput} required placeholder="Dordrecht"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <button onClick={() => goTo(1)} className="flex items-center gap-1 px-5 py-3 border-2 border-gray-200 rounded-xl text-gray-600 font-medium hover:border-gray-300 transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Terug
                </button>
                <button onClick={() => goTo(3)} disabled={!step2Valid}
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Doorgaan <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Project ── */}
          {step === 3 && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Uw project (optioneel)</h2>
              <p className="text-sm text-gray-500 mb-3">Voeg ruimtes toe voor een prijsindicatie, of upload een plattegrond of foto. U kunt dit ook overslaan.</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 text-sm text-amber-800">
                💡 <strong>Prijsindicatie</strong> — Voeg hieronder uw ruimtes toe met het oppervlak (m²) om een schatting te zien op basis van €22,50/m².
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
                {/* Area rows */}
                {formData.areaCalculations.length > 0 && (
                  <div className="space-y-3">
                    {formData.areaCalculations.map((calc) => (
                      <div key={calc.id} className="grid grid-cols-12 gap-2 items-end">
                        <div className="col-span-4">
                          <label className="block text-xs font-medium text-gray-500 mb-1">Dienst</label>
                          <select value={calc.service} onChange={e => updateRoom(calc.id, 'service', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                            <option value="">Kies</option>
                            {formData.extraServices.filter(s => ['renovlies-allround','glasweefsel-allround'].includes(s)).map(s => (
                              <option key={s} value={s}>{packageNames[s]?.split(' (')[0]}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-span-4">
                          <label className="block text-xs font-medium text-gray-500 mb-1">Ruimte</label>
                          <input type="text" value={calc.roomName} onChange={e => updateRoom(calc.id, 'roomName', e.target.value)}
                            placeholder="Woonkamer" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500" />
                        </div>
                        <div className="col-span-3">
                          <label className="block text-xs font-medium text-gray-500 mb-1">m²</label>
                          <input type="number" value={calc.area} onChange={e => updateRoom(calc.id, 'area', e.target.value)}
                            placeholder="25" min="0" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500" />
                        </div>
                        <div className="col-span-1 flex justify-center pb-0.5">
                          <button type="button" onClick={() => removeRoom(calc.id)} className="p-2 text-red-400 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {formData.extraServices.some(s => ['renovlies-allround','glasweefsel-allround'].includes(s)) && (
                  <button type="button" onClick={addRoom}
                    className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-dashed border-emerald-300 text-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors text-sm font-medium">
                    <Plus className="w-4 h-4" /> Ruimte toevoegen
                  </button>
                )}

                {estimate() > 0 && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Geschatte prijs</span>
                    <span className="text-xl font-bold text-emerald-700">€{estimate().toFixed(2).replace('.', ',')}</span>
                  </div>
                )}

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 border-t border-gray-100" />
                  <span className="text-xs text-gray-400">of</span>
                  <div className="flex-1 border-t border-gray-100" />
                </div>

                {/* File upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plattegrond / foto's uploaden <span className="text-gray-400 font-normal">(optioneel)</span></label>
                  <label className="flex flex-col items-center justify-center w-full py-6 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
                    <svg className="w-8 h-8 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    {formData.floorPlan
                      ? <span className="text-emerald-600 font-medium text-sm">{formData.floorPlan.name}</span>
                      : <><span className="text-sm text-emerald-600 font-medium">Klik om te uploaden</span><span className="text-xs text-gray-400 mt-1">PNG, JPG of PDF · max 10MB</span></>}
                    <input type="file" accept="image/*,.pdf" onChange={handleFile} className="sr-only" />
                  </label>
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Opmerkingen</label>
                  <textarea name="comments" value={formData.comments} onChange={handleInput} rows={3}
                    placeholder="Bijv. type woning, bijzonderheden, gewenste kleuren..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm resize-none" />
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <button onClick={() => goTo(2)} className="flex items-center gap-1 px-5 py-3 border-2 border-gray-200 rounded-xl text-gray-600 font-medium hover:border-gray-300 transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Terug
                </button>
                <button onClick={() => goTo(4)}
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Controleren <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 4: Samenvatting & verzenden ── */}
          {step === 4 && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-1">Controleer uw aanvraag</h2>
              <p className="text-sm text-gray-500 mb-5">Alles klopt? Dan versturen we het direct.</p>

              <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100 overflow-hidden mb-5">
                {/* Dienst */}
                <div className="px-5 py-4 flex justify-between items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Dienst / Pakket</p>
                    <p className="text-sm font-medium text-gray-800">{selectedLabel || '—'}</p>

                  </div>
                  <button onClick={() => goTo(1)} className="text-xs text-emerald-600 underline flex-shrink-0 ml-4">Wijzigen</button>
                </div>
                {/* Gegevens */}
                <div className="px-5 py-4 flex justify-between items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Contactgegevens</p>
                    <p className="text-sm font-medium text-gray-800">{formData.name}</p>
                    <p className="text-sm text-gray-500">{formData.email}</p>
                    <p className="text-sm text-gray-500">{formData.phone}</p>
                    <p className="text-sm text-gray-500">{formData.street} {formData.houseNumber}, {formData.postcode} {formData.city}</p>
                  </div>
                  <button onClick={() => goTo(2)} className="text-xs text-emerald-600 underline flex-shrink-0 ml-4">Wijzigen</button>
                </div>
                {/* Project */}
                <div className="px-5 py-4 flex justify-between items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Project</p>
                    {formData.areaCalculations.length > 0
                      ? formData.areaCalculations.map((c, i) => <p key={i} className="text-sm text-gray-700">{c.roomName || 'Ruimte'}: {c.area} m²</p>)
                      : <p className="text-sm text-gray-400">{formData.floorPlan ? `Plattegrond: ${formData.floorPlan.name}` : 'Geen oppervlakte opgegeven'}</p>}
                    {formData.comments && <p className="text-sm text-gray-500 mt-1 italic">"{formData.comments}"</p>}
                    {estimate() > 0 && <p className="text-sm font-bold text-emerald-700 mt-1">Schatting: €{estimate().toFixed(2).replace('.', ',')}</p>}
                  </div>
                  <button onClick={() => goTo(3)} className="text-xs text-emerald-600 underline flex-shrink-0 ml-4">Wijzigen</button>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => goTo(3)} className="flex items-center gap-1 px-5 py-3 border-2 border-gray-200 rounded-xl text-gray-600 font-medium hover:border-gray-300 transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Terug
                </button>
                <button onClick={handleSubmit} disabled={submitting}
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-bold py-4 px-6 rounded-xl transition-colors text-base">
                  {submitting ? 'Versturen...' : <><Check className="w-5 h-5" /> Offerte versturen</>}
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-3">Geen aanbetaling · Vrijblijvend · Binnen 24 uur reactie</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default OffertePage;
