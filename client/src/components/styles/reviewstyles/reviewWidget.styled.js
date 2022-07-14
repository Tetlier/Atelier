import styled from 'styled-components';

export const Grid = styled.div`
padding: 75px 75px 75px 75px;
`;

export const Row = styled.div`
display: flex;
`;

export const Col = styled.div`
flex: ${props=> props.size};
`;

export const Scroll = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;
