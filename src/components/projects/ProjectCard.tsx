import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, imageSrc, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="relative group overflow-hidden rounded-lg shadow-md h-80 cursor-pointer"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      onClick={() => setShowDetails(!showDetails)}
    >
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <span className="text-emerald-300 text-sm font-medium">{category}</span>
        <h3 className="text-white text-xl font-semibold mt-1">{title}</h3>
      </div>
      
      <div 
        className={`absolute inset-0 bg-emerald-800 bg-opacity-90 p-6 flex flex-col justify-center transition-all duration-300 ${
          showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white text-sm mb-4">{description}</p>
        <button className="self-start flex items-center text-white hover:text-emerald-200 transition-colors mt-auto">
          <span className="mr-2">Meer details</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;