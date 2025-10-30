import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200/20 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-white group-hover:text-emerald-300 transition-colors">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-emerald-300 flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-emerald-300 flex-shrink-0" size={20} />
        )}
      </button>
      <div 
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqItems = [
    {
      question: "Hoe lang duurt het behangen van een gemiddelde kamer?",
      answer: "Het behangen van een gemiddelde kamer (circa 30m²) duurt meestal 1 tot 2 werkdagen, afhankelijk van de staat van de muren, het type behang en de complexiteit van de ruimte. Bij de planning houden we rekening met droogtijd tussen verschillende werkzaamheden."
    },
    {
      question: "Wat zijn de voordelen van glasweefsel behang?",
      answer: "Glasweefsel behang is zeer duurzaam, brandwerend, scheuroverbruggend en ademend. Het is ideaal voor ruimtes die extra wandversteviging nodig hebben of waar wanden vaak belast worden. Daarnaast kan het meermaals overgeschilderd worden, waardoor u de kleur kunt aanpassen zonder het behang te vervangen."
    },
    {
      question: "Moeten meubels uit de ruimte voor schilderwerk?",
      answer: "Idealiter is de ruimte leeg, maar we begrijpen dat dit niet altijd mogelijk is. We kunnen meubels naar het midden van de kamer verplaatsen en afdekken met beschermfolie. Voor optimaal resultaat is het wel aan te raden kleine items, decoraties en kostbare spullen tijdelijk te verwijderen."
    },
    {
      question: "Hoe lang moet ik wachten voordat een vers geschilderde ruimte weer gebruikt kan worden?",
      answer: "Dit hangt af van het type verf. Watergedragen verf is meestal na 2-4 uur droog, maar we adviseren 24 uur te wachten voordat de ruimte volledig in gebruik wordt genomen. Bij oplosmiddelhoudende verf kan dit 24-48 uur duren. We geven altijd specifiek advies bij het afronden van het project."
    },
    {
      question: "Bieden jullie garantie op het uitgevoerde werk?",
      answer: "Ja, wij bieden 2 jaar garantie op al onze werkzaamheden. Dit geldt voor zowel het schilderwerk als het behangwerk. De garantie dekt eventuele gebreken in de uitvoering, zoals onthechting of scheurvorming die niet door externe factoren worden veroorzaakt."
    },
    {
      question: "Werken jullie met milieuvriendelijke producten?",
      answer: "Ja, wij werken zoveel mogelijk met milieuvriendelijke en watergedragen producten die voldoen aan de moderne milieueisen. Deze producten zijn niet alleen beter voor het milieu, maar ook voor de gezondheid van onze klanten, met minimale geur- en VOC-uitstoot."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Veelgestelde Vragen"
          subtitle="Antwoorden op de meest voorkomende vragen"
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Heeft u een andere vraag?</p>
          <a 
            href="#contact" 
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
          >
            Neem Contact Op
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;