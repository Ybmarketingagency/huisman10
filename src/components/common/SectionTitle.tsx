import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  const isFAQSection = document.getElementById('faq')?.contains(document.activeElement);
  
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-[#109439] mb-2`}>{title}</h2>
      <p className={`text-lg ${isFAQSection ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>
      <div className={`h-1 bg-[#109439] w-24 mt-4 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;