import React from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section - Full screen on mobile, partial on desktop */}
      <div className="relative h-screen md:h-[60vh] w-full">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('https://imgur.com/3NM402m.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Hero Content - Only visible on mobile */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center md:hidden">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professioneel Schilderwerk
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Vakmanschap en kwaliteit voor uw woning
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/offerte"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Offerte aanvragen
            </Link>
            <button
              onClick={scrollToServices}
              className="bg-white hover:bg-gray-100 text-emerald-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Bekijk diensten
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce md:hidden">
          <button
            onClick={scrollToServices}
            className="text-white focus:outline-none"
            aria-label="Scroll naar beneden"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>

      {/* Packages Section - Below hero on mobile, overlapping on desktop */}
      <div className="relative bg-[#d1d1d1] md:bg-transparent md:-mt-96">
        <div className="container mx-auto px-4 py-8 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Pakket Comfort */}
            <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 transform transition-all duration-300 hover:scale-105">
              <div className="text-center mb-3">
                <h2 className="text-xl font-bold text-emerald-500 mb-1">Pakket Comfort</h2>
                <div>
                  <span className="text-2xl font-bold text-white">€9,50</span>
                  <span className="text-sm text-gray-300">/m²</span>
                </div>
              </div>

              <div className="space-y-1.5 mb-4">
                {[
                  'Aanbrengen renovlies 150 gram',
                  'Korte wachttijd',
                  'Professionele behangers',
                  'Afvoeren bouwafval',
                  'Inclusief materiaal',
                  'Inclusief voorrij en parkeerkosten',
                  'Latex leveren mogelijk',
                  'Geen aanbetaling',
                  'Exclusief sauzen en kitten'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-100">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/offerte"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
              >
                Offerte aanvragen
              </Link>
            </div>

            {/* Pakket Pro Finish */}
            <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 transform transition-all duration-300 hover:scale-105 border-2 border-emerald-500">
              <div className="text-center mb-3">
                <h2 className="text-xl font-bold text-emerald-500 mb-1">Pakket Pro Finish</h2>
                <div>
                  <span className="text-2xl font-bold text-white">€14,50</span>
                  <span className="text-sm text-gray-300">/m²</span>
                </div>
              </div>

              <div className="space-y-1.5 mb-4">
                {[
                  'Aanbrengen renovlies 150 gram',
                  'Korte wachttijd',
                  'Professionele behangers',
                  'Afvoeren bouwafval',
                  'Inclusief materiaal',
                  'Inclusief voorrij en parkeerkosten',
                  'Geen aanbetaling',
                  'Dekkend sauzen',
                  'Schrobklasse 1 latex',
                  'Naden en kieren kitten',
                  '12 maanden garantie'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-100">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/offerte"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
              >
                Offerte aanvragen
              </Link>
            </div>

            {/* Pakket Masterline */}
            <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 transform transition-all duration-300 hover:scale-105">
              <div className="text-center mb-3">
                <h2 className="text-xl font-bold text-emerald-500 mb-1">Pakket Masterline</h2>
                <div>
                  <span className="text-2xl font-bold text-white">€19,50</span>
                  <span className="text-sm text-gray-300">/m²</span>
                </div>
              </div>

              <div className="space-y-1.5 mb-4">
                {[
                  'Aanbrengen glasvlies 150 gram',
                  'Korte wachttijd',
                  'Professionele behangers',
                  'Afvoeren bouwafval',
                  'Inclusief materiaal',
                  'Inclusief voorrij en parkeerkosten',
                  'Geen aanbetaling',
                  'Naden en kieren kitten',
                  'Twee lagen sauzen',
                  '12 maanden garantie'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-100">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/offerte"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;