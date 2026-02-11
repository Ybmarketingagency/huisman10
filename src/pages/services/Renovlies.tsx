import React from 'react';
import { Link } from 'react-router-dom';

const Renovlies = () => {
  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img 
              src="https://imgur.com/64Q5VEL.jpg"
              alt="Renovlies Installation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Renovliesbehang: De Moderne, Duurzame Keuze voor Strakke Wanden
              </h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Zoekt u een alternatief voor stucwerk dat zowel stijlvol als functioneel is? Dan is Renovliesbehang de perfecte keuze voor u. Bij Huisman Wandafwerking leveren we superstrak en naadloos Renovliesbehang, aangebracht door ons ervaren team van professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Wat is Renovliesbehang?
              </h2>
              <p className="text-gray-600">
                Renovliesbehang is een gladde wandbekleding die het uiterlijk van gestucte muren nabootst. Het is een populaire optie voor wie de uitstraling van stucwerk wil, maar dan met meer voordelen en flexibiliteit.
              </p>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/O7YDsMd.jpg"
                alt="Renovlies Example" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-emerald-700 mb-6">
            Waarom Kiezen voor Renovliesbehang bij Huisman Wandafwerking?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Strak en Naadloos</h3>
              <p className="text-gray-600">Vergelijkbaar met hoogwaardig stucwerk, biedt Renovlies een perfect gladde afwerking.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Kostenbesparend</h3>
              <p className="text-gray-600">Renovliesbehang is aanzienlijk goedkoper dan traditioneel stucwerk.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Schilderklaar</h3>
              <p className="text-gray-600">Geen voorstrijkmiddelen nodig; u kunt direct beginnen met schilderen.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Tijdefficiënt</h3>
              <p className="text-gray-600">Een volledige eengezinswoning van 250m2 kan binnen slechts 5 werkdagen worden voltooid.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Duurzaam en Veilig</h3>
              <p className="text-gray-600">Krimp- en scheurresistent, met een brandvertragende en isolerende werking.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Veelzijdig</h3>
              <p className="text-gray-600">Geschikt voor bijna alle soorten ondergronden en ruimtes.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/64Q5VEL.jpg"
                alt="Renovlies Durability" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Duurzaamheid en Veiligheid
              </h2>
              <p className="text-gray-600 mb-6">
                Een van de meest onderschatte voordelen van Renovliesbehang is de duurzaamheid. Het materiaal is sterker dan stucwerk en is daarom minder gevoelig voor beschadigingen. Bovendien heeft het een brandvertragende en isolerende werking, wat bijdraagt aan de veiligheid en het comfort van uw woning.
              </p>
              <Link 
                to="/offerte" 
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Vraag een Offerte Aan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renovlies;