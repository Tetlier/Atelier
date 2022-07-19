import styled from 'styled-components';

export const ThumbNail = styled.img`

width: 50px;
height: 50px;
border: 1px solid #ddd;
border-radius: 4px;
padding: 5px;
object-fit: cover
&:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
`;

export const FullSize = styled.img`
width: 800px;
height: 500px;
padding: 5px;

&:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
`;

export const ImageGallery = styled.div`
display: inline-block;
`;

export const VerySmallButton = styled.button`
align-items: center;
padding: 3px 7px;
border-radius: 3px;
border: none;
cursor: pointer;
margin-left: 0.25em;

background: #6E6D70;
box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
color: #DFDEDF;

&:hover {
  opacity: 0.9;
  transform: scale(0.98);
  background: #000;
}
`;