import React, {useState, useEffect} from 'react';
import { OtherProducts } from '../styles/OtherProducts.styled';

export default function Product ({productInfo, styles, setCurrentId}) {
  return (
    <OtherProducts onClick={() => { setCurrentId(productInfo.id); }}>
      <h4>{productInfo.name}</h4>
      <img src={styles.results[0].photos[0].url} loading="lazy"
        width="100px" height="100px" alt={productInfo.name === 'Bright Future Sunglasses' ? '😎' : `${productInfo.name} image`}
      />
    </OtherProducts>
  );
}
