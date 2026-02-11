import React from 'react';
import { Link } from 'react-router-dom';

const Nieuwbouw = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img 
              src="https://imgur.com/TnZinVI.jpg"
              alt="Nieuwbouw Wandafwerking" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Uw Expert in Wandafwerking voor Nieuwbouw projecten
              </h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Heeft u net een nieuwbouwwoning gekocht of bent u van plan binnenkort te verhuizen? Dan komt er veel op u af, inclusief de afwerking van uw wanden en plafonds. Huisman Wandafwerking begrijpt als geen ander dat een hoogwaardige afwerking essentieel is voor het comfort en de esthetiek van uw nieuwe huis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Innovatieve Technieken en Trendy Afwerkingen
              </h2>
              <p className="text-gray-600">
                Wij investeren continu in de meest geavanceerde technieken en blijven op de hoogte van de nieuwste trends in de sector. Ons doel is om uw nieuwbouwproject tot een droomhuis te transformeren.
              </p>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/YnevxHr.jpg"
                alt="Innovatieve Wandafwerking" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
              De Realiteit van Prefab Wanden
            </h2>
            <p className="text-gray-600 mb-6">
              Tegenwoordig kiezen veel aannemers voor prefab bouwmethoden, waarbij wanden en muren vooraf worden gegoten en naar de bouwlocatie worden getransporteerd. Hoewel dit de bouwtijd kan verkorten, is de standaard afwerking vaak van lagere kwaliteit. Dit vereist extra inspanning om tot een perfect eindresultaat te komen.
            </p>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/gnoeP2n.jpg"
                alt="Prefab Wand Afwerking" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Uitmuntendheid in Wand- en Plafondafwerking
              </h2>
              <p className="text-gray-600 mb-6">
                Dankzij onze state-of-the-art wandschuurmachines en hooggekwalificeerd personeel is dit voor ons geen enkel probleem. Wij nemen de uitdaging aan om uw wanden en plafonds te transformeren van een B-klasse naar A-klasse kwaliteit.
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
                src="https://imgur.com/B3tkGfx.jpg"
                alt="Wand- en Plafondafwerking" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nieuwbouw;