import React from 'react';
import { BaseInputProps } from '../../types/offerte';

interface PersonalInfoProps extends BaseInputProps {
  name: string;
  email: string;
  phone: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ name, email, phone, onChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Uw Gegevens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Naam *
          </label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telefoon *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={phone}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;