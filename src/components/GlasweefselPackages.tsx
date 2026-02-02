import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import FadeInSection from './common/FadeInSection';

const GlasweefselPackages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const packages = [
    {
      title: "Glasweefsel Behanger Inhuren",
      price: "€9,50",
      description: "Ideaal voor: nieuwbouw, renovatie, strakke wanden en snelle opleveringen. Dé beste keuze voor wie snel en betaalbaar glasweefsel wil laten aanbrengen.",
      features: [
        'Wanden professioneel schuren',
        'Aanbrengen van glasweefsel',
        'Professionele glasweefsel specialisten',
        'Inclusief materiaal: glasweefsel + lijm',
        'Bouwafval wordt netjes afgevoerd',
        'Korte wachttijd',
        'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
        'Geen aanbetaling',
        '12 maanden garantie'
      ],
      highlighted: false
    },
    {
      title: "Pakket Glasweefsel Compleet",
      price: "€17,50",
      description: "Onze meest gekozen optie voor een volledig afgewerkt resultaat inclusief schilderwerk. Voordeel: uw wanden zijn direct klaar, strak geschilderd én volledig afgewerkt.",
      features: [
        'Wanden professioneel schuren',
        'Professionele glasweefsel specialisten',
        'Aanbrengen van glasweefsel',
        'Professionele schilders voor strak en duurzaam schilderwerk',
        'Alle naden en kieren professioneel gekit',
        'Dekkend schilderen in 1 kleur naar keuze',
        'Inclusief materiaal: glasweefsel + lijm + kit + schrobklasse 1 muurverf',
        'Bouwafval wordt netjes afgevoerd',
        'Korte wachttijd',
        'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
        'Geen aanbetaling',
        '12 maanden garantie'
      ],
      highlighted: true
    },
    {
      title: "Pakket Glasweefsel Ultra",
      price: "€20,50",
      description: "Voor wie maximale afwerking en kleurvariatie wenst. Perfect voor nieuwbouwwoningen. Ideaal voor: complete afwerking met meerdere kleuren en premium uitstraling.",
      features: [
        'Wanden professioneel schuren',
        'Professionele glasweefsel specialisten',
        'Aanbrengen van glasweefsel',
        'Professionele schilders voor strak en duurzaam schilderwerk',
        'Alle naden en kieren professioneel gekit',
        'Dekkend schilderen in maximaal 3 kleuren naar keuze',
        'Inclusief materiaal: glasweefsel + lijm + kit + schrobklasse 1 muurverf',
        'Bouwafval wordt netjes afgevoerd',
        'Korte wachttijd',
        'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
        'Geen aanbetaling',
        '12 maanden garantie'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#8c8c8c]">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <SectionTitle
            title="Glasweefsel Pakketten"
            subtitle="Professionele glasweefsel afwerking met hoogwaardige kwaliteit"
          />
        </FadeInSection>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 md:items-stretch">
          {packages.map((pkg, index) => (
            <FadeInSection key={index} delay={index * 100} className="h-full">
              <div className={`bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105 flex flex-col h-full ${pkg.highlighted ? 'border-2 border-emerald-700' : ''}`}>
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-2">{pkg.title}</h3>
                  <div>
                    <span className="text-3xl font-bold text-gray-800">{pkg.price}</span>
                    <span className="text-lg text-gray-600">/m²</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">excl. BTW | vanaf 100m²</p>
                </div>

                <p className="text-sm text-gray-700 mb-4 text-center italic">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-6 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/offerte"
                  className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-300 mt-auto"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-md mx-auto mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {packages.map((pkg, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className={`bg-white rounded-lg shadow-xl p-6 flex flex-col ${pkg.highlighted ? 'border-2 border-emerald-700' : ''}`}>
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-emerald-700 mb-2">{pkg.title}</h3>
                      <div>
                        <span className="text-3xl font-bold text-gray-800">{pkg.price}</span>
                        <span className="text-lg text-gray-600">/m²</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">excl. BTW | vanaf 100m²</p>
                    </div>

                    <p className="text-sm text-gray-700 mb-4 text-center italic">
                      {pkg.description}
                    </p>

                    <div className="space-y-2 mb-6 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/offerte"
                      className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-300 mt-auto"
                    >
                      Offerte aanvragen
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-emerald-700 hover:bg-emerald-800 text-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label="Vorig pakket"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-emerald-700 hover:bg-emerald-800 text-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label="Volgend pakket"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-emerald-700' : 'bg-gray-400'
                }`}
                aria-label={`Ga naar pakket ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlasweefselPackages;
