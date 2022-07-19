import { StyledImgShowcase } from '../styles/Overview/ImageShowcase.styled';
import { React, useState, useEffect, useRef } from 'react';
import { Background } from '../styles/reviewstyles/FormBackground.styled';
import { LargePhoto } from '../styles/reviewstyles/LargePhoto.styled';

// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
// https://codepen.io/kathykato/pen/prEmKe
// show full screen modal https://stackoverflow.com/questions/54741315/how-to-get-a-particular-div-into-fullscreenfull-window-size-in-reactjs
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

  // https://css-tricks.com/moving-backgrounds-with-mouse-position/
  // https://stackoverflow.com/questions/31519758/reacts-mouseevent-doesnt-have-offsetx-offsety
  // https://codepen.io/elevadorstudio/pen/zYxyVVy
  // TODO: figure out the equation, right now, it's not correct.
  let handleMouseMove = (ev) => {
    setMousePosition({
      // left: (ev.pageX - ev.nativeEvent.offsetX) / windowSize.width * 80, top: (ev.pageY - ev.nativeEvent.offsetY) / windowSize.height * 80});
      left: ev.nativeEvent.offsetX / windowSize.width * 100, top: ev.nativeEvent.offsetY / windowSize.height * 100});

    // left: ev.nativeEvent.pageX, top: ev.nativeEvent.pageY });
    // left: (ev.pageX - ev.nativeEvent.offsetX), top: (ev.pageY - ev.nativeEvent.offsetY)});
    // left: (-ev.nativeEvent.offsetX), top: (-ev.nativeEvent.offsetY)});
  };

  return (
    <StyledImgShowcase>
      <div className="slideshow">
        {/* TODO: ADD LEFT AND RIGHT ARROWS!!!!! */}
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
            { /*
              How do I prevent a parent's onclick event from firing when a child anchor is clicked?
              https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli */
            }
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
        <div
          // className='zoomedImageViewPhoto'
          // src={productStyle.photos[selectedThumbnailIndex].url}
          onClick={(e) => {
            e.stopPropagation();
            changeToExpandedView();
          }}
          // https://stackoverflow.com/questions/58028788/how-to-add-a-mousemove-event-listener-to-a-component-cursor-which-is-moved-wit
          // https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/
          // !!! https://stackoverflow.com/questions/44612051/zoom-that-follows-mouse
          // TODO: FIX THE BUG
          onMouseMove={(ev)=> handleMouseMove(ev)}
          style={{
            backgroundImage: `url(${productStyle.photos[selectedThumbnailIndex].url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // https://codepen.io/elevadorstudio/pen/zYxyVVy
            // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
            // transformOrigin: `${MousePosition.left}% ${MousePosition.top}%`
            backgroundPositionX: MousePosition.left + '%',
            backgroundPositionY: MousePosition.top + '%'
            // left: MousePosition.left, top: MousePosition.top
          }}
        />
      </div>


    </StyledImgShowcase>
  );
};

export default ImageShowcase;