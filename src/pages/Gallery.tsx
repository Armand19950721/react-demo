import React, { useState, useEffect } from 'react';
import PicbotDropdown from '../components/PicbotDropdown';
import PicbotGallery from '../components/GalleryPhoto';

const Gallery: React.FC = () => {
  const [selectedPicbot, setSelectedPicbot] = useState<string>('');

  useEffect(() => {
    console.log('Selected Picbot:', selectedPicbot);
  }, [selectedPicbot]);

  return (
    <div className="p-4">
      <PicbotDropdown selectedPicbot={selectedPicbot} onChange={setSelectedPicbot} />
      <PicbotGallery picbotName={selectedPicbot} />
    </div>
  );
};

export default Gallery;
