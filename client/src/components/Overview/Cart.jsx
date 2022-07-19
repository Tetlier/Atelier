import { StyledCart } from '../styles/Overview/Cart.styled';
import { Button } from '../styles/Button.styled';
import { LargeButton } from '../styles/Q-A/InlineButton.styled.js';
import { useState } from 'react';
import {CustomSelect} from '../styles/Overview/Cart.styled.js';

const Cart = ({selectedStyle, skuChange, selectedSizeQuantity}) => {
  // https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option
  // https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react
  // https://stackoverflow.com/questions/43495696/how-to-set-a-default-value-in-react-select
  // const [selectedSizeQuantity, setSelectedSizeQuantity] = useState([]);

  let handleChange = (event) => {
    // https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs 13 up votes one
    let index = event.target.value;
    // https://stackoverflow.com/questions/30306486/get-selected-option-text-using-react-js
    let text = event.nativeEvent.target[index].text;
    skuChange(text);
  };

  return (
    <StyledCart>
      <CustomSelect defaultValue={0} onChange={handleChange}>
        {
          // TODO: FIX THE LOGIC, right now, change style won't change the sku selected, need to set sku to default
          // after style changed.
          selectedStyle.skusArr.length === 1 ?
            <option key={0} value={0} disabled selected>OUT OF STOCK</option> :
            selectedStyle.skusArr.map((sku, i) => {
              console.log('selectedStyle changed', selectedStyle);
              // return ( i === Object.values(selectedStyle.skus).length - 1 ?
              //   <option key={i} value={Object.values(selectedStyle.skus).length - 1} disabled selected>{sku.size}</option> :
              //   sku.quantity > 0 &&
              //   <option key={i} value={i}>{sku.size}</option>
              // );
              return (
                i === 0 ? <option key={i} value={i} selected disabled>{sku[1].size}</option> :
                sku[1].quantity > 0 &&
                <option key={i} value={i}>{sku[1].size}</option>
              )
            })
        }
      </CustomSelect>
      <CustomSelect>
        {
          selectedSizeQuantity.length === 0 ?
          <option key={0} value={0} disabled selected>-</option> :
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