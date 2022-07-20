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
  const [selectedSku, setSelectedSku] = useState('default');
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [skuAlert, setSkuAlert] = useState(false);
  useEffect(() => {
    axios.get(`/product/${currentProductId}`)
      .then((response => {
        var styles = response.data.styleInfo;
        for (let i = 0; i < styles.results.length; i++) {
          styles.results[i].skusArr = Object.entries(styles.results[i].skus);
          styles.results[i].skusArr.unshift(['000001', {quantity: 0, size: 'SELECT SIZE'}]);
        }
        setCurrentProduct(response.data.productInfo);
        setCurrentProductStyle(styles);
      }));
  }, [currentProductId]);

  useEffect(() => {
  }, [currentProductStyle]);

  const handleStyleChange = (event, key) => {
    event.preventDefault();
    setSelectedStyleIndex(key);
    setSelectedSizeQuantity([]);
    setSelectedSku('default');
    setSelectedQuantity(0);
    setSkuAlert(false);
  };

  const handleThumbnailChange = (key) => {
    setSelectedThumbnailIndex(key);
  };

  const handleSkuChange = (text) => {
    setSelectedSku(text);
    setSkuAlert(false);
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

  const handleQuantityChange = (text) => {
    setSkuAlert(false);
    setSelectedQuantity(text);
  };

  const handleSkuAlertChange = (value) => {
    setSkuAlert(value);
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
          <h4 ><StarReview rating={currentProductRating} /> <a href={'#review'} style={{'textDecoration': 'underline'}}>Read all reviews </a></h4>
          <h2 className='product-category'>{currentProduct.category}</h2>
          <h1 className='product-title'>{currentProduct.name}</h1>
          <StyleSelector
            productStyle={currentProductStyle}
            styleChange={handleStyleChange}
            skuChange={handleSkuChange}
            selectedStyleIndex={selectedStyleIndex}
            selectedSizeQuantity={selectedSizeQuantity}
            selectedSku={selectedSku}
            selectedQuantity={selectedQuantity}
            quantityChange={handleQuantityChange}
            skuAlert={skuAlert}
            skuAlertChange={handleSkuAlertChange}
          />
        </ProductContent>
      </OverviewContainer>

      {/* down panel */}
      <ProductDetail className='productDetail'
        description={currentProduct.description} slogan={currentProduct.slogan} features={currentProduct.features}/>
    </div>
  );
};

export default Overview;
