import React from 'react';
import { BaseInputProps } from '../../types/offerte';

interface CommentsProps extends BaseInputProps {
  comments: string;
}

const Comments: React.FC<CommentsProps> = ({ comments, onChange }) => {
  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Opmerkingen
      </label>
      <textarea
        name="comments"
        value={comments}
        onChange={onChange}
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      ></textarea>
    </div>
  );
};

export default Comments;