import styled from 'styled-components';

export const OtherProducts = styled.aside`
  padding: 5px;
  width: 150px;

  h4 {
    padding: 5px;
    display: block;
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
  justify-content: space-between;
  border-bottom: 1px #ccc solid;
`;