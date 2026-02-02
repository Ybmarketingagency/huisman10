import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdditionalServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Muren Schilderen',
      price: '€11,50',
      unit: '/m²',
      priceNote: 'excl. BTW | vanaf 100m²',
      description: 'Professionele schilders voor strak, egaal en duurzaam schilderwerk.',
      subtitle: 'Geschikt voor: renovatie, nieuwbouw, opfrissen van bestaande wanden of na renovlies.',
      features: [
        'Schrobklasse 1 latex',
        'Korte wachttijd',
        'Professionele schilders',
        'Afvoeren bouwafval',
        'Inclusief materiaal',
        'Inclusief afplakken',
        'Inclusief voorrij en parkeerkosten',
        'Geen aanbetaling',
        'Naden en kieren kitten'
      ],
      footerNote: null
    },
    {
      title: 'Behanger Inhuren',
      price: '€19,95',
      unit: '/m²',
      priceNote: 'excl. BTW | vanaf 100m² | + €125 opstartkosten',
      description: null,
      subtitle: 'Aanbrengen van door u zelf aangeschaft behang',
      features: [
        'Geschikt voor grote en kleine projecten',
        'Professionele en ervaren behangers',
        'Snelle en efficiënte uitvoering',
        'Strak en vakkundig eindresultaat',
        'Flexibele planning, afgestemd op uw project'
      ],
      footerNote: 'Vertel ons meer over uw project en ontvang een onafhankelijke, duidelijke offerte op maat – volledig afgestemd op uw situatie en wensen.'
    },
    {
      title: 'Airless Spuiter Inhuren',
      price: 'Op aanvraag',
      unit: '',
      priceNote: null,
      description: 'Professioneel & Supersnel Spuitwerk',
      subtitle: null,
      features: [
        'Perfect geschikt voor grote oppervlakken, wanden en plafonds',
        'Professionele en ervaren airless spuiters',
        'Snelle en efficiënte uitvoering dankzij geavanceerde apparatuur',
        'Egaal, streeploos en zeer dekkend resultaat',
        'Uitermate geschikt voor zolderkappen, nieuwbouwwoningen en renovatie',
        'Strakke afwerking binnen korte tijd'
      ],
      footerNote: 'Interesse in een vrijblijvende prijsopgave?'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#d1d1d1] to-[#8c8c8c] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
            Diensten
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Naast renovlies bieden wij ook professionele diensten voor schilderwerk en specialistische projecten
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">{service.title}</h3>
                <div>
                  <span className="text-3xl font-bold text-gray-800">{service.price}</span>
                  <span className="text-lg text-gray-600">{service.unit}</span>
                </div>
                {service.priceNote && <p className="text-xs text-gray-600 mt-1">{service.priceNote}</p>}
              </div>

              {service.description && (
                <p className="text-sm text-gray-700 mb-4 text-center italic">
                  {service.description}
                </p>
              )}
              {service.subtitle && (
                <p className="text-sm text-gray-600 mb-4 text-center">
                  {service.subtitle}
                </p>
              )}

              <div className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {service.footerNote && (
                <p className="text-xs text-gray-600 text-center mb-4">
                  {service.footerNote}
                </p>
              )}

              <Link
                to="/offerte"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Offerte aanvragen
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-emerald-700 mb-2">{service.title}</h3>
                      <div>
                        <span className="text-3xl font-bold text-gray-800">{service.price}</span>
                        <span className="text-lg text-gray-600">{service.unit}</span>
                      </div>
                      {service.priceNote && <p className="text-xs text-gray-600 mt-1">{service.priceNote}</p>}
                    </div>

                    {service.description && (
                      <p className="text-sm text-gray-700 mb-4 text-center italic">
                        {service.description}
                      </p>
                    )}
                    {service.subtitle && (
                      <p className="text-sm text-gray-600 mb-4 text-center">
                        {service.subtitle}
                      </p>
                    )}

                    <div className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {service.footerNote && (
                      <p className="text-xs text-gray-600 text-center mb-4">
                        {service.footerNote}
                      </p>
                    )}

                    <Link
                      to="/offerte"
                      className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
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
            onClick={() => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-emerald-700 hover:bg-emerald-800 text-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label="Vorige dienst"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % services.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-emerald-700 hover:bg-emerald-800 text-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label="Volgende dienst"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-emerald-700' : 'bg-gray-400'
                }`}
                aria-label={`Ga naar dienst ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
