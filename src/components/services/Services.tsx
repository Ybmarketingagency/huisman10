import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from './ServiceCard';
import FadeInSection from '../common/FadeInSection';

const Services = () => {
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
      imageSrc: "https://imgur.com/DkCqDEp.jpg",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>

        <div className="mt-16">
          <FadeInSection>
            <h2 className="text-2xl font-semibold text-emerald-700 mb-8">Schilderswerk</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default Services;