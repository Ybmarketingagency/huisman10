import React, { useState, useEffect } from 'react';
import { FormData } from '../types/offerte';
import AreaCalculator from '../components/offerte/AreaCalculator';
import PersonalInfo from '../components/offerte/PersonalInfo';
import Services from '../components/offerte/Services';
import ZolderQuestion from '../components/offerte/ZolderQuestion';
import Obstacles from '../components/offerte/Obstacles';
import OtherObstacles from '../components/offerte/OtherObstacles';
import Comments from '../components/offerte/Comments';

const OffertePage = () => {
  const [formData, setFormData] = useState<FormData>({
    width: '',
    height: '',
    area: '0.00',
    name: '',
    email: '',
    phone: '',
    services: [],
    hasZolder: '',
    obstacles: {
      radiators: false,
      cables: false,
      thermostats: false,
      pipes: false,
    },
    otherObstacles1: '',
    otherObstacles2: '',
    otherObstaclesCount1: '0',
    otherObstaclesCount2: '0',
    comments: ''
  });

  useEffect(() => {
    const width = parseFloat(formData.width) || 0;
    const height = parseFloat(formData.height) || 0;
    const area = (width * height).toFixed(2);
    setFormData(prev => ({ ...prev, area }));
  }, [formData.width, formData.height]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name.startsWith('obstacles.')) {
      const obstacleKey = name.split('.')[1] as keyof typeof formData.obstacles;
      setFormData(prev => ({
        ...prev,
        obstacles: {
          ...prev.obstacles,
          [obstacleKey]: checked
        }
      }));
    } else {
      const services = [...formData.services];
      if (checked) {
        services.push(name);
      } else {
        const index = services.indexOf(name);
        if (index > -1) {
          services.splice(index, 1);
        }
      }
      setFormData(prev => ({ ...prev, services }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw aanvraag! We nemen zo snel mogelijk contact met u op.');
  };

  return (
    <div className="min-h-screen bg-[#d1d1d1] pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2 text-center">
            Offerteformulier
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Via onderstaand offerteformulier kunt u direct uw prijs berekenen en een vrijblijvende offerte opvragen.
            Wij werken met vakkundige meters en vaste prijzen zo komt u later niet voor verrassingen te staan.
          </p>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg shadow-lg p-6 md:p-8">
            <AreaCalculator
              width={formData.width}
              height={formData.height}
              area={formData.area}
              onChange={handleInputChange}
            />

            <PersonalInfo
              name={formData.name}
              email={formData.email}
              phone={formData.phone}
              onChange={handleInputChange}
            />

            <Services
              services={formData.services}
              onCheckboxChange={handleCheckboxChange}
            />

            <ZolderQuestion
              hasZolder={formData.hasZolder}
              onChange={handleInputChange}
            />

            <Obstacles
              obstacles={formData.obstacles}
              onCheckboxChange={handleCheckboxChange}
            />

            <OtherObstacles
              otherObstacles1={formData.otherObstacles1}
              otherObstacles2={formData.otherObstacles2}
              otherObstaclesCount1={formData.otherObstaclesCount1}
              otherObstaclesCount2={formData.otherObstaclesCount2}
              onChange={handleInputChange}
            />

            <Comments
              comments={formData.comments}
              onChange={handleInputChange}
            />

            <div className="text-center">
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Offerte Aanvragen
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OffertePage;