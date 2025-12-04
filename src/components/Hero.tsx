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
      {/* Hero Section - Slightly shorter */}
      <div className="relative h-[85vh] w-full">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('https://imgur.com/3NM402m.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Company Name - Desktop only */}
        <div className="hidden md:block relative z-20 pt-24 pb-6">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-emerald-500">
              Huisman Wandafwerking
            </h1>
          </div>
        </div>

        {/* Packages Section - Desktop only */}
        <div className="hidden md:block relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {/* Pakket Comfort */}
              <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 transform transition-all duration-300 hover:scale-105 flex flex-col">
                <div className="text-center mb-3">
                  <h2 className="text-xl font-bold text-emerald-500 mb-1">Pakket Renovlies Comfort</h2>
                  <div>
                    <span className="text-2xl font-bold text-white">€12,50</span>
                    <span className="text-sm text-gray-300">/m²</span>
                  </div>
                  <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                    Ideaal voor: nieuwbouw, renovatie, strakke wanden en snelle opleveringen. Dé beste keuze voor wie snel en betaalbaar renovlies wil laten aanbrengen.
                  </p>
                </div>

                <div className="space-y-1.5 mb-4 flex-grow">
                  {[
                    'Wanden professioneel schuren',
                    'Aanbrengen van 150 grams renovlies',
                    'Professionele renovlies specialisten',
                    'Inclusief materiaal: renovlies 150 grams + lijm',
                    'Bouwafval wordt netjes afgevoerd',
                    'Korte wachttijd',
                    'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
                    'Geen aanbetaling',
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
                  className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm mt-auto"
                >
                  Offerte aanvragen
                </Link>
              </div>

              {/* Pakket Pro */}
              <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 transform transition-all duration-300 hover:scale-105 border-2 border-emerald-500 flex flex-col">
                <div className="text-center mb-3">
                  <h2 className="text-xl font-bold text-emerald-500 mb-1">Pakket Renovlies Pro</h2>
                  <div>
                    <span className="text-2xl font-bold text-white">€19,50</span>
                    <span className="text-sm text-gray-300">/m²</span>
                  </div>
                  <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                    Onze meest gekozen optie voor een strak afgewerkt en direct schilderklaar resultaat. Voordeel: uw wanden zijn direct klaar, strak én volledig afgewerkt.
                  </p>
                </div>

                <div className="space-y-1.5 mb-4 flex-grow">
                  {[
                    'Wanden professioneel schuren',
                    'Professionele renovlies specialisten',
                    'Aanbrengen van 150 grams renovlies',
                    'Professionele schilders voor strak en duurzaam schilderwerk',
                    'Alle naden en kieren professioneel gekit',
                    'Dekkend schilderen in 1 kleur naar keuze',
                    'Inclusief materiaal: renovlies + lijm + kit + schrobklasse 1 muurverf',
                    'Bouwafval wordt netjes afgevoerd',
                    'Korte wachttijd',
                    'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
                    'Geen aanbetaling',
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
                  className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm mt-auto"
                >
                  Offerte aanvragen
                </Link>
              </div>

              {/* Pakket Master */}
              <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 transform transition-all duration-300 hover:scale-105 flex flex-col">
                <div className="text-center mb-3">
                  <h2 className="text-xl font-bold text-emerald-500 mb-1">Pakket Renovlies Master</h2>
                  <div>
                    <span className="text-2xl font-bold text-white">€22,50</span>
                    <span className="text-sm text-gray-300">/m²</span>
                  </div>
                  <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                    Voor wie maximale afwerking en kleurvariatie wenst. Perfect voor nieuwbouwwoningen. Ideaal voor: complete afwerking met meerdere kleuren en premium uitstraling.
                  </p>
                </div>

                <div className="space-y-1.5 mb-4 flex-grow">
                  {[
                    'Wanden professioneel schuren',
                    'Professionele renovlies specialisten',
                    'Aanbrengen van 150 grams renovlies',
                    'Professionele schilders voor strak en duurzaam schilderwerk',
                    'Alle naden en kieren professioneel gekit',
                    'Dekkend schilderen in maximaal 3 kleuren naar keuze',
                    'Inclusief materiaal: renovlies + lijm + kit + schrobklasse 1 muurverf',
                    'Bouwafval wordt netjes afgevoerd',
                    'Korte wachttijd',
                    'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
                    'Geen aanbetaling',
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
                  className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm mt-auto"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content - Only visible on mobile */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center md:hidden">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professioneel Behangwerk en Schilderwerk
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Vakmanschap en kwaliteit voor uw woning of bedrijf
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

      {/* Packages Section - Below hero on mobile only */}
      <div className="md:hidden relative bg-[#d1d1d1]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-4 max-w-6xl mx-auto">
            {/* Pakket Comfort */}
            <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 transform transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="text-center mb-3">
                <h2 className="text-xl font-bold text-emerald-500 mb-1">Pakket Renovlies Comfort</h2>
                <div>
                  <span className="text-2xl font-bold text-white">€12,50</span>
                  <span className="text-sm text-gray-300">/m²</span>
                </div>
                <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                  Ideaal voor: nieuwbouw, renovatie, strakke wanden en snelle opleveringen. Dé beste keuze voor wie snel en betaalbaar renovlies wil laten aanbrengen.
                </p>
              </div>

              <div className="space-y-1.5 mb-4 flex-grow">
                {[
                  'Wanden professioneel schuren',
                  'Aanbrengen van 150 grams renovlies',
                  'Professionele renovlies specialisten',
                  'Inclusief materiaal: renovlies 150 grams + lijm',
                  'Bouwafval wordt netjes afgevoerd',
                  'Korte wachttijd',
                  'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
                  'Geen aanbetaling',
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
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm mt-auto"
              >
                Offerte aanvragen
              </Link>
            </div>

            {/* Pakket Pro */}
            <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 transform transition-all duration-300 hover:scale-105 border-2 border-emerald-500 flex flex-col">
              <div className="text-center mb-3">
                <h2 className="text-xl font-bold text-emerald-500 mb-1">Pakket Renovlies Pro</h2>
                <div>
                  <span className="text-2xl font-bold text-white">€19,50</span>
                  <span className="text-sm text-gray-300">/m²</span>
                </div>
                <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                  Onze meest gekozen optie voor een strak afgewerkt en direct schilderklaar resultaat. Voordeel: uw wanden zijn direct klaar, strak én volledig afgewerkt.
                </p>
              </div>

              <div className="space-y-1.5 mb-4 flex-grow">
                {[
                  'Wanden professioneel schuren',
                  'Professionele renovlies specialisten',
                  'Aanbrengen van 150 grams renovlies',
                  'Professionele schilders voor strak en duurzaam schilderwerk',
                  'Alle naden en kieren professioneel gekit',
                  'Dekkend schilderen in 1 kleur naar keuze',
                  'Inclusief materiaal: renovlies + lijm + kit + schrobklasse 1 muurverf',
                  'Bouwafval wordt netjes afgevoerd',
                  'Korte wachttijd',
                  'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
                  'Geen aanbetaling',
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
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm mt-auto"
              >
                Offerte aanvragen
              </Link>
            </div>

            {/* Pakket Master */}
            <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-2xl p-5 transform transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="text-center mb-3">
                <h2 className="text-xl font-bold text-emerald-500 mb-1">Pakket Renovlies Master</h2>
                <div>
                  <span className="text-2xl font-bold text-white">€22,50</span>
                  <span className="text-sm text-gray-300">/m²</span>
                </div>
                <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                  Voor wie maximale afwerking en kleurvariatie wenst. Perfect voor nieuwbouwwoningen. Ideaal voor: complete afwerking met meerdere kleuren en premium uitstraling.
                </p>
              </div>

              <div className="space-y-1.5 mb-4 flex-grow">
                {[
                  'Wanden professioneel schuren',
                  'Professionele renovlies specialisten',
                  'Aanbrengen van 150 grams renovlies',
                  'Professionele schilders voor strak en duurzaam schilderwerk',
                  'Alle naden en kieren professioneel gekit',
                  'Dekkend schilderen in maximaal 3 kleuren naar keuze',
                  'Inclusief materiaal: renovlies + lijm + kit + schrobklasse 1 muurverf',
                  'Bouwafval wordt netjes afgevoerd',
                  'Korte wachttijd',
                  'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
                  'Geen aanbetaling',
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
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm mt-auto"
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
