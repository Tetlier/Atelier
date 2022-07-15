import styled from 'styled-components';

export const OverviewContainer = styled.div`
  max-width:100%;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  height: 850px;

  // display: grid;
  // grid-template-columns: repeat(7, 1fr);
  // grid-template-rows: repeat(4, 1fr);
  // grid-column-gap: 0px;
  // grid-row-gap: 0px;

  // .imageSelect { grid-area: 1 / 1 / 5 / 2; }
  // .imageGallery { grid-area: 1 / 2 / 5 / 6; }
  // .productContent { grid-area: 1 / 6 / 5 / 8; }
  // .productDetail { grid-area: 3 / 1 / 5 / 5; }
  // .productFeatures { grid-area: 3 / 5 / 5 / 8; }

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 0px;

  .imageSelect { grid-area: 1 / 1 / 4 / 2; }
  .imageGallery { grid-area: 1 / 2 / 4 / 5; }
  .productContent { grid-area: 1 / 5 / 4 / 7; }
`;
