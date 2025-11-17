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
    <div className="relative h-screen w-full">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://imgur.com/3NM402m.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full container mx-auto px-4">
        <div className="h-full flex items-center justify-start pt-32 md:pt-24">
          {/* Pakket DELUXE Promo - Left Aligned */}
          <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 md:p-6 max-w-xs w-full transform transition-all duration-300 hover:scale-105">
            <div className="text-center mb-3">
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">Pakket</span>
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-500 mt-1">DELUXE</h2>
              <div className="mt-1">
                <span className="text-3xl md:text-4xl font-bold text-white">€19,50</span>
                <span className="text-sm text-gray-300"> per m²</span>
              </div>
            </div>

            <div className="space-y-1.5 mb-4">
              {[
                'Aanbrengen glasvlies 150 gram',
                'Korte wachttijd',
                'Professionele behangers',
                'Afvoeren bouwafval',
                'Naden en kieren kitten',
                'Inclusief materiaal',
                'Inclusief voorrij- en parkeerkosten',
                'Geen aanbetaling',
                'Twee lagen sauzen',
                '12 maanden garantie'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-100">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/offerte"
              className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 text-sm"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <button
            onClick={scrollToServices}
            className="text-white focus:outline-none"
            aria-label="Scroll naar beneden"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;