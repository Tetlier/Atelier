import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from './Product.jsx';
import { QAContainer, QAChild } from '../styles/Q-A/QAContainer.styled';
import { OtherProductsList } from '../styles/OtherProducts.styled';

export default function ProductSelection ({currentProductId, setCurrentId}) {
  // array of objects containing productInfo and styles for each product
  const [productList, setProductList] = useState([]);
  // index of currentProduct in productList
  const [indexOfProduct, setIndex] = useState(0);

  // should only get the productList once
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].productInfo.id === currentProductId) {
        setIndex(i);
      }
    }
  }, [currentProductId]);

  // gets product info and styles of all products
  const getProducts = function() {
    axios.get('/products')
      .then(response => {
        let resultList = response.data;
        return Promise.all(resultList.map((product, index) => {
          if (product.id === currentProductId) {
            setIndex(index);
          }
          return axios.get(`product/${product.id}`)
            .then((response) => {
              return {
                productInfo: response.data.productInfo,
                styles: response.data.styleInfo
              };
            })
            .catch((err) => {
              console.log('Error getting product info: ', err);
              return err;
            });
        }));
      })
      .catch((err) => {
        console.log('Error retrieving products: ', err);
      })
      .then((allProducts) => {
        setProductList(allProducts);
      });
  };

  return (
    <div>
      <QAContainer>
        <QAChild>
          <h2>Other Products</h2>
          <OtherProductsList>
            {productList &&
              productList.map((product, index) => {
                if (index !== indexOfProduct) {
                  return <Product
                    key={product.productInfo.id}
                    productInfo={product.productInfo}
                    styles={product.styles}
                    setCurrentId={setCurrentId}
                  />;
                } else {
                  return null;
                }
              })
            }
          </OtherProductsList>
        </QAChild>
      </QAContainer>
    </div>
  );
}
