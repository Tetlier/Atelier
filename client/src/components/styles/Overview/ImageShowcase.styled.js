import styled from 'styled-components';

export const StyledImgShowcase = styled.div`
  // overflow: hidden;
  // display: flex;
  // width: 100%;
  // transition: all 0.5s ease;
  // margin-right: 50px;
  // img {
  //   width: 100%;
  //   position: relative;
  //   left: 0;
  //   top: 0;
  //   opacity: 0;
  //   transition: all 0.3s ease;
  // }
  // img.active {
  //   opacity: 1;
  // }
  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 500px;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
  }

  .slide {
    display: inline-block;

    height: 400px;
    width: 100%;
    border-radius: 40px;
  }

  /* Buttons */

  .slideshowDots {
    text-align: center;
  }

  .slideshowDot {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 7px 0px;

    background-color: #c4c4c4;
  }

  .slideshowDot.active {
    background-color: #000000;
  }
`;