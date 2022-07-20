
import { StyledStyleSelector } from '../styles/Overview/StyleSelector.styled';
import Cart from './Cart';
import { StyleGrid, StyleGridItem } from '../styles/Overview/StyleGrid.styled';
import { useState } from 'react';

<<<<<<< HEAD
const StyleSelector = ({productStyle, styleChange, skuChange, selectedStyleIndex, selectedSizeQuantity}) => {
=======
const StyleSelector = ({productStyle, styleChange, skuChange, selectedStyleIndex, selectedSizeQuantity, selectedSku, selectedQuantity, quantityChange, skuAlert, skuAlertChange}) => {
>>>>>>> main
  const [selectedStyle, setSelectedStyle] = useState(productStyle.results[0]);

  return (
    <StyledStyleSelector>
      <div className='product-price'>
<<<<<<< HEAD
      {
        productStyle.results[selectedStyleIndex]['sale_price'] !== null
        &&
        <h3 className='new-price'>
          Sell Price: <span style={{color: 'red'}}>${productStyle.results[selectedStyleIndex]['sale_price']}</span>
        </h3>
      }
      <h3 className='last-price'>
        Price:
        <span style={{'textDecoration' : productStyle.results[selectedStyleIndex]['sale_price'] !== null ? 'line-through' : 'none'}}>
          ${productStyle.results[selectedStyleIndex]['original_price']}
        </span>
      </h3>
=======
        {
          productStyle.results[selectedStyleIndex]['sale_price'] !== null
          &&
          <h3 className='new-price'>
            Sell Price: <span style={{color: 'red'}}>${productStyle.results[selectedStyleIndex]['sale_price']}</span>
          </h3>
        }
        <h3 className='last-price'>
          Price:
          <span style={{'textDecoration': productStyle.results[selectedStyleIndex]['sale_price'] !== null ? 'line-through' : 'none'}}>
            ${productStyle.results[selectedStyleIndex]['original_price']}
          </span>
        </h3>
>>>>>>> main
      </div>
      <h3>Style &gt; {productStyle.results[selectedStyleIndex].name}</h3>
      <br/>
      <StyleGrid>
        {
          productStyle.results.map((style, i) => {
            return (
<<<<<<< HEAD
              <StyleGridItem key={i} src={style.photos[0].thumbnail_url}
                alt = 'shoe image'
                // https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
                onClick = {() => styleChange(i)}
=======
              <StyleGridItem
                key={i}
                className={`${selectedStyleIndex === i ? 'active' : ''}`}
                src={style.photos[0].thumbnail_url}
                alt = 'shoe image'
                // https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
                onClick = {(event) => styleChange(event, i)}
>>>>>>> main
              />
            );
          })
        }
      </StyleGrid>
      <br/>
      <Cart
<<<<<<< HEAD
      selectedStyle={productStyle.results[selectedStyleIndex]}
      skuChange={skuChange}
      selectedSizeQuantity={selectedSizeQuantity}/>
=======
        selectedStyle={productStyle.results[selectedStyleIndex]}
        skuChange={skuChange}
        selectedSizeQuantity={selectedSizeQuantity}
        selectedSku={selectedSku}
        selectedQuantity={selectedQuantity}
        quantityChange={quantityChange}
        skuAlert={skuAlert}
        skuAlertChange={skuAlertChange}/>
>>>>>>> main
    </StyledStyleSelector>
  );
};

export default StyleSelector;