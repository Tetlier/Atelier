import styled from 'styled-components';

export const OverviewContainer = styled.div`
  width: 100%;
  max-width:100%;
  margin: 0 auto;
  height: 50%;
  margin-bottom: 1em;
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items:center;
  .imageCarousel { flex: 15%; flex-shrink: 0; flex-grow: 0;}
  .imageGallery { flex-basis: 50%; flex-shrink: 0; flex-grow: 0;}
  .productContent { flex-basis: 35%; flex-shrink: 0; flex-grow: 0;}
`;
