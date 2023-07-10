import { useState, useEffect } from 'react';
import * as Style from "./style";

// eslint-disable-next-line react/prop-types
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          // eslint-disable-next-line react/prop-types
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, [images]);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        // eslint-disable-next-line react/prop-types
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        // eslint-disable-next-line react/prop-types
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

  return (
    <Style.CarouselContainer>
      <Style.CarouselImage
        src={images[currentIndex]}
        alt="Imagem do carrossel"
      />
      <Style.PreviousButton onClick={goToPrevious}>&#8249;</Style.PreviousButton>
      <Style.NextButton onClick={goToNext}>&#8250;</Style.NextButton>
    </Style.CarouselContainer>
  );
};

export default Carousel;