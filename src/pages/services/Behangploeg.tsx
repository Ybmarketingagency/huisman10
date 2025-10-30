import React from 'react';
import { Link } from 'react-router-dom';

const Behangploeg = () => {
  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <img 
              src="https://imgur.com/aEMX98E.jpg"
              alt="Professional Wallpaper Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Uitmuntend Vakmanschap in Wandafwerking
              </h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Bij Huisman Wandafwerking ligt de nadruk op onberispelijke kwaliteit, van voorbereiding tot de uiteindelijke afwerking. Wij zijn er trots op dat we met ons team van gespecialiseerde behangprofessionals nieuwe maatstaven zetten in efficiëntie en nauwkeurigheid.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Onze Expertise en Team
              </h2>
              <p className="text-gray-600">
                Of het nu gaat om grootschalige projecten of gedetailleerd maatwerk, ons team heeft de capaciteit om tot 500m² per dag te behangen of sausen. We zijn experts in renovlies behangen, een duurzame en visueel verbluffende keuze voor uw muren. Ons vaste team is intern opgeleid en voldoet aan de hoogste standaarden, waardoor we consequente topkwaliteit kunnen garanderen.
              </p>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/qKaItln.jpg"
                alt="Expert Team at Work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="https://imgur.com/UFXWoqH.jpg"
                alt="Professional Results" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                Betrouwbaar en Bekwaam
              </h2>
              <p className="text-gray-600">
                Jarenlange ervaring heeft ons een reputatie opgeleverd voor excellent vakmanschap en betrouwbare dienstverlening, en dat is iets waar we bijzonder trots op zijn. Of we nu als onderaannemer fungeren voor grotere projecten of als hoofdaannemer, we bieden meer dan alleen mankracht. We bieden een partnership gericht op het overtreffen van uw verwachtingen.
              </p>
            </div>
          </div>

          <div className="bg-gray-200 p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
              Samenwerking en Efficiëntie
            </h2>
            <p className="text-gray-600 mb-6">
              We streven naar een naadloze samenwerking met onze cliënten en partners. Ons doel is om projecten op tijd en binnen budget te realiseren, zonder aan kwaliteit in te boeten. Dankzij onze bewezen staat van dienst en onze niet-aflatende toewijding aan excellentie, zijn we uw eerste keus voor alle behang- en sauswerkzaamheden.
            </p>
            <div className="text-center">
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

export default Behangploeg;