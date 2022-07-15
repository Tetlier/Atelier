import styled from 'styled-components';

export const StyledImageCarousel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  // position: relative;
  .container {
    position: relative;
    overflow: hidden;
    height: 700px;
    width: 150px;
  }
  .buttonContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .buttonHolder {
    z-index: 10;
    padding: 0;
    margin: 10px;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    color: #000000;
    text-align: center;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
  }
  .carousel-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    z-index: 0;
    gap: 0.25rem;
  }

  .carousel-container img {
    margin: 0.3rem;
    &:hover {
      opacity: 0.8;
    }
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .carousel-container img.active {
    opacity: 0.3;
  }
`;