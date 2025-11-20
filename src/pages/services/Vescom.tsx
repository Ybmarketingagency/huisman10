import React from 'react';
import { Link } from 'react-router-dom';

const Vescom = () => {
  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img
              src="https://imgur.com/DkCqDEp.jpg"
              alt="Vescom Behang"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Vescom Behang: Luxe en Kwaliteit voor Uw Interieur
              </h1>
            </div>
          </div>

          <p className="text-gray-600 mb-12 text-lg">
            Vescom staat synoniem voor hoogwaardige wandbekleding die design en functionaliteit perfect combineert. Met jarenlange ervaring in het plaatsen van Vescom behang, zorgen wij bij Huisman Wandafwerking voor een professionele en naadloze afwerking die uw interieur naar een hoger niveau tilt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img
                src="https://imgur.com/J6gyUvj.jpg"
                alt="Vescom Behang Installatie"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Waarom Kiezen voor Vescom Behang?
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-emerald-700 mb-2">Premium Kwaliteit</h3>
                  <p className="text-gray-600">
                    Vescom behang staat bekend om zijn superieure kwaliteit, duurzaamheid en tijdloze designs. Perfect voor zowel particuliere als zakelijke ruimtes waar kwaliteit voorop staat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-emerald-700 mb-2">Diverse Collecties</h3>
              <p className="text-gray-600">
                Van moderne minimalistische designs tot klassieke texturen - Vescom biedt een uitgebreide collectie die past bij elke interieurstijl en persoonlijke smaak.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-emerald-700 mb-2">Duurzaam en Onderhoudsvriendelijk</h3>
              <p className="text-gray-600">
                Vescom behang is niet alleen esthetisch aantrekkelijk, maar ook praktisch. Het materiaal is slijtvast, makkelijk schoon te houden en behoudt jarenlang zijn uitstraling.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-emerald-700 mb-2">Professionele Plaatsing</h3>
              <p className="text-gray-600">
                Vescom behang vereist vakmanschap bij de plaatsing. Onze ervaren behangers zorgen voor perfecte naden, rechte patronen en een foutloze afwerking.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-6">
              Onze Vescom Behang Service
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Deskundig Advies</h3>
                  <p className="text-gray-600">
                    Wij helpen u bij het selecteren van de perfecte Vescom collectie die aansluit bij uw wensen, budget en ruimte.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Ondergrond Voorbereiding</h3>
                  <p className="text-gray-600">
                    Voor optimale hechting en een strak eindresultaat zorgen we voor een perfect voorbereide muuroppervlak.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Nauwkeurige Plaatsing</h3>
                  <p className="text-gray-600">
                    Met oog voor detail plaatsen wij uw Vescom behang, waarbij patronen perfect aansluiten en alle hoeken en randen vakkundig worden afgewerkt.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Eindcontrole en Oplevering</h3>
                  <p className="text-gray-600">
                    Na voltooiing controleren we het geheel zorgvuldig en laten we uw ruimte schoon en netjes achter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Klaar voor Vescom Behang?
              </h2>
              <p className="text-gray-600 mb-6">
                Geef uw interieur de luxe uitstraling die het verdient met Vescom behang, professioneel geplaatst door Huisman Wandafwerking. Neem vrijblijvend contact met ons op voor een persoonlijk advies en een offerte op maat.
              </p>
              <Link
                to="/offerte"
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Vraag een Offerte Aan
              </Link>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://imgur.com/DkCqDEp.jpg"
                alt="Vescom Behang Resultaat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vescom;
