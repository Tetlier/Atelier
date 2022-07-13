
import { StyledStyleSelector } from '../styles/Overview/StyleSelector.styled';
import Cart from './Cart';
import { StyleGrid } from '../styles/Overview/StyleGrid.styled';
import { StyleGridItem } from '../styles/Overview/StyleGridItem.styled';
import { useState } from 'react';

const StyleSelector = ({productStyle}) => {
  const [selectedStyle, setSelectedStyle] = useState(productStyle.results[0]);

  let handleClick = (key) => {
    setSelectedStyle(productStyle.results[key]);
  };

  return (
    <StyledStyleSelector>
      <div className='product-price'>
        <p className='last-price'>Price: <span>${selectedStyle['original_price']}</span></p>
        {selectedStyle['sale_price'] !== null && <p className='new-price'>Sell Price: <span>$175</span></p>}
      </div>
      <h1>Style : {selectedStyle.name}</h1>
      <StyleGrid>
        {
          productStyle.results.map((style, i) => {
            return (
              <img key={i} src={style.photos[0].thumbnail_url}
                alt = 'shoe image' className={i === 0 ? 'active' : ''}
                style = {{'border-radius': '50%', 'width': '120px', 'height': '120px'}}
                // https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
                onClick = {() => handleClick(i)}
              />
            );
          })
        }
      </StyleGrid>
      <br/>
      <Cart selectedStyle={selectedStyle}/>
    </StyledStyleSelector>
  );
};

export default StyleSelector;