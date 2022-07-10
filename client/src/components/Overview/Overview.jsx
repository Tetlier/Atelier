import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Overview = ({currentProductId}) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductStyle, setCurrentProductStyle] = useState({});
  console.log('currentProduct ', currentProduct);
  useEffect(() => {
    axios.get('/product', {productId: 40344})
      .then((response => {
        console.log(response.data);
        setCurrentProduct(response.data.productInfo);
        setCurrentProductStyle(response.data.styleInfo);
        console.log(response.data.styleInfo);
        console.log('API called');
      }));
  }, []);


  return (
    Object.keys(currentProduct).length !== 0
    && Object.keys(currentProductStyle).length !== 0
    &&
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
      <h1>Styles ::::::::::: </h1>
      <ul>
        {
          currentProductStyle.results.map((style, i) => {
            return (
              <li key={i}>
                default: {style.default},
                name: {style.name},
                original_price: {style.original_price},
                sale_price: {style.sale_price},
                style_id: {style.style_id},
                value: {style.value},
              </li>);
          })
        }
      </ul>
      <ul>
        {
          currentProductStyle.results[0].photos.map((photo, i) => {
            return (
              <li key={i}>
                thumbnail_url: {photo.thumbnail_url}
                <br/>
                url: {photo.url}
              </li>
            );
          })
        }
      </ul>
      <br/>
    </div>
  );
};

export default Overview;