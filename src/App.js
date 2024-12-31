import React, { useState } from 'react';
import IntroAnimation from './Components/IntroAnimation';
import BirthdayMessage from './Components/BirthdayMessage';
import Slideshow from './Components/SlideshowComponent';
import Gallery from './Components/GalleryComponent';

const App = () => {
  const [click, hasClicked] = useState(false)
  function handleClick()
  {
    hasClicked(true)
  }
  
  return (
    <div>
{!click ? (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="relative">
        {/* Bow */}
        <img
          src="https://pics.clipartpng.com/Red_Ribbon_PNG_Clipart-534.png"
          alt="Gift Bow"
          className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-24 h-24 mt-8"
        />

        {/* Gift Box */}
        <div className="p-8 bg-white rounded-lg shadow-lg border-4 border-black mt-12">
          <button onClick={() =>handleClick()}className="px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-bold text-lg rounded-lg hover:scale-105 transition-transform border-black border-2">
            Click Me
          </button>
        </div>
      </div>
    </div>
    
      )
 :
(
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen text-white App cursor-yorushika">
      {/* Intro Animation */}
      <IntroAnimation />

      {/* Birthday Message */}
      <BirthdayMessage />

      {/* Slideshow */}
      <Slideshow />
      <h2 className="font-bold black text-center text-5xl mt-8 mb-4 ">Gallery</h2>
      <Gallery/>
    </div>
)
}
    </div>
  );
};

export default App;
