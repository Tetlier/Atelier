
import { StyledStyleSelector } from '../styles/Overview/StyleSelector.styled';
import Cart from './Cart';

const StyleSelector = () => {
  return (
    <StyledStyleSelector>
      <div className='product-price'>
        <p className='last-price'>Old Price: <span>$275</span></p>
        <p className='new-price'>New Price: <span>$175</span></p>
      </div>
      <h1>Style : SELECTED STYLE</h1>
      <h1>o   o   o   o</h1>
      <h1>o   o   o   o</h1>
      <Cart/>
    </StyledStyleSelector>
  );
};

export default StyleSelector;