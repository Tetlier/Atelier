import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

  * {
    font-family: 'Finlandica', sans-serif;
  }

  body {
    background: ${({theme}) => theme.colors.body};
  }

  header {
    background: ${({theme}) => theme.colors.header};
  }

`;

export default GlobalStyles;