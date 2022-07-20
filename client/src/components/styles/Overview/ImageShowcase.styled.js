import styled from 'styled-components';

export const StyledImgShowcase = styled.div`

  margin-right: 2em;
  margin-left: 2em;

  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 500px;
  }

  .buttonContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background-color: yellow;
    height: 100%;
    width: 100%;
  }

  .buttonHolder {
    margin: 10px;
    color: #000000;
    text-align: center;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
    display: flex;
    align-items: center;

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

    background-color: #e2e2e2;
  }

  .slideshowDot.active {
    background-color: #000000;
  }

  .leftArrow {
  align-items: center;
  padding: 3px 7px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  float:left;

  background: #6E6D70;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: #DFDEDF;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    background: #000;
  }
}

.rightArrow {
  align-items: center;
  padding: 3px 7px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  float:right;

  background: #6E6D70;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: #DFDEDF;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    background: #000;
  }
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

  .zoomedImageView.active  div {
    width: 800px;
    height: 600px;
    &:hover {
      cursor: zoom-out;
    }
  }
`;