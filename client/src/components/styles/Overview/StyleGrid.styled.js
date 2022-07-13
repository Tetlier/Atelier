import styled from 'styled-components';

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  img {
    &:hover {
      opacity: 0.8;
      background: #000;
    }
  }
`;