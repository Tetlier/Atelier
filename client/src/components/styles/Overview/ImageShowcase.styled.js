import styled from 'styled-components';

export const StyledImgShowcase = styled.div`

  margin-right: 2em;
  margin-left: 2em;

  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 500px;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
    display: flex;
    align-items: center;

    // If the user hovers over the main image
    // the mouse icon should change to show a magnifying glass
    // https://stackoverflow.com/questions/13171968/magnifying-glass-zoom-cursor-over-image
    &: hover {
      cursor: -moz-zoom-in;
      cursor: -webkit-zoom-in;
      cursor: zoom-in;
    }
  }

  .slide {
    display: inline-block;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 40px;
  }

  /* Buttons */

  .slideshowDots {
    text-align: center;
  }

  .slideshowDot {
    display: inline-block;
    height: 1em;
    width: 1em;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 7px 0px;

    background-color: #6E6D70;
  }

  .slideshowDot.active {
    background-color: #000000;
  }

  .expandedView {
    display: none;
  }

  .expandedView.active {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .expandedViewPhoto {
    &: hover {
      cursor: -moz-crosshair;
      cursor: -webkit-crosshair;
      cursor: crosshair;
    }
    margin-bottom: 25px;
    border-radius: 40px;
  }

  .thumbnailsForExpandedView img {
    display: inline-block;
    margin: 10px;
    width: 50px;
    height: 50px;
    border-radius: 40px;
  }

  .thumbnailsForExpandedView img.active {
    opacity: 0.3;
  }

  .zoomedImageView {
    display: none;
  }

  .zoomedImageView.active {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zoomedImageView.active div {
<<<<<<< HEAD
    width: 100%;
    height: 100%;
    transform: scale(2.5);
=======
    width: 600px;
    height: 600px;
    transform: scale(2.5);

    &:hover {
      cursor: zoom-out;
    }
>>>>>>> main
  }
`;