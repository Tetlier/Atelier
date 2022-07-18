import styled from 'styled-components';

export const StyledImageCarousel = styled.div`
  display: flex;
  flex-direction: column;

  .container {
    position: relative;
    overflow: hidden;
    height: 750px;
    width: 120px;
    background-color:yellow;
  }
  .buttonContainer {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  .carousel-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    gap: 0.25rem;
  }

  .carousel-container img {
    &:hover {
      opacity: 0.8;
    }
    width: 80%;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .carousel-container img.active {
    opacity: 0.3;
  }

`;