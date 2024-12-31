import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const images = [
    'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg', // Example image 1
    'https://via.placeholder.com/300', // Example image 2
    'https://via.placeholder.com/300', // Example image 3
    'https://via.placeholder.com/300', // Example image 4
    'https://via.placeholder.com/300', // Example image 5
    'https://via.placeholder.com/300', // Example image 6
  ];

  const [visibleImages, setVisibleImages] = useState(new Array(images.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisibleImages((prev) => {
            const updated = [...prev];
            updated[index] = true; // Mark the image as visible
            return updated;
          });
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the image is in the viewport

    // Observe each image
    const imageElements = document.querySelectorAll('.gallery-image');
    imageElements.forEach((imageElement) => observer.observe(imageElement));

    return () => {
      imageElements.forEach((imageElement) => observer.unobserve(imageElement));
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            className={`gallery-image object-cover w-full h-full transition-opacity duration-1000 ease-in-out opacity-0 ${visibleImages[index] ? 'opacity-100' : ''}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
