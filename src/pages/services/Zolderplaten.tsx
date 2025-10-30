import React from 'react';
import { Link } from 'react-router-dom';

const Zolderplaten = () => {
  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img 
              src="https://imgur.com/XKYSIta.jpg"
              alt="Attic Panel Finishing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Zolderplaten Afwerken: Kies voor Airless Spuiten
              </h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Nieuwbouwwoningen komen vaak met onafgewerkte zolderplaten in standaard groen of bruin. Bij Huisman Wandafwerking bieden we u een totaaloplossing voor de perfecte afwerking van deze zolderplaten.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Wat is Airless Spuiten van Zolderplaten?
              </h2>
              <p className="text-gray-600">
                Met airless spuiten wordt latex onder hoge druk (meer dan 200 bar) op de zolderplaten gespoten. Deze techniek resulteert in een fijne verneveling van de verf, waardoor de platen een strak en naadloos uiterlijk krijgen. Wij gebruiken twee lagen schrobklasse 1 latex, wat zorgt voor een afneembare en ademende afwerking.
              </p>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/tVTpCa1.jpg"
                alt="Airless Spraying Process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-200 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-6">
              Het Volledige Proces, van A tot Z
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Naast het spuiten, verzorgen we ook de voorbereidende werkzaamheden:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>We verwijderen alle nietjes, spijkers, schroeven</li>
                <li>Dichten eventuele gaten met krimpvrije muurvuller</li>
                <li>Alle naden worden afgedicht met een witte, overschilderbare acrylaatkit</li>
                <li>Grondige schuurbeurt voor optimale hechting</li>
                <li>Airless spuiten van de platen</li>
                <li>Finishing touch met een laatste laag acrylaatkit</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Voordelen van Airless Spuiten
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-2"></div>
                  <p className="text-gray-600">Snelheid: Uw zolder is in slechts 2 tot 3 dagen volledig afgewerkt</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-2"></div>
                  <p className="text-gray-600">Kosten-efficiëntie: Betaalbare maar duurzame optie</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-2"></div>
                  <p className="text-gray-600">Topkwaliteit: Super strakke en naadloze afwerking</p>
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  to="/offerte" 
                  className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
                >
                  Vraag een Offerte Aan
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/XKYSIta.jpg"
                alt="Finished Attic Panels" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zolderplaten;