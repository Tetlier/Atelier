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
  .imageCarousel { min-width: 15%; }
  .imageShowcase { min-width: 50%; }
  .productContent {
    min-width: 35%;
    @media only screen and (max-width: 1000px) {
      min-width: 100%;
    }
  }
  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap-reverse;
  }
`;
