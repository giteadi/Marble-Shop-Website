import React, { useState, useEffect } from 'react';
import boatStone from '../images/boatStone.jpg';
import gate from '../images/gate.jpg';
import marbleRokes from '../images/marble-rocks-at-bhedaghat.jpg';
import yogini from '../images/yogini.jpg';
import moorti from '../images/moorti.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    yogini,
    boatStone,
    gate,
    marbleRokes,
    moorti
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval
  }, [slides.length]);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative flex items-center justify-center h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === currentSlide ? '' : 'hidden'} duration-700 ease-in-out`} data-carousel-item>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-500' : 'bg-gray-300'}`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
