import { StyledCart } from '../styles/Overview/Cart.styled';
import { Button } from '../styles/Button.styled';
import { LargeButton } from '../styles/Q-A/InlineButton.styled.js';
import { useState, useRef } from 'react';
import {CustomSelect} from '../styles/Overview/Cart.styled.js';
import axios from 'axios';

const Cart = ({selectedStyle, skuChange, selectedSizeQuantity, selectedSku, selectedQuantity, quantityChange, skuAlert, skuAlertChange}) => {

  const skuSelectRef = useRef(null);

  let handleSkuChange = (event) => {
    event.preventDefault();
    let sku = event.target.value;
    skuChange(sku);
  };

  let handleQuantityChange = (event) => {
    event.preventDefault();
    quantityChange(event.target.value);
  };

  let handleAddToCart = (event) => {
    event.preventDefault();
    if (selectedSku === 'default') {
      skuAlertChange(true);
      skuSelectRef.current.focus();
    } else {
      for (let i = 0; i < selectedStyle.skusArr.length; i++) {
        var sku = selectedStyle.skusArr[i];
        if (sku[1].size === selectedSku) {
          let config = {
            data: {
              'sku_id': sku[0]
            }
          };
          axios.post('/cart', config)
            .then(() => {
              alert('Added to cart');
            })
            .catch((err) => {
              alert('Add to cart failed');
            });
        }
      }
    }
  };

  return (
    <div>
      <h4 style={{color: 'red', visibility: skuAlert ? 'visible' : 'hidden'}}>Please select size</h4>
      <StyledCart>
        <CustomSelect value={selectedSku} onChange={(event) => handleSkuChange(event)} ref={skuSelectRef}>
          {
            selectedStyle.skusArr.length === 1 ?
              <option key={0} value={'default'} disabled>OUT OF STOCK</option> :
              selectedStyle.skusArr.map((sku, i) => {
                return (
                  i === 0 ? <option key={i} value={'default'} disabled>{sku[1].size}</option> :
                    sku[1].quantity > 0 &&
                  <option key={i} value={sku[1].size}>{sku[1].size}</option>
                );
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
        <LargeButton
          style={{visibility: selectedStyle.skusArr.length === 1 ? 'hidden' : 'visible'}}
          onClick={(event) => handleAddToCart(event)}
        >
          Add to Cart
        </LargeButton>
        <LargeButton>★</LargeButton>
      </StyledCart>
    </div>
  );
};

export default Cart;