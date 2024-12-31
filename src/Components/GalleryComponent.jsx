import React, { useState } from 'react';
import g1 from '../Images/g1.jpg';
import g2 from '../Images/g2.jpg';
import g3 from '../Images/g3.jpg';
import g4 from '../Images/g4.jpg';
import g5 from '../Images/g5.jpg';
import g6 from '../Images/g6.jpg';
import g7 from '../Images/g7.jpg';
import g8 from '../Images/g8.jpg';
import g9 from '../Images/g9.jpg';
import g10 from '../Images/g10.jpg';
import g11 from '../Images/g11.jpeg';
import g12 from '../Images/g12.jpeg';
import g13 from '../Images/g13.jpg';
import g14 from '../Images/g14.jpg';
import g15 from '../Images/g15.jpg';
import g16 from '../Images/g16.jpg';
import g17 from '../Images/g17.jpg';
import g18 from '../Images/g18.jpg';
import g19 from '../Images/g19.JPG';
import g20 from '../Images/g20.JPG';
import g21 from '../Images/g21.JPG';
import g22 from '../Images/g22.jpg';
import g23 from '../Images/g23.jpg';
import g24 from '../Images/g24.jpg';
import g25 from '../Images/g25.jpg';
import g26 from '../Images/g26.jpg';
import g27 from '../Images/g27.jpg';
import g28 from '../Images/g28.jpg';
import g29 from '../Images/g29.JPG';
import g30 from '../Images/g30.JPG';
import g31 from '../Images/g31.JPG';
import g32 from '../Images/g32.JPG';
import g33 from '../Images/g33.JPG';
import g34 from '../Images/g34.JPG';
import g35 from '../Images/g35.JPG';
import g36 from '../Images/g36.JPG';
import g37 from '../Images/g37.JPG';
import g38 from '../Images/g38.JPG';
import g39 from '../Images/g39.jpg';

const Gallery = () => {
  const images = [g1, g2, g3, g4, g5, g6, g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g19,g20,g21,g22,g23,g24,g25,g26,g27,g28,g29,g30,g31,g32,g33,g34,g35,g36,g37,g38,g39];
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
