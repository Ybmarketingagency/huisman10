import React from 'react';
import { Link } from 'react-router-dom';

const ConstructionTypes = () => {
  return (
    <section className="py-20 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nieuwbouw */}
          <Link to="/nieuwbouw" className="group relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://imgur.com/wfVZZrc.jpg"
              alt="Nieuwbouw" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <h2 className="text-3xl font-bold mb-4">Nieuwbouw</h2>
              <p className="text-center text-lg max-w-md">
                Specialistische wandafwerking voor nieuwbouwprojecten. Van behangen tot schilderen, wij zorgen voor een perfecte afwerking van uw nieuwe woning.
              </p>
            </div>
          </Link>

          {/* Projectbouw */}
          <Link to="/projectbouw" className="group relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://imgur.com/wshgyRC.jpg"
              alt="Projectbouw" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <h2 className="text-3xl font-bold mb-4">Projectbouw</h2>
              <p className="text-center text-lg max-w-md">
                Professionele wandafwerking voor grote projecten. Met onze ervaren behangploeg kunnen we tot 500m² per dag verwerken.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConstructionTypes;