import React, {useEffect, useState, useRef} from 'react';
import { StyledImageCarousel } from '../styles/Overview/ImageCarousel.styled';
import ImageItem from './ImageItem';
import $ from 'jquery';

/**
 * ImageCarousel that holds all the thumbnails in the default view
 */
const ImageCarousel = ({productStyle, thumbnailChange, selectedThumbnailIndex}) => {

  // currentIndex is used to track where the boundary of the carousel-container is.
  const [currentIndex, setCurrentIndex] = useState(0);

  // check if the prev/next button that move the thumbnails should be disabled or not.
  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }
    if (direction === 'next' ) {
      return currentIndex >= $( '.carousel-container' ).height();
    }
    return false;
  };

  // scroll the thumbnails up and down based on the direction
  const scroll = (direction) => {
    let far = $( '.carousel-container' ).height() / 2 * direction;
    let pos = $('.carousel-container').scrollTop() + far;
    if (pos <= 0) {
      setCurrentIndex(0);
    } else if (pos >= $( '.carousel-container' ).height()) {
      setCurrentIndex($( '.carousel-container' ).height());
    } else {
      setCurrentIndex(pos);
    }
    $('.carousel-container').animate( { scrollTop: pos }, 1000);
  };

  return (
    <StyledImageCarousel>
      <div className='container'>
        <div className='buttonContainer'>
          <button
            onClick={() => {
              scroll(-1);
            }}
            className='buttonHolder'
            disabled={isDisabled('prev')}
            style={{visibility: isDisabled('prev') ? 'hidden' : 'visible'}}
          >
            <i className="fa-solid fa-angles-up"></i>
          </button>

          <div className='carousel-container'>
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
            onClick={() => {
              scroll(1);
            }}
            className='buttonHolder'
            disabled={isDisabled('next')}
            style={{visibility: isDisabled('next') ? 'hidden' : 'visible'}}
          >
            <i className="fa-solid fa-angles-down"></i>
          </button>
        </div>
      </div>
    </StyledImageCarousel>
  );
};

export default ImageCarousel;

// Helpful links:
// https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
// https://medium.com/@RahulTMody/create-a-scrolling-image-slider-in-react-1e4eddcd407b
// https://codepen.io/rmody3/pen/EXObmR