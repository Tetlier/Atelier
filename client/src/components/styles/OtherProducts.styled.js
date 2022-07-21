import styled from 'styled-components';

export const OtherProducts = styled.aside`
  padding: 5px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    padding: 5px;
    margin: 0 0 1.5em 0;
    display: flex;
  }

  :hover {
    cursor: pointer;
  }

  img {
    display: block;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const OtherProductsList = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 1em;
  border-bottom: 1px #ccc solid;
`;