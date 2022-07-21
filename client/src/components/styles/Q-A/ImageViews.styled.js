import styled from 'styled-components';

export const ThumbNail = styled.img`

  width: 50px;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  object-fit: cover;
  &:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`;

export const FullSizeImage = styled.img`
  width: 800px;
  height: 500px;
  padding: 5px;
  object-fit: contain;

  &:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`;

export const ImageList = styled.div`
  display: inline-flex;
`;