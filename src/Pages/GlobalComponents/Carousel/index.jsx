/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import * as Style from "./style";

// eslint-disable-next-line react/prop-types
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [images]);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 0) {
            // Swipe left
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        } else if (diffX < 0) {
            // Swipe right
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }

        setIsDragging(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Style.CarouselContainer
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
        >
            <Style.CarouselTrack
                ref={carouselRef}
                currentIndex={currentIndex}
                totalImages={images.length}
            >
                {images.map((image, index) => (
                    <Style.CarouselImage
                        key={index}
                        src={image}
                        alt="Imagem do carrossel"
                    />
                ))}
            </Style.CarouselTrack>
            <Style.PreviousButton onClick={goToPrevious}>&#8249;</Style.PreviousButton>
            <Style.NextButton onClick={goToNext}>&#8250;</Style.NextButton>
        </Style.CarouselContainer>
    );
};

export default Carousel;