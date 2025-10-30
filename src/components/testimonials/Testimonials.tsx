import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Annelies Kersbergen",
      rating: 5,
      text: "Betrouwbare en sympathieke vakmensen. Ze nemen zelf geen genoegen wanneer het niet 100% perfect is. We hadden een heel lastig plafond, maar de mannen van Huisman zijn net zo lang doorgegaan tot wij én zijzelf tevreden waren. Een absolute aanrader!",
      projectType: "Plafond Renovatie"
    },
    {
      name: "Joke Wijsman",
      rating: 5,
      text: "Zeer professioneel de muren van onze nieuwe woning behangen en geverfd. Ook de kleine puntjes die wij na oplevering nog zagen hebben ze zo snel mogelijk vakkundig opgelost. Wij zijn zeer tevreden met het geleverde werk en zeker ook met de geleverde service!",
      projectType: "Behang & Schilderwerk"
    },
    {
      name: "Dafne Goossen",
      rating: 5,
      text: "Professioneel bedrijf met heel vriendelijke behangers en een transparante wijze van werken. het per uur kunnen inhuren van behangers is ideaal voor kleinere klussen. Er wordt netjes gewerkt en goed meegedacht: een aanrader!",
      projectType: "Behangwerk"
    },
    {
      name: "Amber van der Sar",
      rating: 5,
      text: "Na de verwijdering van ons schoorsteenkanaal was er stucwerk noodzakelijk. Dit is netjes en zorgvuldig uitgevoerd. Zelfs de sierlijsten op het plafond zijn helemaal op maat hersteld. Dit is boven verwachting goed gelukt! Ook het overige stuc- en schilderwerk aan de plafonds in huis is prima uitgevoerd.",
      projectType: "Stucwerk & Schilderwerk"
    }
  ];
  
  return (
    <section id="testimonials" className="py-20 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Klantervaringen"
          subtitle="Wat onze klanten over ons zeggen"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
              projectType={testimonial.projectType}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-emerald-700 text-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Tevreden met onze service?</h3>
              <p>Plaats een review of deel uw ervaring met ons.</p>
            </div>
            <a 
              href="#contact" 
              className="mt-4 md:mt-0 bg-white text-emerald-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors"
            >
              Laat een Review Achter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;