import React, { useState, useEffect } from 'react';

interface FormData {
  package: string;
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
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value="deluxe"
                    checked={formData.package === 'deluxe'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-emerald-700 focus:ring-emerald-700"
                    required
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">Pakket Deluxe €19,50 per m²</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value="behangen"
                    checked={formData.package === 'behangen'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-emerald-700 focus:ring-emerald-700"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">Alleen behangen</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-emerald-700 transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value="muurverf"
                    checked={formData.package === 'muurverf'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-emerald-700 focus:ring-emerald-700"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">Alleen voorzien van schrobklasse 1 muurverf</div>
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