import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone, Shield, Clock, Star, ChevronDown, ChevronUp, Wrench, Package } from 'lucide-react';

const faqs = [
  {
    q: 'Is glasweefsel ook geschikt voor muren met scheuren of oneffenheden?',
    a: 'Ja, dat is juist de kracht van glasweefsel. Door de vezelversterkte structuur overbrugt het kleine scheuren en oneffenheden die bij renovlies of schilderwerk zichtbaar zouden blijven. Ideaal voor oudere woningen en renovaties met een minder goede ondergrond.'
  },
  {
    q: 'Wat is inbegrepen in het Glasweefsel Allround Pakket?',
    a: 'Het pakket omvat het volledig plaatsen van het glasweefselbehang én het afsausen in uw gewenste kleur — alles voor één vaste prijs van €22,50 per m². Wij werken uitsluitend met Sigma muurverf (schrobklasse 1). U kiest uit 1 basiskleur en 2 extra kleuren. Geen verborgen kosten, geen aanbetaling.'
  },
  {
    q: 'Kan glasweefsel in elke kleur worden geschilderd?',
    a: 'Ja. Glasweefsel is in de basis wit en kan in elke kleur worden geschilderd. Het vereist wel ervaring om de verf goed te verdelen over de structuur. Ons team zorgt voor een egaal en mooi eindresultaat.'
  },
  {
    q: 'Is glasweefsel ook geschikt voor nieuwbouw?',
    a: 'Absoluut. Glasweefsel werkt prima in nieuwbouw, maar is bij uitstek geschikt voor renovatie of muren met een minder goede ondergrond. Waar renovlies een gladde muur vereist, overbrugt glasweefsel oneffenheden dankzij zijn structuur.'
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
            <p className="text-sm uppercase tracking-widest text-emerald-200 mb-2 font-medium">Uw vakspecialist renovatie</p>
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
                Glasweefsel Aanbrengen & Schilderen — Plaatsen én Sausen voor een Vaste Prijs
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
            Glasweefsel is <strong>dé oplossing voor muren met een minder goede ondergrond</strong>. Waar stucwerk of renovlies tekortschiet bij oneffenheden en kleine scheuren, overbrugt glasweefsel deze dankzij zijn vezelversterkte structuur — en ziet het er na het schilderen prachtig uit. Huisman Wandafwerking plaatst het glasweefsel én verft het in uw gewenste kleur, alles voor één vaste prijs.
          </p>

          {/* Allround Pakket highlight card */}
          <div className="bg-white border-2 border-emerald-600 rounded-2xl p-6 mb-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-emerald-600 font-semibold">Populair pakket</p>
                <h2 className="text-xl font-bold text-gray-900">Glasweefsel Allround Pakket — Renovatie & Nieuwbouw</h2>
              </div>
            </div>

            <p className="text-gray-600 mb-5 text-sm leading-relaxed">
              Speciaal voor woningen met een minder goede ondergrond, renovatieprojecten of muren met kleine scheuren en oneffenheden. Ook uitstekend inzetbaar in nieuwbouw. Één prijs, één aannemer — van plaatsen tot de laatste laag verf.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                'Glasweefsel plaatsen op alle wanden',
                'Volledig afsausen in gewenste kleur',
                'Sigma muurverf schrobklasse 1',
                'Keuze uit 1 basiskleur + 2 extra kleuren',
                'Vaste prijs — geen verborgen kosten',
                'Voor particulieren én zakelijke markt',
                'Ideaal bij renovatie & slechte ondergrond',
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

          {/* Renovatie section */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Wrench className="w-5 h-5 text-emerald-700" />
              </div>
              <h2 className="text-xl font-bold text-emerald-700">Waarom glasweefsel bij renovatie?</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Oudere woningen en gerenoveerde panden hebben vaak muren die niet meer perfect vlak zijn. Kleine scheuren, oneffenheden, oud schilderwerk of een poreuze ondergrond maken een gladde afwerking lastig. Glasweefsel lost dit op: de vezelversterkte structuur overbrugt oneffenheden en zorgt alsnog voor een strak, egaal eindresultaat.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Na het aanbrengen wordt het glasweefsel geschilderd in uw gewenste kleur. Het resultaat is sterk, krasvast en tientallen jaren mooi — ook bij moeilijke ondergronden.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Overbrugt oneffenheden en kleine scheuren',
                'Ideaal voor renovatie met slechte ondergrond',
                'Decoratieve structuur in diverse patronen',
                'In elke kleur te schilderen',
                'Zeer sterk, krasvast en brandwerend',
                'Langere levensduur dan gewoon schilderwerk',
                'Ook geschikt voor nieuwbouw',
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
              <img src="https://imgur.com/KzcqJKk.jpg" alt="Glasweefsel structuur resultaat" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-700 mb-3">Professioneel geschilderd — perfect egaal</h2>
              <p className="text-gray-600 mb-4">
                Glasweefsel schilderen vereist ervaring: de verf moet gelijkmatig in de structuur worden aangebracht zonder dat de textuur verloren gaat. Ons team heeft honderden projecten afgewerkt en kent precies de juiste techniek.
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
                { name: 'Familie de Boer', text: 'Onze muren hadden veel kleine oneffenheden na de renovatie. Na het glasweefsel zie je er niets meer van. Geweldig resultaat!', score: 5 },
                { name: 'K. Smits', text: 'Professioneel team, kwamen op afgesproken tijd en lieten alles netjes achter. Absoluut tevreden over het pakket.', score: 5 },
                { name: 'T. van der Berg', text: 'Goed advies gekregen — glasweefsel was de juiste keuze voor onze oudere woning. Eindresultaat is precies wat ik wilde.', score: 5 },
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
