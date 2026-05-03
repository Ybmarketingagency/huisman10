import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone, Shield, Clock, Star, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Wat is het verschil tussen glasweefsel en renovlies?',
    a: 'Glasweefsel heeft een zichtbare structuur (zoals visgraat of ruit) en wordt geschilderd. Renovlies is gladder en lijkt meer op stucwerk. Glasweefsel is ideaal voor muren met kleine oneffenheden die u wilt camoufleren met een decoratieve structuur.'
  },
  {
    q: 'Kan glasweefsel in elke kleur worden geschilderd?',
    a: 'Ja, glasweefsel is in de basis wit en kan in elke kleur worden geschilderd. Het vereist wel ervaring om de verf goed te verdelen over de structuur. Ons team zorgt voor een egaal en mooi eindresultaat.'
  },
  {
    q: 'Hoe lang duurt het plaatsen van glasweefsel?',
    a: 'Afhankelijk van de oppervlakte en staat van de muren. Een gemiddelde woonkamer is doorgaans binnen één à twee dagen klaar. Wij geven altijd een realistische planning op voorhand.'
  }
];

const GlasweefselSpecialist = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-50 pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Partner Banner */}
          <div className="bg-emerald-700 text-white rounded-2xl p-8 text-center mb-6 shadow-lg">
            <p className="text-sm uppercase tracking-widest text-emerald-200 mb-2 font-medium">Uw vakspecialist</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Huisman Wandafwerking is uw partner in glasweefsel schilderen
            </h2>
            <p className="text-emerald-100 text-lg italic mb-5">
              "We zijn pas tevreden als alles goed is"
            </p>
            <Link
              to="/offerte"
              className="inline-block bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl text-base transition-colors duration-200 shadow-md"
            >
              Vraag gratis een offerte aan
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { icon: Shield, label: 'Geen aanbetaling' },
              { icon: Star, label: '12 mnd garantie' },
              { icon: Check, label: 'Gratis offerte' },
              { icon: Clock, label: 'Snelle oplevering' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white rounded-xl p-3 flex items-center gap-2 shadow-sm">
                <Icon className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative h-[300px] rounded-xl overflow-hidden mb-8">
            <img src="https://imgur.com/yiRcg6Y.jpg" alt="Glasweefsel schilderen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                Glasweefsel Aanbrengen & Schilderen — Decoratief en Duurzaam
              </h1>
              <Link
                to="/offerte"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg"
              >
                Offerte aanvragen →
              </Link>
            </div>
          </div>

          {/* Intro */}
          <p className="text-gray-700 mb-10 text-lg leading-relaxed">
            Glasweefselbehang combineert decoratieve uitstraling met praktische voordelen. Wij zijn experts in het aanbrengen én professioneel schilderen van glasweefsel — zodat u een strak, egaal resultaat krijgt dat tientallen jaren meegaat.
          </p>

          {/* Key Benefits */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <h2 className="text-xl font-bold text-emerald-700 mb-4">Voordelen van glasweefsel schilderen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Decoratieve structuur in diverse patronen (visgraat, ruit, zigzag)',
                'Ideaal voor muren met kleine oneffenheden',
                'In elke kleur te schilderen',
                'Zeer sterk en krasvast eindresultaat',
                'Brandwerend en vezelversterkt',
                'Langere levensduur dan gewoon schilderwerk',
                'Geschikt voor wanden én plafonds',
                '12 maanden garantie op het werk',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-emerald-700 mb-5 text-center">Zo werkt het</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Gratis offerte', desc: 'Vul het formulier in of bel ons. Binnen 24 uur ontvangt u een vaste prijs zonder verrassingen.' },
                { step: '2', title: 'Wij plannen in', desc: 'We spreken een startdatum af die voor u uitkomt. Onze ploeg komt op tijd en werkt netjes.' },
                { step: '3', title: 'Strak resultaat', desc: 'Na oplevering inspecteren we het werk samen. Pas als u tevreden bent, sluiten we de klus af.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-white rounded-xl p-5 shadow-sm text-center">
                  <div className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{step}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mid CTA */}
          <div className="bg-emerald-700 text-white rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-4 mb-8 shadow-lg">
            <div>
              <p className="font-bold text-lg">Vraag vandaag nog een gratis offerte aan</p>
              <p className="text-emerald-200 text-sm">Binnen 24 uur reactie · Geen verplichtingen</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link to="/offerte" className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-colors text-center">
                Offerte aanvragen
              </Link>
              <a href="tel:0786690154" className="flex items-center gap-2 border-2 border-white text-white hover:bg-emerald-600 font-bold py-3 px-6 rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> Bel ons
              </a>
            </div>
          </div>

          {/* Image + text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="relative h-[280px] rounded-xl overflow-hidden">
              <img src="https://imgur.com/KzcqJKk.jpg" alt="Glasweefsel structuur" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-700 mb-3">Professioneel geschilderd — perfect egaal</h2>
              <p className="text-gray-600 mb-4">
                Glasweefsel schilderen vereist ervaring: de verf moet gelijkmatig in de structuur worden aangebracht zonder dat de textuur verloren gaat. Ons team heeft honderden projecten afgewerkt en kent precies de juiste techniek.
              </p>
              <p className="text-gray-600">
                Wij adviseren u ook over de beste structuur en kleur voor uw ruimte, zodat het eindresultaat precies is wat u voor ogen had.
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-emerald-700 mb-5 text-center">Wat onze klanten zeggen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Familie de Boer', text: 'Prachtig resultaat! De glasweefsel is strak geschilderd en de structuur ziet er geweldig uit. Echt aanrader.', score: 5 },
                { name: 'K. Smits', text: 'Professioneel team, kwamen op afgesproken tijd en lieten alles netjes achter. Absoluut tevreden.', score: 5 },
                { name: 'T. van der Berg', text: 'Goed advies gekregen over welke structuur bij mijn muren past. Eindresultaat is precies wat ik wilde.', score: 5 },
              ].map(({ name, text, score }) => (
                <div key={name} className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: score }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic mb-3">"{text}"</p>
                  <p className="text-gray-800 font-semibold text-sm">— {name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-emerald-700 mb-5 text-center">Veelgestelde vragen</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-gray-800 hover:text-emerald-700 transition-colors"
                  >
                    {faq.q}
                    {openFaq === i ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-emerald-700 text-white rounded-2xl p-10 text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Klaar voor een stijlvolle wandafwerking?</h3>
            <p className="text-emerald-100 mb-2">Vraag vandaag nog een gratis, vrijblijvende offerte aan.</p>
            <p className="text-emerald-200 text-sm mb-6">Geen aanbetaling · 12 maanden garantie · Snel ingepland</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/offerte" className="inline-block bg-white text-emerald-700 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl text-lg transition-colors duration-200 shadow-md">
                Vraag direct een offerte
              </Link>
              <a href="tel:0786690154" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-emerald-600 font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-200">
                <Phone className="w-5 h-5" /> 078-3690154
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GlasweefselSpecialist;
