import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ImageShowcase from './ImageShowcase';
import ImageItem from './ImageItem';
import StyleSelector from './StyleSelector';
import ProductDetail from './ProductDetail';
import { OverviewContainer } from '../styles/Overview/OverviewContainer.styled';
import { Panel } from '../styles/Overview/Panel.styled';
import { ImageGallery } from '../styles/Overview/ImageGallery.styled';
import { ProductContent } from '../styles/Overview/ProductContent.styled';
import ProductFeatures from './ProductFeatures';
import ImageCarousel from './ImageCarousel';
import StarReview from '../styles/StarReview.styled';

const Overview = ({currentProductId, currentProductRating}) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductStyle, setCurrentProductStyle] = useState({});
  const [selectedStyleIndex, setSelectedStyleIndex] = useState(0);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [selectedSizeQuantity, setSelectedSizeQuantity] = useState([]);
  useEffect(() => {
    axios.get(`/product/${currentProductId}`)
      .then((response => {
        // TODO: this is a test, to test sku select in cart shows out of stock, need to delete once done.
        var styles = response.data.styleInfo;
        styles.results[0].skus = {};
        styles.results[1]['sale_price'] = 50;
        styles.results[1]['original_price'] = 777;
        styles.results[2]['original_price'] = 888;
        styles.results[3]['original_price'] = 999;
        for (let i = 0; i < styles.results.length; i++) {
          // styles.results[i].skus.unshift({size: 'Select Size'});
          // styles.results[i].skus = {'000001': {quantity: 1, size: 'SELECT SIZE'}, ...styles.results[i].skus};
          styles.results[i].skusArr = Object.entries(styles.results[i].skus);
          styles.results[i].skusArr.unshift(['000001', {quantity: 0, size: 'SELECT SIZE'}]);
          console.log(':::: ', styles.results[i].skusArr);
        }
        setCurrentProduct(response.data.productInfo);
        setCurrentProductStyle(styles);
      }));
  }, []);

  // https://stackoverflow.com/questions/64191896/usestate-in-useeffect-does-not-update-state
  useEffect(() => {
  }, [currentProductStyle]);

  // https://stackoverflow.com/questions/55726886/react-hook-send-data-from-child-to-parent-component
  const handleStyleChange = (key) => {
    setSelectedStyleIndex(key);
    setSelectedSizeQuantity([]);
  };

  const handleThumbnailChange = (key) => {
    setSelectedThumbnailIndex(key);
  };

  const handleSkuChange = (text) => {
    // console.log('called ', text);
    // console.log('currentProductStyle.skus ', currentProductStyle.results[selectedStyleIndex].skus);
    for (const [key, value] of Object.entries(currentProductStyle.results[selectedStyleIndex].skus)) {
      if (value.size === text) {
        var quantityArr = [];
        for (let i = 0; i < value.quantity; i++) {
          quantityArr.push({key: i + 1});
        }
      }
    }
    setSelectedSizeQuantity(quantityArr);
  };


  return (
    Object.keys(currentProduct).length !== 0
    && Object.keys(currentProductStyle).length !== 0
    &&
    <div>
      {/* upper panel */}
      <OverviewContainer>
        <ImageCarousel
          className='imageCarousel'
          productStyle={currentProductStyle.results[selectedStyleIndex]}
          thumbnailChange={handleThumbnailChange}
          selectedThumbnailIndex={selectedThumbnailIndex}
        />

        <ImageGallery className='imageGallery'>
          <ImageShowcase
            productStyle={currentProductStyle.results[selectedStyleIndex]}
            thumbnailChange={handleThumbnailChange}
            selectedThumbnailIndex={selectedThumbnailIndex}
          />
        </ImageGallery>

        <ProductContent className='productContent'>
          {/* TODO: Link Read all review to review */}
          <h4 ><StarReview rating={currentProductRating} /> <span style={{'textDecoration': 'underline'}}>Read all reviews </span></h4>
          <h2 className='product-category'>{currentProduct.category}</h2>
          <h1 className='product-title'>{currentProduct.name}</h1>
          <StyleSelector
            productStyle={currentProductStyle}
            styleChange={handleStyleChange}
            skuChange={handleSkuChange}
            selectedStyleIndex={selectedStyleIndex}
            selectedSizeQuantity={selectedSizeQuantity}/>
        </ProductContent>
      </OverviewContainer>

      {/* down panel */}
      <ProductDetail className='productDetail'
        description={currentProduct.description} slogan={currentProduct.slogan} features={currentProduct.features}/>
    </div>
  );
};

export default Overview;
