import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://imgur.com/3NM402m.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full container mx-auto px-4">
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in text-center">
            Huisman Wandafwerking
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 text-center">
            Professionele afwerking voor uw wanden en plafonds door ervaren vakmensen in heel Nederland
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="#contact" 
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Neem Contact Op
            </a>
            <Link 
              to="/offerte" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-md transition-all duration-300 border border-white border-opacity-40"
            >
              Vraag Offerte Aan
            </Link>
          </div>

          {/* Promo Banner */}
          <Link 
            to="/diensten/renovlies"
            className="group bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex flex-col items-center"
          >
            <span className="text-lg font-semibold">Renovlies Actie!</span>
            <span className="text-sm opacity-90">Inclusief aanbrengen vanaf</span>
            <span className="text-2xl font-bold mt-1">€8,50</span>
            <span className="text-xs opacity-75">excl. BTW per m²</span>
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <button 
            onClick={scrollToServices}
            className="text-white focus:outline-none"
            aria-label="Scroll naar beneden"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;