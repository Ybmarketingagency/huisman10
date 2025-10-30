import React from 'react';
import { Link } from 'react-router-dom';

const BinnenSchilderwerk = () => {
  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img 
              src="https://imgur.com/NPeFZys.jpg"
              alt="Interior Painting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Binnenschilderwerk: Transformeer uw Interieur
              </h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Een nieuwe laag verf kan wonderen doen voor het interieur van uw woning of bedrijfspand. Bij Huisman Wandafwerking leveren we professioneel binnenschilderwerk dat uw ruimte niet alleen verfraait, maar ook beschermt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Wat is Binnenschilderwerk?
              </h2>
              <p className="text-gray-600">
                Binnenschilderwerk omvat het schilderen van binnenmuren, plafonds, kozijnen, deuren, en trappen. Het is een uitstekende manier om uw interieur een opfrisbeurt te geven en de levensduur van verschillende oppervlakken te verlengen.
              </p>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/tQ609AJ.jpg"
                alt="Interior Painting Process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Expertise</h3>
              <p className="text-gray-600">Ons team van ervaren schilders staat garant voor een kwalitatief hoogwaardige afwerking.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Duurzaamheid</h3>
              <p className="text-gray-600">We gebruiken uitsluitend duurzame en milieuvriendelijke verfsoorten.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Aandacht voor Detail</h3>
              <p className="text-gray-600">Van de voorbereiding tot de laatste penseelstreek, wij zorgen voor een vlekkeloos resultaat.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-emerald-700 mb-2">Kleuradvies</h3>
              <p className="text-gray-600">We helpen u graag bij het kiezen van de perfecte kleur en afwerking voor uw ruimte.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/NPeFZys.jpg"
                alt="Paint Materials" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Materialen en Afwerkingsopties
              </h2>
              <p className="text-gray-600 mb-6">
                We maken gebruik van hoogwaardige verf en materialen die bestand zijn tegen slijtage en verkleuring. Of u nu gaat voor mat, zijdeglans, of hoogglans; wij hebben de juiste opties voor u.
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

export default BinnenSchilderwerk;