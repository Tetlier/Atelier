import styled from 'styled-components';

export const Grid = styled.div`
width: 100%;
height: 100%;

`;

export const Row = styled.div`
display: flex;
width: 100%;
`;

export const Meta = styled.div`
width: 50%
`;

export const ReviewArea = styled.div`
width: 100%;
`;

export const Scroll = styled.div`
  max-height: 320px;
  overflow-y: auto;
  max-width: 700px;
  overflow-x: auto;
`;

export const Searchbar = styled.input`
padding: 5px;
height: 30px;
font-size: 1em;
width: 100%;
`;

export const Button = styled.button`
align-items: center;
padding: 15px 25px;
border-radius: 6px;
border: none;
display: inline;
margin: 5px 5px 5px 5px;
font-size: 1em;

background: #6E6D70;
box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
color: #DFDEDF;

&:hover {
  opacity: 0.9;
  transform: scale(0.98);
  background: #000;
}`;

export const ButtonPosition = styled.div`
margin-left: 50%;
`;