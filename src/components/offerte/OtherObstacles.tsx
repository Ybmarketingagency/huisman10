import React from 'react';
import { BaseInputProps } from '../../types/offerte';

interface OtherObstaclesProps extends BaseInputProps {
  otherObstacles1: string;
  otherObstacles2: string;
  otherObstaclesCount1: string;
  otherObstaclesCount2: string;
}

const OtherObstacles: React.FC<OtherObstaclesProps> = ({
  otherObstacles1,
  otherObstacles2,
  otherObstaclesCount1,
  otherObstaclesCount2,
  onChange
}) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex gap-4">
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Overige obstakels
            </label>
            <input
              type="text"
              name="otherObstacles1"
              value={otherObstacles1}
              onChange={onChange}
              placeholder="Beschrijf overige obstakels..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="w-32">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              AANTAL
            </label>
            <select
              name="otherObstaclesCount1"
              value={otherObstaclesCount1}
              onChange={onChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {[...Array(11)].map((_, i) => (
                <option key={i} value={i === 10 ? "10" : i.toString()}>
                  {i === 10 ? "10+" : i}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Overige obstakels
            </label>
            <input
              type="text"
              name="otherObstacles2"
              value={otherObstacles2}
              onChange={onChange}
              placeholder="Beschrijf overige obstakels..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="w-32">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              AANTAL
            </label>
            <select
              name="otherObstaclesCount2"
              value={otherObstaclesCount2}
              onChange={onChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {[...Array(11)].map((_, i) => (
                <option key={i} value={i === 10 ? "10" : i.toString()}>
                  {i === 10 ? "10+" : i}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherObstacles;