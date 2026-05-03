import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Grid2X2, Scissors, Wind, Hammer, Droplets, HelpCircle } from 'lucide-react';

const services = [
  {
    name: 'Renovlies',
    icon: Layers,
    href: '/diensten/renovlies-specialist',
  },
  {
    name: 'Glasweefsel schilderen',
    icon: Grid2X2,
    href: '/diensten/glasweefsel-specialist',
  },
  {
    name: 'Behanger',
    icon: Scissors,
    href: '/diensten/behanger-specialist',
  },
  {
    name: 'Airless spuiten',
    icon: Wind,
    href: '/diensten/airless-specialist',
  },
  {
    name: 'Stukadoor',
    icon: Hammer,
    href: '/diensten/stukadoor',
  },
  {
    name: 'Plafond / wanden spuiten',
    icon: Droplets,
    href: '/diensten/plafond-spuiten',
  },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://imgur.com/3NM402m.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-3">
              Huisman Wandafwerking
            </h1>
            <p className="text-white text-lg md:text-xl opacity-90">
              Specialist in wandafwerking — precies wat u nodig heeft
            </p>
          </div>

          {/* Service Grid — like a phone home screen */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex flex-col items-center gap-2 bg-black bg-opacity-55 backdrop-blur-sm hover:bg-opacity-75 border border-white border-opacity-10 rounded-2xl p-3 md:p-4 transition-all duration-200 hover:scale-105 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-700 group-hover:bg-emerald-600 rounded-xl flex items-center justify-center transition-colors duration-200">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs text-center leading-tight font-medium">
                    {service.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* "Not listed?" tile */}
          <a
            href="#contact"
            className="flex items-center justify-center gap-3 bg-black bg-opacity-55 backdrop-blur-sm hover:bg-opacity-75 border border-emerald-500 border-opacity-40 rounded-2xl p-4 mb-8 transition-all duration-200 hover:scale-[1.02] group w-full"
          >
            <div className="w-10 h-10 bg-emerald-700 group-hover:bg-emerald-600 rounded-xl flex items-center justify-center transition-colors duration-200 flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-sm md:text-base font-medium">
              Staat uw dienst er niet bij? Vraag het ons
            </span>
          </a>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/diensten/binnen-schilderwerk"
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-4 px-7 rounded-xl transition-colors duration-200 text-center text-sm md:text-base shadow-lg"
            >
              Ik wil mijn muren laten beschilderen
            </Link>
            <Link
              to="/diensten/behanger-inhuren"
              className="bg-white hover:bg-gray-100 text-emerald-800 font-semibold py-4 px-7 rounded-xl transition-colors duration-200 text-center text-sm md:text-base shadow-lg"
            >
              Ik wil mijn muren laten behangen
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
