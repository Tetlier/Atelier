
import { StyledStyleSelector } from '../styles/Overview/StyleSelector.styled';
import Cart from './Cart';
import { StyleGrid, StyleGridItem } from '../styles/Overview/StyleGrid.styled';
import { useState } from 'react';

const StyleSelector = ({productStyle, stlyeChange, selectedStyleIndex}) => {
  const [selectedStyle, setSelectedStyle] = useState(productStyle.results[0]);

  return (
    <StyledStyleSelector>
      <div className='product-price'>
        <p>productStyle.results[selectedStyleIndex] is  {productStyle.results[selectedStyleIndex].name}</p>
        <p className='last-price'>Price: <span>${productStyle.results[selectedStyleIndex]['original_price']}</span></p>
        {productStyle.results[selectedStyleIndex]['sale_price'] !== null && <p className='new-price'>Sell Price: <span>${productStyle.results[selectedStyleIndex]['sale_price']}</span></p>}
      </div>
      <h1>Style : {productStyle.results[selectedStyleIndex].name}</h1>
      <StyleGrid>
        {
          productStyle.results.map((style, i) => {
            return (
              <StyleGridItem key={i} src={style.photos[0].thumbnail_url}
                alt = 'shoe image'
                // https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
                onClick = {() => stlyeChange(i)}
              />
            );
          })
        }
      </StyleGrid>
      <br/>
      <Cart selectedStyle={productStyle.results[selectedStyleIndex]}/>
    </StyledStyleSelector>
  );
};

export default StyleSelector;