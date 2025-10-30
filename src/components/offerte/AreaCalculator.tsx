import React from 'react';
import { Calculator } from 'lucide-react';
import { BaseInputProps } from '../../types/offerte';

interface AreaCalculatorProps extends BaseInputProps {
  width: string;
  height: string;
  area: string;
}

const AreaCalculator: React.FC<AreaCalculatorProps> = ({ width, height, area, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9.]/g, '');
    
    const event = {
      target: {
        name,
        value: numericValue
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    onChange(event);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Calculator className="mr-2 text-emerald-600" />
        Rekenhulp Oppervlakte in M²
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Breedte in meters
          </label>
          <input
            type="number"
            name="width"
            step="0.01"
            min="0"
            value={width}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hoogte in meters
          </label>
          <input
            type="number"
            name="height"
            step="0.01"
            min="0"
            value={height}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Oppervlakte in M²
          </label>
          <input
            type="text"
            name="area"
            value={area}
            readOnly
            className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AreaCalculator;