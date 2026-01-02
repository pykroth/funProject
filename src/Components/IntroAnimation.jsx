import React, { useEffect, useState } from 'react';

const IntroAnimation = () => {
  const [year, setYear] = useState(1946);
  const [showMessage, setShowMessage] = useState(false);
  const [isLocked, setIsLocked] = useState(true); // Track if the page is locked

  useEffect(() => {
    // Lock the page when the component is mounted
    document.body.style.pointerEvents = 'none';
    
    const interval = setInterval(() => {
      setYear((prevYear) => {
        if (prevYear < 2026) {
          return prevYear + 1;
        }
        clearInterval(interval);
        setShowMessage(true); // Trigger Happy Birthday message when it hits 2025
        setIsLocked(false); // Unlock the page when the animation finishes
        document.body.style.pointerEvents = 'auto'; // Re-enable interactions
        return prevYear;
      });
    }, 50); // Adjust speed here (lower = faster)
    return () => {
      clearInterval(interval); // Cleanup interval
      document.body.style.pointerEvents = 'auto'; // Ensure interactions are enabled after component unmount
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-col w-full h-screen bg-red-600">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white animate-rise">{year}</h1>

        {showMessage && (
          <div className="mt-8 text-4xl font-semibold text-white animate-fade-in">
            Happy Birthday ama!
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroAnimation;
