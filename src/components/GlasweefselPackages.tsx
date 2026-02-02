import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import FadeInSection from './common/FadeInSection';

const GlasweefselPackages = () => {

  return (
    <section className="hidden md:block py-12 md:py-16 bg-[#8c8c8c]">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <SectionTitle
            title="Glasweefsel Pakketten"
            subtitle="Professionele glasweefsel afwerking met hoogwaardige kwaliteit"
          />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 md:items-stretch">
          <FadeInSection delay={0} className="h-full">
            <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105 flex flex-col h-full">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">Glasweefsel Behanger Inhuren</h3>
                <div>
                  <span className="text-3xl font-bold text-gray-800">€9,50</span>
                  <span className="text-lg text-gray-600">/m²</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">excl. BTW | vanaf 100m²</p>
              </div>

              <p className="text-sm text-gray-700 mb-4 text-center italic">
                Ideaal voor: nieuwbouw, renovatie, strakke wanden en snelle opleveringen. Dé beste keuze voor wie snel en betaalbaar glasweefsel wil laten aanbrengen.
              </p>

              <div className="space-y-2 mb-6 flex-grow">
                {[
                  'Wanden professioneel schuren',
                  'Aanbrengen van glasweefsel',
                  'Professionele glasweefsel specialisten',
                  'Inclusief materiaal: glasweefsel + lijm',
                  'Bouwafval wordt netjes afgevoerd',
                  'Korte wachttijd',
                  'Geen verborgen kosten (incl. voorrij- en parkeerkosten)',
                  'Geen aanbetaling',
                  '12 maanden garantie'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
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

          <FadeInSection delay={100} className="h-full">
            <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105 border-2 border-emerald-700 flex flex-col h-full">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">Pakket Glasweefsel Compleet</h3>
                <div>
                  <span className="text-3xl font-bold text-gray-800">€17,50</span>
                  <span className="text-lg text-gray-600">/m²</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">excl. BTW | vanaf 100m²</p>
              </div>

              <p className="text-sm text-gray-700 mb-4 text-center italic">
                Onze meest gekozen optie voor een volledig afgewerkt resultaat inclusief schilderwerk. Voordeel: uw wanden zijn direct klaar, strak geschilderd én volledig afgewerkt.
              </p>

              <div className="space-y-2 mb-6 flex-grow">
                {[
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
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
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

          <FadeInSection delay={200} className="h-full">
            <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105 flex flex-col h-full">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">Pakket Glasweefsel Ultra</h3>
                <div>
                  <span className="text-3xl font-bold text-gray-800">€20,50</span>
                  <span className="text-lg text-gray-600">/m²</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">excl. BTW | vanaf 100m²</p>
              </div>

              <p className="text-sm text-gray-700 mb-4 text-center italic">
                Voor wie maximale afwerking en kleurvariatie wenst. Perfect voor nieuwbouwwoningen. Ideaal voor: complete afwerking met meerdere kleuren en premium uitstraling.
              </p>

              <div className="space-y-2 mb-6 flex-grow">
                {[
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
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
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
        </div>
      </div>
    </section>
  );
};

export default GlasweefselPackages;
