import styled from 'styled-components';

export const StyledImageCarousel = styled.div`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD

  .container {
    position: relative;
    overflow: hidden;
    height: 750px;
    width: 150px;
  }
  .buttonContainer {
    position: absolute;
=======
  width:10%;

  .container {
    overflow: hidden;
  }

  .buttonContainer {
>>>>>>> main
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
<<<<<<< HEAD
    gap: 0.25rem;
=======
    height: 450px;
    gap: 5px;
>>>>>>> main
  }

  .carousel-container img {
    &:hover {
      opacity: 0.8;
    }
<<<<<<< HEAD
    width: 80%;
=======
    display: inline-block;
    width: 85px;
    height: 60px;
>>>>>>> main
    opacity: 1;
    transition: all 0.3s ease;
  }

  .carousel-container img.active {
    opacity: 0.3;
  }

`;