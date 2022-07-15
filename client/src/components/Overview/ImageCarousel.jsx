import React, {useEffect, useState, useRef} from 'react';
import { StyledImageCarousel } from '../styles/Overview/ImageCarousel.styled';
import ImageItem from './ImageItem';

// https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
const ImageCarousel = ({productStyle, thumbnailChange, selectedThumbnailIndex}) => {
  // return <StyledImageCarousel>
  //   {
  //     productStyle.photos.map((photo, i) => {
  //       return ( (i === 0 || i === 1 || i === 2) &&
  //         // https://reactjs.org/warnings/special-props.html
  //         <ImageItem key={i} src={photo.thumbnail_url} alt = 'shoe image'/>
  //       );
  //     })
  //   }
  // </StyledImageCarousel>;
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <StyledImageCarousel>
      <div className='container'>
        <div className='buttonContainer'>
          <button
            onClick={movePrev}
            className='buttonHolder'
            disabled={isDisabled('prev')}
          >
            <i className="fa-solid fa-angles-up"></i>
            <span className='sr-only'>Prev</span>
          </button>
          <div
            ref={carousel}
            className='carousel-container'
          >
            {productStyle.photos.map((photo, index) => {
              return (
                <img
                  className={`${selectedThumbnailIndex === index ? ' active' : ''}`}
                  key={index}
                  src={photo.thumbnail_url}
                  onClick={() => {
                    thumbnailChange(index);
                  }}
                  alt = 'shoe image'/>
              );
            })}
          </div>
          <button
            onClick={moveNext}
            className='buttonHolder'
            disabled={isDisabled('next')}
          >
            <i className="fa-solid fa-angles-down"></i>
            <span className='sr-only'>Next</span>
          </button>
        </div>
      </div>
    </StyledImageCarousel>
  );
};

export default ImageCarousel;