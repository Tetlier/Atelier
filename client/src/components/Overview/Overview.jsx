import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ImageShowcase from './ImageShowcase';
import ImageItem from './ImageItem';
import StyleSelector from './StyleSelector';
import ProductDetail from './ProductDetail';
import { OverviewContainer } from '../styles/Overview/OverviewContainer.styled';
import { Panel } from '../styles/Overview/Panel.styled';
import { ImageGallery } from '../styles/Overview/ImageGallery.styled';
import { ImageSelect } from '../styles/Overview/ImageSelect.styled';
import { ProductContent } from '../styles/Overview/ProductContent.styled';

const Overview = ({currentProductId}) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductStyle, setCurrentProductStyle] = useState({});
  useEffect(() => {
    axios.get('/product', {productId: 40344})
      .then((response => {
        setCurrentProduct(response.data.productInfo);
        setCurrentProductStyle(response.data.styleInfo);
        console.log(response.data.productInfo);
        console.log(response.data.styleInfo);
        console.log('API called');
      }));
  }, []);


  return (
    Object.keys(currentProduct).length !== 0
    && Object.keys(currentProductStyle).length !== 0
    &&
    <div>
      <OverviewContainer>
        <Panel>
          {/* left panel */}
          <ImageGallery>
            <ImageShowcase productStyle={currentProductStyle} />
            <ImageSelect>
              {
                currentProductStyle.results[0].photos.map((photo, i) => {
                  return ( (i === 0 || i === 1 || i === 2) &&
                    <ImageItem key={i} src={photo.thumbnail_url} alt = 'shoe image'/>
                  );
                })
              }
            </ImageSelect>
          </ImageGallery>

          {/* right panel */}
          <ProductContent>
            {/* <Review></Review> will be added once review branch is merged */}
            <h2 className='product-category'>{currentProduct.category}</h2>
            <h1 className='product-title'>{currentProduct.name}</h1>
            <StyleSelector productStyle={currentProductStyle}/>
          </ProductContent>
        </Panel>
        {/* down panel */}
        <ProductDetail description={currentProduct.description} slogan={currentProduct.slogan} features={currentProduct.features} />
      </OverviewContainer>
    </div>
  );
};

export default Overview;


/**
 * <div>
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
 */