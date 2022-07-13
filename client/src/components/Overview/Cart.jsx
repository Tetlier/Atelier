import { StyledCart } from '../styles/Overview/Cart.styled';
import { Button } from '../styles/Button.styled';
import { useState } from 'react';

const Cart = ({selectedStyle}) => {
  // https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option
  // https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react
  // https://stackoverflow.com/questions/43495696/how-to-set-a-default-value-in-react-select
  const [selectedSizeQuantity, setSelectedSizeQuantity] = useState([]);

  let handleChange = (event) => {
    // https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs 13 up votes one
    let index = event.target.value;
    // https://stackoverflow.com/questions/30306486/get-selected-option-text-using-react-js
    let text = event.nativeEvent.target[index].text;
    console.log('selectedSize :::::: ', index);
    console.log('text :::::: ', text);
    for (const [key, value] of Object.entries(selectedStyle.skus)) {
      if (value.size === text) {
        var quantityArr = [];
        for (let i = 0; i < value.quantity + 1; i++) {
          quantityArr.push({key: i});
        }
      }
    }
    console.log(quantityArr);
    setSelectedSizeQuantity(quantityArr);
  };

  return (
    <StyledCart>
      <div className="custom-select" style={{'width': '200px'}} >
        <select defaultValue={{label: 'SELECT SIZE:', value: 0}} onChange={handleChange}>
          {
            Object.values(selectedStyle.skus).map((sku, i) => {
              return ( sku.quantity > 0 &&
                <option value={i}>{sku.size}</option>
              );
            })
          }
        </select>
      </div>
      <div className="custom-select" style={{'width': '200px'}}>
        <select defaultValue={{label: 'SELECT QUANTITY:', value: 0}}>
          {
            selectedSizeQuantity.map(item => {
              return <option value={item.key}>{item.key}</option>;
            })
          }
        </select>
      </div>
      <Button>Add to Cart</Button>
      <Button>★</Button>
    </StyledCart>
  );
};

export default Cart;