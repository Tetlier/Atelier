import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Overview = ({currentProductId}) => {
  const [currentProduct, setCurrentProduct] = useState({});
  console.log('currentProduct ', currentProduct);
  useEffect(() => {
    axios.get('/product', {productId: 40344})
      .then((response => {
        setCurrentProduct(response.data);
        console.log('API called');
      }));
  }, []);


  return (
    Object.keys(currentProduct).length !== 0 &&
    <div>
      <div>name: {currentProduct.name}</div>
      <br/>
      <div>category: {currentProduct.category}</div>
      <br/>
      <div>description: {currentProduct.description}</div>
      <br/>
      <div>default_price: {currentProduct.default_price}</div>
      <br/>
      <div>slogan: {currentProduct.slogan}</div>
      <br/>
      <ul>
        {
          currentProduct.features.map((item, i) => {
            return (<li key={i}>feature: {item.feature},  value: {item.value} </li>);
          })
        }
      </ul>
      <div>features: {currentProduct.features[0].feature}</div>
      <br/>
    </div>
  );
};

export default Overview;