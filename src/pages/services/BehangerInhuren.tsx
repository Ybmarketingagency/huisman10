import React from 'react';
import { Link } from 'react-router-dom';

const BehangerInhuren = () => {
  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img 
              src="https://imgur.com/DkCqDEp.jpg"
              alt="Professional Wallpaper Installation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Uw Professionele Behanger: Van Advies tot Afwerking
              </h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Overweegt u om uw muren te verfraaien met een nieuw laagje behang, maar mist u de ervaring of het zelfvertrouwen om dit zelf te doen? Geen zorgen, bij Huisman Wandafwerking hebben we de perfecte oplossing voor u.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/J6gyUvj.jpg"
                alt="Professional Wallpaper Service" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Waarom Huisman Wandafwerking als Behanger Inhuren?
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-emerald-700 mb-2">1. Volledige Service van A tot Z</h3>
                  <p className="text-gray-600">
                    U levert de rollen behang, wij doen de rest. Onze service begint met een inspectie van uw muren om ervoor te zorgen dat de ondergrond optimaal is voor het behang. We schuren indien nodig en zorgen altijd voor de juiste lijm en hoogwaardige materialen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-emerald-700 mb-2">2. Vakkundig en Efficiënt</h3>
              <p className="text-gray-600">
                Dankzij onze jarenlange ervaring en professioneel gereedschap kunnen wij uw behang binnen een korte tijd en zonder rommel plaatsen. Alle randen en hoeken worden nauwkeurig afgewerkt voor een strak eindresultaat.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-emerald-700 mb-2">3. Advies op Maat</h3>
              <p className="text-gray-600">
                Niet zeker welk behang het beste bij uw interieur past? Wij kunnen u adviseren over patronen, kleuren en materialen zodat u gegarandeerd een keuze maakt waar u jarenlang plezier van zult hebben.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-emerald-700 mb-2">4. Veilig en Schoon</h3>
              <p className="text-gray-600">
                Wij zorgen ervoor dat alle gebieden netjes zijn afgeplakt voordat we beginnen, en we laten alles netjes en schoon achter zodra de klus is geklaard.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Behang Advies en Aanschaf
              </h2>
              <p className="text-gray-600 mb-6">
                Als u overweegt behang aan te schaffen maar niet zeker weet welke soort het beste bij uw wensen past, zijn wij hier om u te helpen. Onze experts kunnen u adviseren over alle aspecten van behangkeuze om te voorkomen dat u een miskoop doet. Neem vrijblijvend contact met ons op voor een gedegen advies op maat.
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
                alt="Wallpaper Consultation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehangerInhuren;