
import { StyledStyleSelector } from '../styles/Overview/StyleSelector.styled';
import Cart from './Cart';
import { StyleGrid, StyleGridItem } from '../styles/Overview/StyleGrid.styled';
import { useState } from 'react';

const StyleSelector = ({productStyle, styleChange, skuChange, selectedStyleIndex, selectedSizeQuantity, selectedSku, selectedQuantity, quantityChange, skuAlert, skuAlertChange}) => {
  const [selectedStyle, setSelectedStyle] = useState(productStyle.results[0]);

  return (
    <StyledStyleSelector>
      <div className='product-price'>
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
      </div>
      <h3>Style &gt; {productStyle.results[selectedStyleIndex].name}</h3>
      <br/>
      <StyleGrid>
        {
          productStyle.results.map((style, i) => {
            return (
              <StyleGridItem
                key={i}
                className={`${selectedStyleIndex === i ? 'active' : ''}`}
                src={style.photos[0].thumbnail_url}
                alt = 'shoe image'
                // https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
                onClick = {(event) => styleChange(event, i)}
              />
            );
          })
        }
      </StyleGrid>
      <br/>
      <Cart
      selectedStyle={productStyle.results[selectedStyleIndex]}
      skuChange={skuChange}
      selectedSizeQuantity={selectedSizeQuantity}
      selectedSku={selectedSku}
      selectedQuantity={selectedQuantity}
      quantityChange={quantityChange}
      skuAlert={skuAlert}
      skuAlertChange={skuAlertChange}/>
    </StyledStyleSelector>
  );
};

export default StyleSelector;