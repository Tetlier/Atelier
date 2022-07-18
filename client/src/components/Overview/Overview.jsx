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
  useEffect(() => {
    axios.get('/product', {productId: 40344})
      .then((response => {
        setCurrentProduct(response.data.productInfo);
        setCurrentProductStyle(response.data.styleInfo);
      }));
  }, []);

  // https://stackoverflow.com/questions/64191896/usestate-in-useeffect-does-not-update-state
  useEffect(() => {
  }, [currentProductStyle]);

  // https://stackoverflow.com/questions/55726886/react-hook-send-data-from-child-to-parent-component
  const handleStlyeChange = (key) => {
    setSelectedStyleIndex(key);
  };

  const handleThumbnailChange = (key) => {
    setSelectedThumbnailIndex(key);
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
            stlyeChange={handleStlyeChange}
            selectedStyleIndex={selectedStyleIndex}/>
        </ProductContent>
      </OverviewContainer>

      {/* down panel */}
      <ProductDetail className='productDetail'
        description={currentProduct.description} slogan={currentProduct.slogan} features={currentProduct.features}/>
    </div>
  );
};

export default Overview;
