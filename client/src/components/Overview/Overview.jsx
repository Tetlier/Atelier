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
      <OverviewContainer>
        {/* left panel */}
        {/* https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
            https://dev.to/rakumairu/how-to-show-multiple-item-in-simple-react-carousel-32dd
        */}
        {/* <ImageSelect className='imageSelect'>
          {
            currentProductStyle.results[selectedStyleIndex].photos.map((photo, i) => {
              return ( (i === 0 || i === 1 || i === 2) &&
                // https://reactjs.org/warnings/special-props.html
                <ImageItem key={i} src={photo.thumbnail_url} alt = 'shoe image'/>
              );
            })
          }
        </ImageSelect> */}
        <ImageCarousel
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


        {/* right panel */}
        <ProductContent className='productContent'>
          {/* TODO: Link Read all review to review */}
          <h3 style={{'textDecoration': 'underline'}}><StarReview rating={currentProductRating} /> Read all reviews </h3>
          <br/>
          <h2 className='product-category'>Category : {currentProduct.category}</h2>
          <h1 className='product-title'>Name : {currentProduct.name}</h1>
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