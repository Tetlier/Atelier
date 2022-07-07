import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class App extends React.Component {
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
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products')
      .then(response => this.setState({ productList: response.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  //first div should be the current item and its details
  //second div should be the rest of the products
  //third div should be questions and answers
  //fourth div should be reviews

  render() {
    return (
      <div></div>
    );
  }
}

export default App;