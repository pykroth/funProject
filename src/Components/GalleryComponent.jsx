import React, { useState } from 'react';
import g1 from '../Images/g1.jpg';
import g2 from '../Images/g2.jpg';
import g3 from '../Images/g3.jpg';
import g4 from '../Images/g4.jpg';
import g5 from '../Images/g5.jpg';
import g6 from '../Images/g6.jpg';
import g7 from '../Images/g7.jpg';

const Gallery = () => {
  const images = [g1, g2, g3, g4, g5, g6, g7];
  const [visibleImages, setVisibleImages] = useState(new Array(images.length).fill(true));  // Set all images as visible

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            className={`gallery-image transition-opacity duration-1000 ease-in-out ${visibleImages[index] ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              objectFit: 'cover',  // Maintain aspect ratio while covering the space
              width: '100%',        // Make the image fill the width of the container
              height: '200px'       // Fixed height for all images
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
