import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from './ServiceCard';
import FadeInSection from '../common/FadeInSection';

const Services = () => {
  const [wallpaperSlide, setWallpaperSlide] = useState(0);
  const [paintingSlide, setPaintingSlide] = useState(0);
  const wallpaperServices = [
    {
      title: "Behanger Inhuren",
      description: "Wil je er zeker van zijn dat jouw luxe patroon of eigen behang naadloos en strak wordt aangebracht? Huur dan onze behanger in!",
      imageSrc: "https://imgur.com/qKaItln.jpg",
      link: "/diensten/behanger-inhuren"
    },
    {
      title: "Renovlies",
      description: "Zoekt u een alternatief voor stucwerk dat zowel stijlvol als functioneel is? Dan is Renovliesbehang de perfecte keuze voor u!",
      imageSrc: "https://imgur.com/UFXWoqH.jpg",
      link: "/diensten/renovlies"
    },
    {
      title: "Glasweefsel Behang",
      description: "Op zoek naar een elegante wandafwerking met een unieke structuur? Glasweefsel behang is uw ideale keuze.",
      imageSrc: "https://imgur.com/yiRcg6Y.jpg",
      link: "/diensten/glasweefsel"
    },
    {
      title: "Behangploeg",
      description: "Bent u op zoek naar een behangploeg? Onze behangploeg kan tot 500m2 per dag behangen (renovlies).",
      imageSrc: "https://imgur.com/aEMX98E.jpg",
      link: "/diensten/behangploeg"
    },
    {
      title: "Vescom Behang",
      description: "Luxe en kwaliteit voor uw interieur. Vescom staat voor hoogwaardige wandbekleding met tijdloze designs.",
      imageSrc: "https://imgur.com/174AL3v.jpg",
      link: "/diensten/vescom"
    }
  ];

  const paintingServices = [
    {
      title: "Binnen Schilderwerk",
      description: "Een nieuwe laag verf kan wonderen doen voor het interieur van uw woning of bedrijfspand.",
      imageSrc: "https://imgur.com/iW8Qv5n.jpg",
      link: "/diensten/binnen-schilderwerk"
    },
    {
      title: "Zolderplaten Afwerking",
      description: "Bij Huisman Wandafwerking bieden we u een totaaloplossing voor de perfecte afwerking van deze zolderplaten.",
      imageSrc: "https://imgur.com/dxyMfja.jpg",
      link: "/diensten/zolderplaten"
    },
    {
      title: "Airless Spuiten",
      description: "Voor wie een snelle, efficiënte maar vooral ook strakke wand- en plafondafwerking zoekt, is airless spuiten dé ideale oplossing.",
      imageSrc: "https://imgur.com/KzcqJKk.jpg",
      link: "/diensten/airless-spuiten"
    },
    {
      title: "Stukadoor Inhuren",
      description: "Professionele stukadoors voor al uw stucwerk. Op aanvraag beschikbaar voor nieuwbouw en renovatie.",
      imageSrc: "https://imgur.com/7LxPqRm.jpg",
      link: "#offerte"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <SectionTitle
            title="Onze Diensten"
            subtitle="Professionele wandafwerking voor elk interieur"
          />
        </FadeInSection>

        <div className="mt-12">
          <FadeInSection>
            <h2 className="text-2xl font-semibold text-emerald-700 mb-8">Behangen</h2>
          </FadeInSection>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {wallpaperServices.map((service, index) => (
              <FadeInSection key={`wallpaper-${index}`} delay={index * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  link={service.link}
                />
              </FadeInSection>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative max-w-sm mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${wallpaperSlide * 100}%)` }}
              >
                {wallpaperServices.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      imageSrc={service.imageSrc}
                      link={service.link}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setWallpaperSlide((prev) => (prev - 1 + wallpaperServices.length) % wallpaperServices.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-emerald-700 hover:bg-emerald-800 text-white p-2 rounded-full shadow-lg transition-colors z-10"
              aria-label="Vorige dienst"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setWallpaperSlide((prev) => (prev + 1) % wallpaperServices.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-emerald-700 hover:bg-emerald-800 text-white p-2 rounded-full shadow-lg transition-colors z-10"
              aria-label="Volgende dienst"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {wallpaperServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setWallpaperSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    wallpaperSlide === index ? 'bg-emerald-700' : 'bg-gray-400'
                  }`}
                  aria-label={`Ga naar dienst ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <FadeInSection>
            <h2 className="text-2xl font-semibold text-emerald-700 mb-8">Schilderswerk</h2>
          </FadeInSection>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paintingServices.map((service, index) => (
              <FadeInSection key={`painting-${index}`} delay={index * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  link={service.link}
                />
              </FadeInSection>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative max-w-sm mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${paintingSlide * 100}%)` }}
              >
                {paintingServices.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      imageSrc={service.imageSrc}
                      link={service.link}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setPaintingSlide((prev) => (prev - 1 + paintingServices.length) % paintingServices.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-emerald-700 hover:bg-emerald-800 text-white p-2 rounded-full shadow-lg transition-colors z-10"
              aria-label="Vorige dienst"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setPaintingSlide((prev) => (prev + 1) % paintingServices.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-emerald-700 hover:bg-emerald-800 text-white p-2 rounded-full shadow-lg transition-colors z-10"
              aria-label="Volgende dienst"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {paintingServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPaintingSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    paintingSlide === index ? 'bg-emerald-700' : 'bg-gray-400'
                  }`}
                  aria-label={`Ga naar dienst ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;