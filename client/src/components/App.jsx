import React, {useState, useEffect} from 'react';
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
import ProductSelection from './Product Selection/ProductSelection';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff'
  }
};

export default function App () {
  const [currentProductId, setCurrentId] = useState(40344);
  const [currentProductRating, setRating] = useState(0);
  let sessionCookie = {
    's_id': document.cookie.slice(5),
    actions: []
  };
  const [productName, setProductName] = useState('Camo Onesie');

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
  };

  // takes in id (question or answer) and action (helpful or reported) to add to cookie
  const addToCookie = function(id, action) {
    action = action.toLowerCase();
    // adds id number + h or r for helpful or reported
    sessionCookie.actions.push(id + action.slice(0, 1));
  };

  //first div should be the current item and its details
  //second div should be the rest of the products (related products) -if have enough time
  //third div should be questions and answers
  //fourth div should be reviews

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
          </Container>
        </>
      </ThemeProvider>
    </div>
  );
}
