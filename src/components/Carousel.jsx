import { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'assets/Carousel/img-carousel1.jpeg',
    },
    {
      image: 'assets/Carousel/img-carousel2.jpeg',
    },
    {
      image: 'assets/Carousel/img-carousel3.jpeg',
    },
    {
      image: 'assets/Carousel/img-carousel4.jpeg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
          >
            <img
              src={slide.image}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
