// src/components/PicbotGallery.tsx
import React, { useEffect, useState } from 'react';
import { PicbotProduct, fetchPicbotProductPhotos } from '../services/picbotService';
import { loadMemberInfo } from '../services/authService';

interface PicbotGalleryProps {
  picbotName: string;
}

const PicbotGallery: React.FC<PicbotGalleryProps> = ({ picbotName }) => {
  const [picbots, setPicbots] = useState<PicbotProduct[]>([]);

  useEffect(() => {
    const getPicbots = async () => {
      try {
        const info = await loadMemberInfo();
        const data = await fetchPicbotProductPhotos(info.Token, picbotName);
        setPicbots(data);
      } catch (error) {
        console.error('Error fetching picbots:', error);
      }
    };

    getPicbots();
  }, [picbotName]);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {picbots.map((picbot) => (
        <div key={picbot.Id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <img src={picbot.ImageUrl} alt={picbot.PicbotName} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-white">{picbot.EventName || 'None'}</h3>
            <p className="text-sm text-gray-400">{picbot.PicbotName}</p>
            <p className="text-sm text-gray-400">{new Date(picbot.CreateAt).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PicbotGallery;
