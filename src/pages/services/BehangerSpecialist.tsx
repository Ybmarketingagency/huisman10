import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone, Shield, Clock, Star, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Kan ik ook luxe of speciaal behang laten plaatsen?',
    a: 'Absoluut. Wij zijn gespecialiseerd in alle behangsoorten — van standaard papierbehang tot exclusief vinyl, textiel- en structuurbehang. Hoe bijzonderder het materiaal, hoe meer ervaring er nodig is. Die hebben wij.'
  },
  {
    q: 'Wat als mijn muren niet vlak zijn?',
    a: 'Geen probleem. Wij inspecteren altijd eerst de ondergrond en schuren of egaliseren waar nodig, zodat het behang perfect aansluit. Dit zit inbegrepen in onze service.'
  },
  {
    q: 'Moet ik zelf het behang aanschaffen?',
    a: 'U kunt zelf behang aanleveren, maar wij helpen u ook graag bij het adviseren over de juiste keuze. Wij rekenen altijd het benodigde aantal rollen uit zodat u niet te veel of te weinig koopt.'
  }
];

const BehangerSpecialist = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-50 pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Partner Banner */}
          <div className="bg-emerald-700 text-white rounded-2xl p-8 text-center mb-6 shadow-lg">
            <p className="text-sm uppercase tracking-widest text-emerald-200 mb-2 font-medium">Uw vakspecialist</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Huisman Wandafwerking is uw partner in behangwerk
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
            <img src="https://imgur.com/DkCqDEp.jpg" alt="Professionele behanger" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                Professionele Behanger — Normaal, Luxe en Speciaal Behang
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
            Van normaal papierbehang tot het meest exclusieve luxe behang — Huisman Wandafwerking behanger al uw muren vakkundig en strak. Wij zijn gespecialiseerd in alle behangsoorten en geven eerlijk advies over wat het beste bij uw woning en wensen past.
          </p>

          {/* Key Benefits */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <h2 className="text-xl font-bold text-emerald-700 mb-4">Waarom Huisman Wandafwerking als uw behanger?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Gespecialiseerd in alle soorten behang, ook luxe en exclusief',
                'Volledige service: van ondergrond tot afwerking',
                'Nauwkeurig werken — strakke naden en hoeken',
                'Advies op maat over keuze van behang en patronen',
                'Nette werkwijze — alles wordt afgedekt en afgeplakt',
                'U levert het behang, wij doen de rest',
                'Altijd binnen budget en planning',
                '12 maanden garantie op het behangwerk',
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
              <img src="https://imgur.com/J6gyUvj.jpg" alt="Behangen woonkamer" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-700 mb-3">Specialist in luxe behang</h2>
              <p className="text-gray-600 mb-4">
                Luxe en exclusief behang vereist extra precisie, de juiste lijm en vakkundige verwerking. Een fout bij duur behang is kostbaar. Wij hebben de kennis en ervaring om zelfs het meest bijzondere behang perfect aan te brengen.
              </p>
              <p className="text-gray-600">
                Twijfelt u over welk behang u moet kiezen? Wij geven eerlijk advies en helpen u voorkomen dat u een miskoop doet.
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-emerald-700 mb-5 text-center">Wat onze klanten zeggen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'S. Vermeulen', text: 'Ons luxe behang is perfect aangebracht. Geen fouten, strakke naden. Ik was bang dat het mis zou gaan maar ze wisten precies wat ze deden.', score: 5 },
                { name: 'Familie Hooft', text: 'Super netjes gewerkt. Ze hebben ook de muren eerst goed voorbereid. Eindresultaat ziet er prachtig uit.', score: 5 },
                { name: 'P. Claes', text: 'Goed advies gekregen en eerlijk gezegd wat meer betaald dan de goedkoopste — maar het resultaat is het zeker waard.', score: 5 },
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
            <h3 className="text-2xl font-bold mb-2">Klaar voor prachtige wanden?</h3>
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

export default BehangerSpecialist;
