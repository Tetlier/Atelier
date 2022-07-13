import styled from 'styled-components';

export const StyledImgShowcase = styled.div`
  // overflow: hidden;
  // display: flex;
  // width: 100%;
  // transition: all 0.5s ease;
  margin-right: 50px;
  img {
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all 0.3s ease;
  }
  img.active {
    opacity: 1;
  }
`;