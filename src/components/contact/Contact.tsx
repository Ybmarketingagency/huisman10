import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validatie
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert('Vul alle verplichte velden in.');
      return;
    }

    const messageBody = `
Nieuw contactformulier bericht:

NAAM: ${formData.name}
E-MAIL: ${formData.email}
TELEFOON: ${formData.phone}

GESELECTEERDE DIENST:
${formData.service || 'Geen dienst geselecteerd'}

BERICHT:
${formData.message || 'Geen bericht'}
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
      alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Fout bij versturen:', error);
      alert('Er is iets misgegaan. Probeer het opnieuw of neem direct contact met ons op.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Contact"
          subtitle="Neem contact met ons op voor een vrijblijvende offerte"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-lg shadow-md p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contactinformatie</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <Phone className="text-emerald-600 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Telefoon</p>
                    <a href="tel:078-3690154" className="text-gray-800 hover:text-emerald-600 transition-colors">
                      078-3690154
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-emerald-600 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">E-mail</p>
                    <a href="mailto:info@huismanwandafwerking.nl" className="text-gray-800 hover:text-emerald-600 transition-colors text-sm break-all">
                      info@huismanwandafwerking.nl
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-emerald-600 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Adres</p>
                    <a 
                      href="https://maps.google.com/?q=Voltastraat+6a,+3316AW+Dordrecht" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-emerald-600 transition-colors"
                    >
                      Voltastraat 6a<br />3316AW Dordrecht
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-300">
                <h4 className="text-gray-800 font-medium mb-3">Openingstijden</h4>
                <p className="text-gray-600">
                  Maandag t/m vrijdag: 07:00 - 17:00
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <h4 className="text-gray-800 font-medium mb-3">Bedrijfsgegevens</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>KVK-nummer: 56495978</p>
                  <p>Eenmanszaak</p>
                  <p>Vestigingsnummer: 000026044196</p>
                  <p>Pilotenstraat 42, 1059CR Amsterdam</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-200 rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-100"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-100"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-100"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Dienst
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-100"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="behangen">Behangen</option>
                    <option value="renovlies">Renovlies</option>
                    <option value="glasweefsel">Glasweefsel Behang</option>
                    <option value="behangploeg">Behangploeg</option>
                    <option value="schilderwerk">Binnen Schilderwerk</option>
                    <option value="zolderplaten">Zolderplaten Afwerking</option>
                    <option value="airless">Airless Spuiten</option>
                    <option value="anders">Anders / Niet zeker</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-100"
                  placeholder="Beschrijf uw project of vraag..."
                ></textarea>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  Verstuur Bericht
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  * Verplichte velden
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;