// src/PicbotDropdown.tsx
import React, { useEffect, useState } from 'react';
import { Picbot, fetchPicbots } from '../services/picbotService';
import { loadMemberInfo } from '../services/authService';

interface PicbotDropdownProps {
  selectedPicbot: string;
  onChange: (value: string) => void;
}

const PicbotDropdown: React.FC<PicbotDropdownProps> = ({ selectedPicbot, onChange }) => {
  const [picbots, setPicbots] = useState<Picbot[]>([]);

  useEffect(() => {
    console.log('get picbot info');
    const getPicbots = async () => {
      try {
        const info = await loadMemberInfo();
        const data = await fetchPicbots(info.Token);
        setPicbots(data);
      } catch (error) {
        console.error('Error fetching picbots:', error);
      }
    };

    getPicbots();

  }, []);

  return (
    <div className="p-4">
      <label htmlFor="picbot-select" className="block text-sm font-medium text-gray-700">
        Select a Picbot
      </label>
      <select
        id="picbot-select"
        value={selectedPicbot}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select a picbot</option>
        {picbots.map((picbot) => (
          <option key={picbot.Id} value={picbot.Name}>
            {picbot.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PicbotDropdown;
