import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Projects = () => {
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Woonkamer Renovatie",
      before: "https://imgur.com/yyT8eiW.jpg",
      after: "https://imgur.com/EwTFyre.jpg",
      description: "Complete wandrenovatie met glasweefsel behang"
    },
    {
      id: 2,
      title: "Kantoor Transformatie",
      before: "https://imgur.com/WTy1Mkc.jpg",
      after: "https://imgur.com/hNp6aHp.jpg",
      description: "Professionele wandafwerking en schilderwerk"
    },
    {
      id: 3,
      title: "Hal Metamorfose",
      before: "https://imgur.com/NPIhEao.jpg",
      after: "https://imgur.com/YznpRXb.jpg",
      description: "Strakke afwerking met airless spuittechniek"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Onze Projecten"
          subtitle="Bekijk onze transformaties - schuif om het verschil te zien"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {beforeAfterProjects.map((project) => (
            <div key={project.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3]">
                {/* Before Label */}
                <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Voor
                </div>
                {/* After Label */}
                <div className="absolute top-4 right-4 z-10 bg-emerald-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Na
                </div>
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={project.before} alt="Voor" />}
                  itemTwo={<ReactCompareSliderImage src={project.after} alt="Na" />}
                  position={50}
                  className="h-full"
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
          >
            Vraag een Offerte Aan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;