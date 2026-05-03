import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone, Shield, Clock, Star, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Wat kost renovlies laten aanbrengen?',
    a: 'De prijs hangt af van de oppervlakte en staat van uw muren. Wij werken met vaste, transparante prijzen zonder verborgen kosten. Vraag een gratis offerte aan voor een exacte prijs op maat.'
  },
  {
    q: 'Hoe lang duurt het aanbrengen van renovlies?',
    a: 'Een gemiddelde eengezinswoning (250m²) is binnen 5 werkdagen volledig afgewerkt. Wij plannen efficiënt en houden ons aan de afgesproken opleverdatum.'
  },
  {
    q: 'Moet ik een aanbetaling doen?',
    a: 'Nee. Wij werken zonder aanbetaling. U betaalt pas nadat het werk is opgeleverd en u tevreden bent.'
  }
];

const RenovliesSpecialist = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-50 pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Partner Banner */}
          <div className="bg-emerald-700 text-white rounded-2xl p-8 text-center mb-6 shadow-lg">
            <p className="text-sm uppercase tracking-widest text-emerald-200 mb-2 font-medium">Uw vakspecialist</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Huisman Wandafwerking is uw partner in renovlies
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
            <img src="https://imgur.com/64Q5VEL.jpg" alt="Renovlies" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                Strakke Wanden met Renovlies — Direct Schilderklaar
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
            Renovliesbehang is het perfecte alternatief voor stucwerk: strak, naadloos en direct schilderklaar. Huisman Wandafwerking is gespecialiseerd in renovlies en heeft al honderden woningen en bedrijfspanden succesvol afgewerkt door heel Nederland.
          </p>

          {/* Key Benefits */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <h2 className="text-xl font-bold text-emerald-700 mb-4">Waarom kiezen voor renovlies?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Glad en naadloos resultaat — net als stucwerk',
                'Aanzienlijk goedkoper dan traditioneel stucwerk',
                'Direct schilderklaar, geen voorstrijkmiddel nodig',
                'Hele woning klaar binnen 5 werkdagen',
                'Krimp- en scheurresistent',
                'Brandvertragend en isolerend',
                'Geschikt voor vrijwel alle ondergronden',
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
              <img src="https://imgur.com/O7YDsMd.jpg" alt="Renovlies resultaat" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-700 mb-3">Duurzaam en veilig</h2>
              <p className="text-gray-600 mb-4">
                Renovlies is sterker dan stucwerk en minder gevoelig voor beschadigingen. De brandvertragende en isolerende werking draagt bij aan de veiligheid en het comfort van uw woning.
              </p>
              <p className="text-gray-600">
                Wij werken uitsluitend met hoogwaardig renovlies van bewezen kwaliteit en garanderen een vakkundige verwerking door ons ervaren team.
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-emerald-700 mb-5 text-center">Wat onze klanten zeggen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Familie Janssen', text: 'Onze woning ziet er fantastisch uit. Het renovlies is strak en naadloos aangebracht. Echt vakwerk!', score: 5 },
                { name: 'M. de Vries', text: 'Netjes, snel en geen gedoe. Ze kwamen op afgesproken tijd en leverden precies op wat ze beloofden.', score: 5 },
                { name: 'R. Bakker', text: 'Beste prijs-kwaliteitsverhouding die ik kon vinden. Geen aanbetaling, gewoon betalen als je tevreden bent.', score: 5 },
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
            <h3 className="text-2xl font-bold mb-2">Klaar voor strakke wanden?</h3>
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

export default RenovliesSpecialist;
