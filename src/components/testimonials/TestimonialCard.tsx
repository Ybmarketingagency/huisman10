import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  projectType: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  rating, 
  text, 
  projectType 
}) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic mb-6">"{text}"</p>
      
      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
        </div>
        <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
          {projectType}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;