import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Reviews from './Reviews/Reviews.jsx';
import QA from './Q-A/QA.jsx';

import styled from 'styled-components';
import {Container} from './styles/Container.styled.js';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/Global.js';
import {Button} from './styles/Button.styled.js';
import StarReview from './styles/StarReview.styled.js';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 40344,
      productList: [],
      reviewList: [], // reviews for current product
      questionList: [] // questions & answers for current product
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    axios.get('/products')
      .then(response => {
        this.setState({ productList: response.data }, () => {
          console.log('products: ', this.state.productList);
          return this.state.productList;
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }

  getProducts2() {
    return axios.get('http://localhost:3000/products');
  }

  sum(a, b) {
    return a + b;
  }

  componentDidMount() {
    this.getProducts();
  }

  //first div should be the current item and its details
  //second div should be the rest of the products (related products) -if have enough time
  //third div should be questions and answers
  //fourth div should be reviews

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
          <Container>
            <h1>Welcome to Atelier!</h1>
            <StarReview rating='3.75'/>
            <div> <input type = 'radio'></input></div>
            <Button>Normal</Button>
            <div><Reviews id = '40344'/></div>
            <div><QA productId={this.state.currentProductId}/></div>
          </Container>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
