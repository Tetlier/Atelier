import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Reviews from './Reviews/Reviews.jsx';
// import QA from './Q-A/QA.jsx';

import styled from 'styled-components';
import {Container} from './styles/Container.styled.js';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/Global.js';
import {Button} from './styles/Button.styled.js';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff'
  }
};

class App extends React.Component {
  // Austin Test
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: null,
      productList: [],
      reviewList: [], // reviews for current product
      questionList: [] // questions & answers for current product
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    axios.get('/products')
      .then(response => this.setState({ productList: response.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    // this.getProducts();
  }

  // `
  //first div should be the current item and its details
  //second div should be the rest of the products (related products) -if have enough time
  //third div should be questions and answers
  //fourth div should be reviews
  // newly inserted comment
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
          <Container>
            <h1>Welcome to Atelier!</h1>
            <Button>Normal</Button>
            <div><Reviews id = '40344'/></div>
          </Container>
        </>
      </ThemeProvider>
    );
  }
}

export default App;


/**
 * common styled component:
 *  1. Button
 *  2. font type = Finlandica
 *  3. color
 *  4.
 */
