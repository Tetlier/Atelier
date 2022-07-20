import { StyledImgShowcase } from '../styles/Overview/ImageShowcase.styled';
import { React, useState, useEffect, useRef } from 'react';
import { Background } from '../styles/reviewstyles/FormBackground.styled';
import { LargePhoto } from '../styles/reviewstyles/LargePhoto.styled';
import $ from 'jquery';

const ImageShowcase = ({productStyle, thumbnailChange, selectedThumbnailIndex}) => {
  let imageUrls = [];
  for (let i = 0; i < productStyle.photos.length; i++) {
    imageUrls.push({index: i, url: productStyle.photos[i].url});
  }

  const [expandedView, setExpandedView] = useState(false);
  const [zoomedImageView, setZoomedImageView] = useState(false);
  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0
  });

  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

  let changeView = () => {
    setExpandedView(!expandedView);
  };

  let changeToZoomView = () => {
    setZoomedImageView(true);
    setExpandedView(false);
  };

  let changeToExpandedView = () => {
    setZoomedImageView(false);
    setExpandedView(true);
    setMousePosition({left: 0, top: 0});
  };


  let handleMouseMove = (ev) => {
    let height = $( '#zoomedImage' ).height();
    let width = $( '#zoomedImage' ).width();
    setMousePosition({left: ev.nativeEvent.offsetX / width * 100, top: ev.nativeEvent.offsetY / height * 100});

  };

  return (
    <StyledImgShowcase>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-selectedThumbnailIndex * 100}%, 0, 0)` }}
        >
          {imageUrls.map((imageUrl, index) => (
            <img
              className="slide"
              key={index}
              src={imageUrl.url}
              onClick={() => {
                changeView();
              }}/>
          ))}
        </div>
        <div className="slideshowDots">
          {imageUrls.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${selectedThumbnailIndex === idx ? ' active' : ''}`}
              onClick={() => {
                thumbnailChange(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      <div
        className={`expandedView${expandedView === true ? ' active' : ''}`}
        onClick={() => {
          changeView();
        }}
      >
        <LargePhoto
          className='expandedViewPhoto'
          src={productStyle.photos[selectedThumbnailIndex].url}
          onClick={(e) => {
            e.stopPropagation();
            changeToZoomView();
          }}
        />

        <div className='thumbnailsForExpandedView'>
          {imageUrls.map((imageUrl, index) => (
            <img
              className={`${selectedThumbnailIndex === index ? ' active' : ''}`}
              key={index}
              src={imageUrl.url}
              onClick={(e) => {
                e.stopPropagation();
                thumbnailChange(index);
              }}/>
          ))}
        </div>
      </div>

      <div
        className={`zoomedImageView${zoomedImageView === true ? ' active' : ''}`}
        onClick={() => {
          e.stopPropagation();
          changeToExpandedView();
        }}
      >
        <div id='zoomedImage'
          onClick={(e) => {
            e.stopPropagation();
            changeToExpandedView();
          }}
          onMouseMove={(ev)=> handleMouseMove(ev)}
          style={{
            backgroundImage: `url(${productStyle.photos[selectedThumbnailIndex].url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '250%',
            backgroundPositionX: MousePosition.left + '%',
            backgroundPositionY: MousePosition.top + '%'
          }}
        />
      </div>


    </StyledImgShowcase>
  );
};

export default ImageShowcase;