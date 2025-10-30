import React from 'react';

interface ObstaclesProps {
  obstacles: {
    radiators: boolean;
    cables: boolean;
    thermostats: boolean;
    pipes: boolean;
  };
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Obstacles: React.FC<ObstaclesProps> = ({ obstacles, onCheckboxChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Vragen m.b.t. de situatie</h2>
      <div className="space-y-3">
        <label className="flex items-start">
          <input
            type="checkbox"
            name="obstacles.radiators"
            checked={obstacles.radiators}
            onChange={onCheckboxChange}
            className="mt-1 mr-2"
          />
          <span>Radiator(en) aanwezig op de wanden</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="obstacles.cables"
            checked={obstacles.cables}
            onChange={onCheckboxChange}
            className="mt-1 mr-2"
          />
          <span>Kabelgoten aanwezig op wanden/plafond</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="obstacles.thermostats"
            checked={obstacles.thermostats}
            onChange={onCheckboxChange}
            className="mt-1 mr-2"
          />
          <span>Thermostaten aanwezig op wanden</span>
        </label>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="obstacles.pipes"
            checked={obstacles.pipes}
            onChange={onCheckboxChange}
            className="mt-1 mr-2"
          />
          <span>Buizen aanwezig op wanden/plafond</span>
        </label>
      </div>
    </div>
  );
};

export default Obstacles;