import React, { useState } from 'react';
import maxwell from '../Images/maxwell.jpg'; // Adjust the path based on your folder structure

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    maxwell,
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="mt-10 flex flex-col items-center px-4">
      <div
        className="relative max-w-md w-full aspect-[-3/4] bg-gray-100 rounded-lg shadow-lg overflow-hidden"
      >
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-2xl bg-black text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-2xl bg-black text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
      <div className="mt-4 text-lg">Enjoy the memories!</div>
    </div>
  );
};

export default Slideshow;
