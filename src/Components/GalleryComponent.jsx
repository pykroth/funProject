import React, { useState, useEffect, useRef } from 'react';
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
import g40 from '../Images/g40.jpg';
import g41 from '../Images/g41.jpg';
import g42 from '../Images/g42.jpg';
import g43 from '../Images/g43.jpg';
import g44 from '../Images/g44.jpg';
import g45 from '../Images/g45.jpg';
import g46 from '../Images/g46.jpg';
import g47 from '../Images/g47.jpg';
import g48 from '../Images/g48.jpg';
import g50 from '../Images/g50.jpg';
import g51 from '../Images/g51.jpg';
import g52 from '../Images/g52.jpg';
import g53 from '../Images/g53.jpg';
import g54 from '../Images/g54.jpg';
import g55 from '../Images/g55.jpg';
import g56 from "../Images/g56.jpg";

// Import multiple songs
import backgroundMusic from '../Audio/background-music.mp3';
import backgroundMusic2 from '../Audio/background-music2.mp3';


const Gallery = () => {
  const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28, g29, g30, g31, g32, g33, g34, g35, g36, g37, g38, g39, g40, g41, g42, g43, g44, g45, g46, g47, g48, g50, g51, g52, g53, g54, g55, g56];
  const songs = [backgroundMusic, backgroundMusic2]; // Array of songs
  
  const [visibleImages, setVisibleImages] = useState(new Array(images.length).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(backgroundMusic); // Track current song

  const imageRefs = useRef(images.map(() => React.createRef()));
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const checkIfInView = () => {
    imageRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setVisibleImages((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkIfInView);
    checkIfInView();
    return () => {
      window.removeEventListener('scroll', checkIfInView);
    };
  }, []);

  // Play/pause music based on modal state
  useEffect(() => {
    if (audioRef.current) {
      if (isModalOpen) {
        audioRef.current.volume = 0.3;
        audioRef.current.play()
          .then(() => {
            setIsMusicPlaying(true);
          })
          .catch((error) => {
            console.log('Autoplay prevented:', error);
          });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsMusicPlaying(false);
      }
    }
  }, [isModalOpen, currentSong]); // Added currentSong dependency

  // Auto-play next song when current one ends
  useEffect(() => {
    const handleSongEnd = () => {
      const currentIndex = songs.indexOf(currentSong);
      const nextIndex = (currentIndex + 1) % songs.length;
      setCurrentSong(songs[nextIndex]);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleSongEnd);
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleSongEnd);
        }
      };
    }
  }, [currentSong, songs]);

  useEffect(() => {
    if (isModalOpen && isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isModalOpen, isPlaying, images.length]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, currentImageIndex]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play();
        setIsMusicPlaying(true);
      }
    }
  };

  const skipSong = () => {
    const currentIndex = songs.indexOf(currentSong);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const openModal = (index) => {
    // Pick a random song when opening modal
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    setCurrentSong(randomSong);
    
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    document.body.style.overflow = 'unset';
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      {/* Background Music - only plays when modal is open */}
      <audio ref={audioRef} loop>
        <source src={currentSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <img
              ref={imageRefs.current[index]}
              src={image}
              alt={`Gallery item ${index + 1}`}
              className={`gallery-image transition-opacity duration-1000 ease-in-out ${visibleImages[index] ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
          </div>
        ))}
      </div>

      {/* Slideshow Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlayPause();
            }}
            className="absolute top-4 left-4 text-white text-2xl font-bold hover:text-gray-300 z-10 bg-black bg-opacity-50 px-4 py-2 rounded"
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMusic();
            }}
            className="absolute top-4 right-20 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 px-4 py-2 rounded"
          >
            {isMusicPlaying ? '🔊' : '🔇'}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              skipSong();
            }}
            className="absolute top-4 right-36 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 px-4 py-2 rounded"
          >
            ⏭️
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white text-5xl font-bold hover:text-gray-300 z-10"
          >
            &#8249;
          </button>

          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white text-5xl font-bold hover:text-gray-300 z-10"
          >
            &#8250;
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;