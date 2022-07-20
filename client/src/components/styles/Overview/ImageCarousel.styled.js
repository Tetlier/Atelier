import styled from 'styled-components';

export const StyledImageCarousel = styled.div`
  display: flex;
  flex-direction: column;
  width:10%;

  .container {
    overflow: hidden;
  }

  .buttonContainer {
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
    height: 450px;
    gap: 5px;
  }

  .carousel-container img {
    &:hover {
      opacity: 0.8;
    }
    display: inline-block;
    width: 85px;
    height: 60px;
    object-fit:cover;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .carousel-container img.active {
    opacity: 0.3;
  }

`;