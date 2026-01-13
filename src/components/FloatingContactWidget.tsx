import React, { useState } from 'react';
import { Phone, X, MessageCircle, ArrowLeft } from 'lucide-react';

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [callbackData, setCallbackData] = useState({ name: '', phone: '' });

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '#contact';
    setIsOpen(false);
    setShowCallback(false);
    setCallbackData({ name: '', phone: '' });
  };

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'translate-x-[400px]' : 'translate-x-0'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-lg px-6 py-4 flex items-center gap-3 transition-all duration-300 hover:scale-105"
          aria-label="Contact opties"
        >
          <MessageCircle size={24} />
          <span className="font-medium">Heeft u vragen?</span>
        </button>
      </div>

      <div
        className={`fixed bottom-0 right-0 w-full sm:w-96 h-auto bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ maxHeight: '90vh' }}
      >
        <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {showCallback && (
              <button
                onClick={() => setShowCallback(false)}
                className="hover:bg-emerald-600 rounded-full p-1 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h3 className="text-lg font-semibold">
              {showCallback ? 'Terugbelverzoek' : 'Heeft u vragen?'}
            </h3>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              setShowCallback(false);
            }}
            className="hover:bg-emerald-600 rounded-full p-2 transition-colors"
            aria-label="Sluiten"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {!showCallback ? (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <Phone size={32} className="text-emerald-700" />
                </div>
                <p className="text-gray-600 text-sm">
                  We helpen u graag verder! Kies hieronder uw voorkeur:
                </p>
              </div>

              <a
                href="tel:078-3690154"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
              >
                <Phone size={20} />
                Bel ons direct
              </a>

              <a
                href="https://wa.me/31618876465?text=Hallo,%20ik%20heb%20een%20vraag%20over%20uw%20diensten"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <button
                onClick={() => setShowCallback(true)}
                className="w-full bg-white hover:bg-gray-50 text-emerald-700 font-medium py-4 px-6 rounded-lg transition-colors border-2 border-emerald-700 flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Word u liever terug gebeld?
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-3">Of stuur ons een bericht:</p>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-emerald-700 hover:text-emerald-800 font-medium text-sm underline"
                >
                  Ga naar contactformulier
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCallbackSubmit} className="space-y-4">
              <p className="text-gray-600 text-sm mb-4">
                Vul uw gegevens in en we bellen u zo snel mogelijk terug.
              </p>

              <div>
                <label htmlFor="callback-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Naam *
                </label>
                <input
                  type="text"
                  id="callback-name"
                  value={callbackData.name}
                  onChange={(e) => setCallbackData({ ...callbackData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Uw naam"
                />
              </div>

              <div>
                <label htmlFor="callback-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefoonnummer *
                </label>
                <input
                  type="tel"
                  id="callback-phone"
                  value={callbackData.phone}
                  onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="06 12345678"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Verstuur verzoek
              </button>

              <p className="text-xs text-gray-500 text-center">
                We nemen binnen 24 uur contact met u op
              </p>
            </form>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => {
            setIsOpen(false);
            setShowCallback(false);
          }}
        />
      )}
    </>
  );
};

export default FloatingContactWidget;
