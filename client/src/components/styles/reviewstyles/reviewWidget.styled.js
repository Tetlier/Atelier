import styled from 'styled-components';

export const Grid = styled.div`
width: 100%;
height: 100%;
display: flex;
margin: auto;
display: flex;
flex-wrap: wrap;
padding-bottom: 2em;
border-bottom: 1px #ccc solid;
`;

export const Meta = styled.div`
min-width: 30%
`;

export const ReviewArea = styled.div`
min-width: 65%;
`;

export const Scroll = styled.div`
  max-height: 600px;
  overflow-y: auto;
  max-width: 100%;
  overflow-x: auto;
`;

export const Search = styled.div`
  padding: 10px 5px 10px 5px;
`;

export const Searchbar = styled.input`
padding: 5px;
height: 45px;
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

background: #e2e2e2;
box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
color: #000;

&:hover {
  opacity: 0.9;
  transform: scale(0.98);
  background: #7c7c7c;
}`;

export const ButtonPosition = styled.div`
float: right;
`;