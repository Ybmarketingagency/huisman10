import React from 'react';
import { Link } from 'react-router-dom';

const AirlessSpuiten = () => {
  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img 
              src="https://imgur.com/F8WYK4c.jpg"
              alt="Airless Spraying" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Airless Spuiten: Snelle en Strakke Afwerking
              </h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Voor wie een snelle, efficiënte maar vooral ook strakke wand- en plafondafwerking zoekt, is airless spuiten de ideale oplossing. Huisman Wandafwerking is uw expert in deze moderne techniek, die zorgt voor een onberispelijk en duurzaam resultaat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/CvVMPpL.jpg"
                alt="Airless Spraying Technique" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Wat is Airless Spuiten?
              </h2>
              <p className="text-gray-600">
                Airless spuiten is een verfspuittechniek waarbij gebruik wordt gemaakt van hoge druk om de verf op het oppervlak te spuiten. Dit resulteert in een gladde en egale afwerking, vrij van strepen of rolmarkeringen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Hoogwaardige Afwerking</h3>
              <p className="text-gray-600">Een egaal en streeploos resultaat dat handmatig schilderen overtreft.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Tijdsbesparing</h3>
              <p className="text-gray-600">Beduidend sneller dan traditionele schildermethoden.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Minder Materiaalverlies</h3>
              <p className="text-gray-600">Efficiënt gebruik van verf, waardoor er minder verspilling is.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Flexibiliteit</h3>
              <p className="text-gray-600">Geschikt voor diverse ondergronden en ruimtes, van muren tot plafonds.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Materialen en Kleuropties
              </h2>
              <p className="text-gray-600 mb-6">
                We maken gebruik van kwalitatief hoogstaande verfsoorten die zorgen voor een langdurig en kleurvast resultaat. Ons brede kleurenpalet biedt opties voor elke smaak en elk interieur.
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
                src="https://imgur.com/F8WYK4c.jpg"
                alt="Paint Colors and Materials" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlessSpuiten;