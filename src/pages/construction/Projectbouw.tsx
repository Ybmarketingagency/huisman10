import React from 'react';
import { Link } from 'react-router-dom';

const Projectbouw = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img 
              src="https://imgur.com/11bsOVy.jpg"
              alt="Projectbouw Wandafwerking" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Uw Partner in Grootschalige Wand- en Plafondafwerking
              </h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Bent u actief in de zakelijke sector en zoekt u een betrouwbare partner voor de afwerking van wanden en plafonds in uw nieuwbouw- of renovatieprojecten? Zoek niet verder! Huisman Wandafwerking is uw one-stop-shop voor al uw afwerkingsbehoeften.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/sM0CmNX.jpg"
                alt="Efficiënte Wandafwerking" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Efficiëntie en Kwaliteit in Één Pakket
              </h2>
              <p className="text-gray-600">
                Waarom zou u tijd en middelen verspillen aan het coördineren van meerdere aannemers als één bedrijf u alles kan bieden? Van behang tot sauswerk, wij hebben het allemaal. Wij zorgen voor een naadloze en strakke afwerking van wanden en plafonds, waardoor u zich kunt richten op andere cruciale aspecten van uw project.
              </p>
            
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
              Beschikbaarheid en Flexibiliteit
            </h2>
            <p className="text-gray-600 mb-6">
              Ons team staat voor u klaar, of het nu gaat om kortlopende projecten of om omvangrijke, langdurige klussen. Door onze uitgebreide pool van gespecialiseerde medewerkers kunnen wij u een constante, hoogwaardige kwaliteit garanderen.
            </p>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/o7oLTOs.jpg"
                alt="Team aan het werk" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Uw Voordelen op een Rij
              </h2>
              <ul className="space-y-4 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-2"></div>
                  <span>Kosten- en tijdbesparend: Eén partij voor alle afwerkingsdiensten</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-2"></div>
                  <span>Deskundigheid: Jarenlange ervaring in het veld</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-2"></div>
                  <span>Flexibiliteit: Beschikbaar voor korte én lange termijn projecten</span>
                </li>
              </ul>
              <Link 
                to="/offerte" 
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Vraag een Offerte Aan
              </Link>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/RxK4t93.jpg"
                alt="Projectbouw Resultaat" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectbouw;