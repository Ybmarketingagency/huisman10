import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone, Shield, Clock, Star, ChevronDown, ChevronUp, Home, Package } from 'lucide-react';

const faqs = [
  {
    q: 'Is renovlies geschikt voor nieuwbouwwoningen?',
    a: 'Renovlies is bij uitstek geschikt voor nieuwbouw. Nieuwbouwwanden werken nog een periode na het bouwen, waardoor stucwerk kan scheuren. Renovlies is krimp- en scheurresistent en beweegt mee met de woning — ideaal voor nieuwbouw.'
  },
  {
    q: 'Wat is inbegrepen in het Renovlies Allround Pakket?',
    a: 'Het pakket omvat het volledig plaatsen van het renovlies én het afsausen in uw gewenste kleur — alles voor één vaste prijs. Wij werken uitsluitend met Sigma muurverf (schrobklasse 1). U kiest uit 1 basiskleur en 2 extra kleuren. Geen verborgen kosten, geen aanbetaling.'
  },
  {
    q: 'Hoe lang duurt het aanbrengen van renovlies in een nieuwbouwwoning?',
    a: 'Een gemiddelde nieuwbouweengezinswoning is binnen 5 werkdagen volledig afgewerkt — van plaatsen tot de laatste laag verf. Wij plannen efficiënt en houden ons aan de afgesproken opleverdatum.'
  },
  {
    q: 'Werken jullie ook voor aannemers en projectontwikkelaars?',
    a: 'Absoluut. Wij zijn vaste partner voor meerdere aannemers en projectontwikkelaars. Wij leveren op tijd, werken schoon en garanderen een consistente kwaliteit — ook bij grote projecten met meerdere woningen tegelijk.'
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
            <p className="text-sm uppercase tracking-widest text-emerald-200 mb-2 font-medium">Uw vakspecialist nieuwbouw</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Huisman Wandafwerking is uw partner in renovlies voor nieuwbouw
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
            <img src="https://imgur.com/AWqZ5Gv.jpg" alt="Renovlies nieuwbouw" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                Renovlies voor Nieuwbouw — Plaatsen & Sausen voor een Vaste Prijs
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
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Renovlies is <strong>dé standaard wandafwerking voor nieuwbouwwoningen</strong>. Stucwerk scheurt in nieuwbouw door zetting en krimp van de woning — renovlies niet. Het beweegt mee, is schilderklaar en ziet er jarenlang perfect uit. Huisman Wandafwerking plaatst het renovlies én verft het in uw gewenste kleur — alles voor één vaste prijs, zonder verrassingen.
          </p>

          {/* Allround Pakket highlight card */}
          <div className="bg-white border-2 border-emerald-600 rounded-2xl p-6 mb-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-emerald-600 font-semibold">Populair pakket</p>
                <h2 className="text-xl font-bold text-gray-900">Renovlies Allround Pakket — Nieuwbouw</h2>
              </div>
            </div>

            <p className="text-gray-600 mb-5 text-sm leading-relaxed">
              Speciaal samengesteld voor particulieren en zakelijke opdrachtgevers in de nieuwbouw. Één prijs, één aannemer, één verantwoordelijkheid — van het eerste rol tot de laatste penseelstreek.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                'Renovlies plaatsen op alle wanden',
                'Volledig afsausen in gewenste kleur',
                'Sigma muurverf schrobklasse 1',
                'Keuze uit 1 basiskleur + 2 extra kleuren',
                'Vaste prijs — geen verborgen kosten',
                'Voor particulieren én zakelijke markt',
                'Gericht op nieuwbouwwoningen',
                'Geen aanbetaling — betalen na oplevering',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-emerald-700">€ 22,50 <span className="text-base font-normal text-gray-500">per m²</span></p>
                <p className="text-xs text-gray-400 mt-0.5">Plaatsen + sausen inclusief · Sigma verf inclusief</p>
              </div>
              <Link
                to="/offerte"
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-7 rounded-xl transition-colors duration-200 shadow-md text-sm whitespace-nowrap"
              >
                Pakket aanvragen →
              </Link>
            </div>
          </div>

          {/* Nieuwbouw section */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 text-emerald-700" />
              </div>
              <h2 className="text-xl font-bold text-emerald-700">Waarom renovlies in nieuwbouw?</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              In een nieuwbouwwoning werken de muren nog jaren na het bouwen. Beton en metselwerk krimpen, hout droogt uit en het gehele pand zet. Traditioneel stucwerk is hier niet bestand tegen — scheuren zijn dan bijna onvermijdelijk.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Renovlies is flexibel, krimp- en scheurresistent en hecht uitstekend op nieuwbouwondergronden. Het is om die reden al jaren de eerste keuze van aannemers en kopers van nieuwbouwwoningen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Krimp- en scheurresistent — beweegt mee met de woning',
                'Direct schilderklaar — geen voorstrijkmiddel nodig',
                'Aanzienlijk goedkoper dan stucwerk',
                'Betere thermische en akoestische eigenschappen',
                'Brandvertragend en vezelversterkt',
                'Geschikt voor alle nieuwbouwondergronden',
                'Heel pand klaar binnen 5 werkdagen',
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
              <img src="https://imgur.com/O7YDsMd.jpg" alt="Renovlies nieuwbouw resultaat" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-700 mb-3">Voor particulieren én aannemers</h2>
              <p className="text-gray-600 mb-4">
                Of u nu een nieuwbouwwoning koopt en zelf laat afwerken, of aannemer bent die meerdere woningen tegelijk oplevert — wij schalen mee. Vaste prijs per m², nette uitvoering en op tijd klaar.
              </p>
              <p className="text-gray-600">
                Wij werken uitsluitend met <strong>Sigma muurverf schrobklasse 1</strong> — een kwalitatieve, duurzame verf die goed bestand is tegen dagelijks gebruik en eenvoudig schoon te houden is.
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-emerald-700 mb-5 text-center">Wat onze klanten zeggen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Familie Janssen', text: 'Onze nieuwbouwwoning is prachtig afgewerkt. Renovlies strak aangebracht en direct geschilderd — één week en alles was klaar. Echt vakwerk!', score: 5 },
                { name: 'Aannemer P. de Wit', text: 'Vaste partner voor onze nieuwbouwprojecten. Altijd op tijd, vaste prijs, nette afwerking. Ze werken snel en schoon — precies wat je nodig hebt bij nieuwbouw.', score: 5 },
                { name: 'R. Bakker', text: 'Beste prijs-kwaliteitsverhouding die ik kon vinden. Allround pakket inclusief verven, geen gedoe. Gewoon doen wat je belooft.', score: 5 },
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
            <h3 className="text-2xl font-bold mb-2">Klaar voor strakke wanden in uw nieuwbouwwoning?</h3>
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
