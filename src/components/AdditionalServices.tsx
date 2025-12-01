import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdditionalServices = () => {
  return (
    <div className="bg-gradient-to-b from-[#d1d1d1] to-[#8c8c8c] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
            Andere Diensten
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Naast renovlies bieden wij ook professionele diensten voor schilderwerk en specialistische projecten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Schilderen */}
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">Muren Schilderen</h3>
              <div>
                <span className="text-3xl font-bold text-gray-800">€11,50</span>
                <span className="text-lg text-gray-600">/m²</span>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {[
                'Schrobklasse 1 latex',
                'Korte wachttijd',
                'Professionele schilders',
                'Afvoeren bouwafval',
                'Inclusief materiaal',
                'Inclusief afplakken',
                'Inclusief voorrij en parkeerkosten',
                'Geen aanbetaling',
                'Naden en kieren kitten'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/offerte"
              className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Offerte aanvragen
            </Link>
          </div>

          {/* Behanger Inhuren */}
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">Behanger Inhuren</h3>
              <div>
                <span className="text-3xl font-bold text-gray-800">€XX</span>
                <span className="text-lg text-gray-600">/m²</span>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {[
                'Voor grotere projecten',
                'Professionele behangers',
                'Eigen behang mogelijk',
                'Korte wachttijd',
                'Vakkundig resultaat',
                'Inclusief voorrij',
                'Flexibele planning'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/offerte"
              className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Offerte aanvragen
            </Link>
          </div>

          {/* Airless Spuiter Inhuren */}
          <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">Airless Spuiter</h3>
              <div>
                <span className="text-3xl font-bold text-gray-800">€XX</span>
                <span className="text-lg text-gray-600">/m²</span>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {[
                'Voor grote oppervlakken',
                'Professionele spuiters',
                'Snelle uitvoering',
                'Egaal resultaat',
                'Geschikt voor zolderkappen',
                'Inclusief materiaal',
                'Inclusief voorrij'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/offerte"
              className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
