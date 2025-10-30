import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, link }) => {
  return (
    <Link 
      to={link} 
      className="block group bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-6 flex-grow bg-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">{title}</h3>
          <ArrowRight className="text-emerald-700 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" size={20} />
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="px-6 pb-4 bg-gray-200">
        <span className="inline-block text-emerald-700 font-medium group-hover:underline">
          Lees meer
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;