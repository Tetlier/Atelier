import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './Reviews/Reviews.jsx';
import QA from './Q-A/QA.jsx';
import styled from 'styled-components';
import { Container } from './styles/Container.styled.js';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global.js';
import { Button } from './styles/Button.styled.js';
import Overview from './Overview/Overview';
import StarReview from './styles/StarReview.styled.js';
import ProductSelection from './Product Selection/ProductSelection';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff'
  },
  fontColor: '#000000'
};

const darkTheme = {
  colors: {
    header: '#fff',
    body: '#343434',
  },
  fontColor: '#dfe3de'
};

<<<<<<< HEAD
const ThemeSetter = styled.div`
color : ${props => props.theme.fontColor}
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 40344,
      currentProductRating: 0,
      currentProductName: '',
      darkMode: true,
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
=======
export default function App ({sessionCookie, addToCookie}) {
  const [currentProductId, setCurrentId] = useState(40344);
  const [currentProductRating, setRating] = useState(0);
  const [productName, setProductName] = useState('Camo Onesie');
>>>>>>> main

  useEffect(() => {
    getAverageRating(currentProductId);
    // get product name
    axios.get(`/product/${currentProductId}`)
      .then((res) => {
        setProductName(res.data.productInfo.name);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }, [currentProductId]);

  const getAverageRating = function(id) {
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
        setRating(avg);
      }
      )
      .catch(err => console.log(err));
<<<<<<< HEAD
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
=======
  };
>>>>>>> main

  //first div should be the current item and its details
  //second div should be the rest of the products (related products) -if have enough time
  //third div should be questions and answers
  //fourth div should be reviews

<<<<<<< HEAD
  render() {
    return (
      <ThemeProvider theme= {this.state.darkMode ? darkTheme : theme}>
        <ThemeSetter>
          <GlobalStyles />
          <Container>
            <h1>Welcome to Atelier!</h1>
            <Overview
              currentProductId={this.state.currentProductId}
              currentProductRating={this.state.currentProductRating} />
            <div><Reviews currentProductId='40344' currentProductRating={this.state.currentProductRating} /></div>
            <br />
            <div><QA productId={this.state.currentProductId}
              sessionCookie={this.state.sessionCookie} addToCookie={this.addToCookie} />
            </div>
=======
  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
          <Container>
            <h1>Welcome to Atelier!</h1>
            <Overview
              currentProductId={currentProductId}
              currentProductRating={currentProductRating} />
            <ProductSelection
              currentProductId={currentProductId}
              setCurrentId={setCurrentId}
            />
            <Reviews
              currentProductId={currentProductId}
              currentProductRating={currentProductRating}
              productName={productName}
            />
            <br/>
            <QA
              productId={currentProductId}
              sessionCookie={sessionCookie}
              addToCookie={addToCookie}
              productName={productName}
            />
>>>>>>> main
          </Container>
        </ThemeSetter>
      </ThemeProvider>
    </div>
  );
}
