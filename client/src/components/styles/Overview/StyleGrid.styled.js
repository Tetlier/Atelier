import styled from 'styled-components';

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
`;

export const StyleGridItem = styled.img`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  object-fit: cover;
  max-height:100%;
  max-width:100%;
  &:hover {
    opacity: 0.8;
<<<<<<< HEAD
    background: #000;
=======
  }

  &.active {
    border-style: solid;
    border-color: coral;
>>>>>>> main
  }
`;