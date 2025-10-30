import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { CheckCircle2 } from 'lucide-react';
import FadeInSection from '../common/FadeInSection';

const About = () => {
  const highlights = [
    "Gecertificeerde vakmensen voor elk project",
    "Gebruik van hoogwaardige materialen",
    "Stipte planning en oplevering",
    "Zeer tevreden klantenkring"
  ];

  return (
    <section id="about" className="py-20 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <FadeInSection direction="left">
              <SectionTitle
                title="Over Ons"
                subtitle="Experts in wandafwerking sinds 2008"
                alignment="left"
              />
              
              <p className="text-gray-600 mt-6 mb-8">
                Huisman Wandafwerking is een gerenommeerd familiebedrijf dat zich specialiseert in hoogwaardige 
                wandafwerking en schilderdiensten. Met jarenlange ervaring in de branche bieden wij 
                professionele oplossingen voor zowel particuliere als zakelijke klanten.
              </p>
              <p className="text-gray-600 mb-8">
                Onze vakspecialisten staan bekend om hun precisie, vakmanschap en kwaliteit. Wij werken 
                uitsluitend met premium materialen en zorgen voor een perfecte afwerking bij elk project, 
                groot of klein.
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
                src="https://imgur.com/Bo8TjWU.jpg" 
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