import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Phone } from 'lucide-react';

const services = [
  {
    name: 'Renovlies',
    href: '/diensten/renovlies-specialist',
    img: 'https://imgur.com/130MQxa.jpg',
  },
  {
    name: 'Vescom behang',
    href: '/diensten/vescom',
    img: 'https://imgur.com/8Ez6whf.jpg',
  },
  {
    name: 'Airless spuiten',
    href: '/diensten/airless-specialist',
    img: 'https://imgur.com/USExe76.jpg',
  },
  {
    name: 'Zolderplaten afwerking',
    href: '/diensten/zolderplaten',
    img: 'https://imgur.com/KMMc5gM.jpg',
  },
  {
    name: 'Stukadoor',
    href: '/diensten/stukadoor',
    img: 'https://imgur.com/7ZXYxvt.jpg',
  },
  {
    name: 'Glasweefsel',
    href: '/diensten/glasweefsel-specialist',
    img: 'https://imgur.com/m7wjcxN.jpg',
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
              Huisman Wandafwerking
            </h1>
            <p className="text-white text-lg md:text-xl opacity-90">
              Specialist in wandafwerking — precies wat u nodig heeft
            </p>
          </div>

          {/* Service Grid — photo tiles */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-3">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="relative flex flex-col items-center justify-end overflow-hidden rounded-2xl aspect-square hover:scale-105 transition-transform duration-200 group shadow-md"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="relative z-10 text-white text-xs text-center leading-tight font-semibold px-2 pb-2 drop-shadow">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>

          {/* "Not listed?" tile */}
          <a
            href="#contact"
            className="flex items-center justify-center gap-3 bg-black bg-opacity-55 backdrop-blur-sm hover:bg-opacity-75 border border-emerald-500 border-opacity-60 rounded-2xl p-4 mb-8 transition-all duration-200 hover:scale-[1.02] group w-full"
          >
            <div className="w-10 h-10 bg-emerald-700 group-hover:bg-emerald-600 rounded-xl flex items-center justify-center transition-colors duration-200 flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-sm md:text-base font-medium">
              Staat uw dienst er niet bij? Vraag het ons
            </span>
          </a>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link
              to="/diensten/binnen-schilderwerk"
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-4 px-7 rounded-xl transition-colors duration-200 text-center text-sm md:text-base shadow-lg"
            >
              Ik wil mijn muren laten beschilderen
            </Link>
            <Link
              to="/diensten/behanger-inhuren"
              className="bg-white hover:bg-gray-100 text-emerald-800 font-semibold py-4 px-7 rounded-xl transition-colors duration-200 text-center text-sm md:text-base shadow-lg border-2 border-emerald-700"
            >
              Ik wil mijn muren laten behangen
            </Link>
          </div>

          {/* Phone number */}
          <div className="text-center">
            <a
              href="tel:0786690154"
              className="inline-flex items-center gap-2 text-white text-base font-semibold opacity-90 hover:opacity-100 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              078-3690154
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
