import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Finlandica', sans-serif;
  }

  body {
    line-height: 1.5;
    background: ${({theme}) => theme.colors.body};
  }

  header {
    background: ${({theme}) => theme.colors.header};
  }

  img{
    width: 100%
    display: block;
  }

`;

export default GlobalStyles;