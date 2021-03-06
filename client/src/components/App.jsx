import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './Reviews/Reviews.jsx';
import QA from './Q-A/QA.jsx';
import styled from 'styled-components';
import { Container } from './styles/Container.styled.js';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global.js';
import { Button, SideButton } from './styles/Button.styled.js';
import Overview from './Overview/Overview';
import StarReview from './styles/StarReview.styled.js';
import ProductSelection from './Product Selection/ProductSelection';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';
import logo from '../../../TetlierLogo.png';
import { Header } from './styles/Header.styled';

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

const ThemeSetter = styled.div`
  color: ${props => props.theme.fontColor}
`;

export default function App({ sessionCookie, addToCookie }) {
  const [currentProductId, setCurrentId] = useState(40344);
  const [currentProductRating, setRating] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
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

  const getAverageRating = function (id) {
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

  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <ThemeSetter>
          <GlobalStyles />
          <Header>
            <img src={logo} alt='logo'/>
            <div>
              {darkMode ? <SideButton onClick={() => { setDarkMode(!darkMode); }}><BsFillMoonFill /></SideButton> :
                <SideButton onClick={() => { setDarkMode(!darkMode); }}><BsSun/></SideButton>}</div>
          </Header>
          <Container>
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
            <QA
              productId={currentProductId}
              sessionCookie={sessionCookie}
              addToCookie={addToCookie}
              productName={productName}
            />
          </Container>
        </ThemeSetter>
      </ThemeProvider>
    </div>
  );
}
