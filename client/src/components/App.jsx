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
import Overview from './Overview/Overview';
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
      currentProductRating: 0,
      sessionCookie: {
        's_id': document.cookie.slice(5),
        actions: []
      }
    };
    this.getProducts = this.getProducts.bind(this);
    this.addToCookie = this.addToCookie.bind(this);
  }

  getProducts() {
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.setState({ productList: response.data }, () => {
          return this.state.productList;
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAverageRating(id) {
    axios.get('/meta', { params: { id: id } })
      .then(results => {
        let avg = 0;
        let ratingsum = 0;
        let total = 0;
        let ratingvals = Object.keys(results.data.ratings);
        let ratingamounts = Object.values(results.data.ratings);

        //looping through ratings and obtaining the sums/totals
        for (let i = 0; i < ratingvals.length; i++) {
          ratingsum += (ratingvals[i] * ratingamounts[i]);
          total += parseInt(ratingamounts[i]);
        }

        //Rounding down and converting to quarter percentages
        avg = Math.floor(ratingsum / total * 4) / 4;
        this.setState({ currentProductRating: avg });

        console.log('current Product Rating:', this.state.currentProductRating);

      }
      )
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getProducts();

    //below is a test. remove when testing complete
    this.getAverageRating(40344); // gives us 3.75
  }

  // takes in id (question or answer) and action (helpful or reported) to add to cookie
  addToCookie(id, action) {
    action = action.toLowerCase();
    // adds id number + h or r for helpful or reported
    this.state.sessionCookie.actions.push(id + action.slice(0, 1));
  }

  //first div should be the current item and its details
  //second div should be the rest of the products (related products) -if have enough time
  //third div should be questions and answers
  //fourth div should be reviews

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles/>
            <Container>
              <h1>Welcome to Atelier!</h1>
              <Overview currentProductId={this.state.currentProductId}></Overview>
              {/* <div> <input type = 'radio'></input></div>
              <Button>Normal</Button>
              <div><Reviews id = '40344'/></div> */}
              <StarReview rating='3.75'/>
              <div><Reviews currentProductId = '40344'currentProductRating = {this.state.currentProductRating}/></div>
              <div><QA productId={this.state.currentProductId}
                sessionCookie={this.state.sessionCookie} addToCookie={this.addToCookie}/>
              </div>
            </Container>
          </>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
