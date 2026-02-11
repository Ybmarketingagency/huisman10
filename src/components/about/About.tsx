import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { CheckCircle2 } from 'lucide-react';
import FadeInSection from '../common/FadeInSection';

const About = () => {
  const highlights = [
    "Specialist in nieuwbouw wandafwerking en plafondafwerking",
    "Expert in airless spuiten en stucwerk",
    "Hoogwaardige materialen en perfecte afwerking",
    "Ruime ervaring met nieuwbouwprojecten door heel Nederland"
  ];

  return (
    <section id="about" className="py-20 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <FadeInSection direction="left">
              <SectionTitle
                title="Over Ons"
                subtitle="Dé specialist voor nieuwbouw wandafwerking en plafondafwerking"
                alignment="left"
              />
              
              <p className="text-gray-600 mt-6 mb-8">
                Huisman Wandafwerking is gespecialiseerd in wandafwerking, stucwerk en plafondafwerking voor woningen en bedrijfspanden. Wij verzorgen zowel nieuwbouw stucwerk als renovatie van bestaande wanden, met aandacht voor detail en afwerking.
              </p>
              <p className="text-gray-600 mb-8">
                Heeft u een nieuwbouwwoning en bent u op zoek naar een betrouwbare partij voor de afwerking van uw wanden en plafonds? Dan bent u bij ons aan het juiste adres. Met jarenlange ervaring in nieuwbouwprojecten verzorgen wij professionele wandafwerking, plafondafwerking en airless spuiten. Wij zijn dé partij voor nieuwbouw afwerking van plafond en wanden.
              </p>
              <p className="text-gray-600 mb-8">
                Bent u op zoek naar een ervaren stukadoor of wandafwerker die kwaliteit en betrouwbaarheid combineert? Dan bent u bij Huisman Wandafwerking aan het juiste adres.
              </p>
              
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <FadeInSection key={index} direction="left" delay={index * 100}>
                    <div className="flex items-start">
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mr-2 mt-1" size={20} />
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
              
              <FadeInSection direction="up" delay={200}>
                <div className="mt-8">
                  <a 
                    href="#contact" 
                    className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
                  >
                    Neem Contact Op
                  </a>
                </div>
              </FadeInSection>
            </FadeInSection>
          </div>
          
          <FadeInSection direction="right" className="order-1 lg:order-2">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://imgur.com/CMGsn7n.jpg"
                alt="Huisman Wandafwerking Team"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;