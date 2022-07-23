import styled from 'styled-components';

export const StyledImageCarousel = styled.div`
  display: flex;
  flex-direction: column;

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
    border-radius: 10px;
  }

  .carousel-container img.active {
    opacity: 0.3;
  }

`;