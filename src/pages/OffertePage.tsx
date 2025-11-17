import React, { useState, useEffect } from 'react';

interface FormData {
  package: string;
  extraServices: string[];
  name: string;
  email: string;
  phone: string;
  width: string;
  height: string;
  area: string;
  comments: string;
}

const OffertePage = () => {
  const [formData, setFormData] = useState<FormData>({
    package: '',
    extraServices: [],
    name: '',
    email: '',
    phone: '',
    width: '',
    height: '',
    area: '0.00',
    comments: ''
  });

  useEffect(() => {
    const width = parseFloat(formData.width) || 0;
    const height = parseFloat(formData.height) || 0;
    const area = (width * height).toFixed(2);
    setFormData(prev => ({ ...prev, area }));
  }, [formData.width, formData.height]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw aanvraag! We nemen zo snel mogelijk contact met u op.');
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

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-semibold text-amber-800">Let op: Voorwaarden voor renovlies</h3>
                    <div className="mt-2 text-sm text-amber-700">
                      <p className="mb-2">De pakketten zijn geschikt voor wanden die behangklaar zijn. Vaak is de afwerking echter niet goed genoeg voor het aanbrengen van renovlies.</p>
                      <p className="font-medium">Als wij tijdens inspectie constateren dat extra voorbereidingswerkzaamheden nodig zijn, zoals:</p>
                      <ul className="list-disc list-inside mt-1 ml-2 space-y-1">
                        <li>Schuren van de wanden</li>
                        <li>Extra stucwerk</li>
                        <li>Herstelwerkzaamheden</li>
                      </ul>
                      <p className="mt-2 font-medium">Dan komen hier extra kosten bij. We informeren u hierover voordat we beginnen met de werkzaamheden.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value="comfort"
                    checked={formData.package === 'comfort'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-emerald-700 focus:ring-emerald-700"
                    required
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">Pakket Comfort €9,50 per m²</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value="profinish"
                    checked={formData.package === 'profinish'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-emerald-700 focus:ring-emerald-700"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">Pakket Pro Finish €14,50 per m²</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value="masterline"
                    checked={formData.package === 'masterline'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-emerald-700 focus:ring-emerald-700"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">Pakket Masterline €19,50 per m²</div>
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
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Oppervlakte</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                    Breedte (m)
                  </label>
                  <input
                    type="number"
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                    Hoogte (m)
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-md border border-emerald-200">
                <p className="text-sm text-gray-700">Automatisch berekende m²:</p>
                <p className="text-2xl font-bold text-emerald-700">{formData.area} m²</p>
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