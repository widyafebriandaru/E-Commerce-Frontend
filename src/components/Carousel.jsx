import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/index.css';

function CarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onChange = (index) => {
    setCurrentSlide(index);
  };

  const getSlideClassName = (index) => {
    if (index === currentSlide) {
      return 'slide active';
    } else if (index < currentSlide) {
      return 'slide enter';
    } else {
      return 'slide leave';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-fit items-center justify-center hidden sm:flex">
      <Carousel
        selectedItem={currentSlide}
        onChange={onChange}
        showStatus={false}
        showThumbs={false}
        transitionTime={1000} // Transition time in milliseconds
        showIndicators={true}
        infiniteLoop
        renderThumbs={() => null}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="carousel-arrow carousel-arrow-prev"
            >
              &#8249;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="carousel-arrow carousel-arrow-next"
            >
              &#8250;
            </button>
          )
        }
      >
        <div className={getSlideClassName(0)}>
          <img src="assets/Carousel/img-carousel1.jpeg" alt="Slide 1" className="slide-image" />
        </div>
        <div className={getSlideClassName(1)}>
          <img src="assets/Carousel/img-carousel2.jpeg" alt="Slide 2" className="slide-image" />
        </div>
        <div className={getSlideClassName(2)}>
          <img src="assets/Carousel/img-carousel3.jpeg" alt="Slide 3" className="slide-image" />
        </div>
        <div className={getSlideClassName(3)}>
          <img src="assets/Carousel/img-carousel4.jpeg" alt="Slide 4" className="slide-image" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;