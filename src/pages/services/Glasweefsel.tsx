import React from 'react';
import { Link } from 'react-router-dom';

const Glasweefsel = () => {
  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img 
              src="https://imgur.com/yiRcg6Y.jpg"
              alt="Glasweefsel Installation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Glasweefselbehang: Een Veelzijdige en Stijlvolle Wandoplossing
              </h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Op zoek naar een elegante wandafwerking met een unieke structuur? Glasweefselbehang is uw ideale keuze. Bij Huisman Wandafwerking zijn we experts in het aanbrengen van dit veelzijdige materiaal, verkrijgbaar in verschillende structuren zoals visgraat, ruit en zigzag.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/KzcqJKk.jpg"
                alt="Glasweefsel Texture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Wat is Glasweefselbehang?
              </h2>
              <p className="text-gray-600">
                Glasweefselbehang bestaat uit in elkaar verweven glasvezels en staat bekend om zijn diverse structuren. Deze structuren zijn niet alleen esthetisch aantrekkelijk maar bieden ook een praktische toepassing voor een reeks van ondergronden.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-emerald-700 mb-6">
            Waarom Kiezen voor Glasweefselbehang bij Huisman Wandafwerking?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Unieke Structuren</h3>
              <p className="text-gray-600">Kies uit een reeks van patronen zoals visgraat, ruit en zigzag.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Ideaal voor Beschadigde Muren</h3>
              <p className="text-gray-600">Uitstekend voor het afwerken van licht beschadigde ondergronden zonder extra kosten.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Professionele Voorbehandeling</h3>
              <p className="text-gray-600">Voor ondergronden met grove oneffenheden (2mm of meer) zorgen wij voor een professionele voorbehandeling.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Dikte en Verlijming</h3>
              <p className="text-gray-600">Onze experts adviseren over de beste dikte en zorgen voor een vakkundige verlijming.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Kleuropties en Afwerking
              </h2>
              <p className="text-gray-600 mb-6">
                Glasweefselbehang is in de basis wit maar kan moeiteloos in elke gewenste kleur worden geschilderd. Het vereist echter ervaring om de verf goed te verdelen over de gestructureerde ondergrond. Ons team van ervaren schilders en behangers zorgt voor een vlekkeloos eindresultaat.
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
                src="https://imgur.com/aEMX98E.jpg"
                alt="Glasweefsel Color Options" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glasweefsel;