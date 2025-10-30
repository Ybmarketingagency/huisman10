import React from 'react';
import { BaseInputProps } from '../../types/offerte';

interface ZolderQuestionProps extends BaseInputProps {
  hasZolder: string;
}

const ZolderQuestion: React.FC<ZolderQuestionProps> = ({ hasZolder, onChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Betreft het werkzaamheden op zolder?</h2>
      <div className="flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="hasZolder"
            value="ja"
            checked={hasZolder === 'ja'}
            onChange={onChange}
            className="mr-2"
          />
          <span>Ja</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="hasZolder"
            value="nee"
            checked={hasZolder === 'nee'}
            onChange={onChange}
            className="mr-2"
          />
          <span>Nee</span>
        </label>
      </div>
    </div>
  );
};

export default ZolderQuestion;