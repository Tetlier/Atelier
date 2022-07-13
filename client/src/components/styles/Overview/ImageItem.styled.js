import styled from 'styled-components';

export const StyledImgItem = styled.div`
  margin: 0.3rem;
  &:hover {
    opacity: 0.8;
  }
  img {
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    opacity: 1;
    transition: all 0.3s ease;
  }
`;