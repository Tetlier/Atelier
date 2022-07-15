import { StyledImgShowcase } from '../styles/Overview/ImageShowcase.styled';
import { React, useState, useEffect, useRef } from 'react';

// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
// https://codepen.io/kathykato/pen/prEmKe
const ImageShowcase = ({productStyle, thumbnailChange, selectedThumbnailIndex}) => {
  let imageUrls = [];
  for (let i = 0; i < productStyle.photos.length; i++) {
    imageUrls.push({index: i, url: productStyle.photos[i].url});
  }
  // let slideIndex = 0;

  // const delay = 1250000;

  // const [index, setIndex] = useState(0);
  // const timeoutRef = useRef(null);

  // const resetTimeout = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // };

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === colors.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);

  return (
    <StyledImgShowcase>
      {
        // productStyle.results[0].photos.map((photo, i) => {
        //   return ( i === 0 &&
        //     <img key={i} src={photo.thumbnail_url} alt = 'shoe image' className= {i === 0 ? 'active' : ''}/>
        //   );
        // })
      // <img src={productStyle.photos[0].thumbnail_url} alt = 'shoe image' className='active'/>
      }
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-selectedThumbnailIndex * 100}%, 0, 0)` }}
        >
          {imageUrls.map((imageUrl, index) => (
            <img
              className="slide"
              key={index}
              src={imageUrl.url}/>
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
    </StyledImgShowcase>
  );
};

export default ImageShowcase;