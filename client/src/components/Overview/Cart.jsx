import { StyledCart } from '../styles/Overview/Cart.styled';
import { Button } from '../styles/Button.styled';
import { LargeButton } from '../styles/Q-A/InlineButton.styled.js';
import { useState } from 'react';
import {CustomSelect} from '../styles/Overview/Cart.styled.js';

const Cart = ({selectedStyle, skuChange, selectedSizeQuantity, selectedSku, selectedQuantity, quantityChange}) => {

  let handleSkuChange = (event) => {
    event.preventDefault();
    let sku = event.target.value;
    skuChange(sku);
  };

  let handleQuantityChange = (event) => {
    event.preventDefault();
    quantityChange(event.target.value);
  };

  return (
    <StyledCart>
      <CustomSelect value={selectedSku} onChange={(event) => handleSkuChange(event)}>
        {
          selectedStyle.skusArr.length === 1 ?
            <option key={0} value={'default'} disabled>OUT OF STOCK</option> :
            selectedStyle.skusArr.map((sku, i) => {
              return (
                i === 0 ? <option key={i} value={'default'} disabled>{sku[1].size}</option> :
                sku[1].quantity > 0 &&
                <option key={i} value={sku[1].size}>{sku[1].size}</option>
              )
            })
        }
      </CustomSelect>
      <CustomSelect value={selectedQuantity} onChange={(event) => handleQuantityChange(event)}>
        {
          selectedSizeQuantity.length === 0 ?
          <option key={0} value={0} disabled>-</option> :
          selectedSizeQuantity.map((item, i) => {
            return item.key <= 15 &&
            <option key={item.key} value={item.key}>{item.key}</option>;
          })
        }
      </CustomSelect>
      <LargeButton>Add to Cart</LargeButton>
      <LargeButton>★</LargeButton>
    </StyledCart>
  );
};

export default Cart;