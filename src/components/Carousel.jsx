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
            <Carousel showArrows={true} onChange={onChange} autoFocus={true}>
                <div>
                    <img src="assets/Carousel/img-carousel1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/Carousel/img-carousel2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/Carousel/img-carousel3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/Carousel/img-carousel4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
}

export default CarouselComponent;