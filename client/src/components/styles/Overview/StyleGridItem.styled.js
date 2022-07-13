import styled from 'styled-components';

// https://stackoverflow.com/questions/38367110/round-clickable-profile-image-with-a-button-on-the-bottom-in-css
export const StyleGridItem = styled.div`
  border-radius: 50%;
  &:hover {
    opacity: 0.8;
  }
  img {
    &:hover {
      opacity: 0.8;
      background: #000;
    }
  }
`;