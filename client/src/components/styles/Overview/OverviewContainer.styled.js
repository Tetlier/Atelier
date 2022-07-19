import styled from 'styled-components';

export const OverviewContainer = styled.div`
  width: 100%;
  max-width:100%;
  margin: 0 auto;
  height: 50%;
  margin-bottom: 1em;
  margin-top: 1em;

  // display: grid;
  // align-items: center;
  // grid-template-columns: repeat(6, 1fr);
  // grid-template-rows: repeat(3, 1fr);
  // grid-column-gap: 15px;
  // grid-row-gap: 0px;

  // .imageSelect { grid-area: 1 / 1 / 4 / 2; }
  // .imageGallery { grid-area: 1 / 2 / 4 / 5; }
  // .productContent { grid-area: 1 / 5 / 4 / 7; }

  display: flex;
  flex-wrap: wrap;
  row-gap: 13em;
  justify-content: space-between;
  align-items: center;
  .imageCarousel { flex: 1 1 1; }
  .imageGallery { flex: 2 1 2; }
  .productContent { flex: 1 1 1; }

`;
