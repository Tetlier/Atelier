import React, { useState, useEffect } from 'react';
import { ThumbNail, FullSize, ImageGallery } from '../styles/reviewstyles/imageStyles.styled.js';
import { FormModal, FormModalBackground, Star, Title, FormGrid, FormRow, FormCol, ReviewInput, SummaryInput } from '../styles/reviewstyles/formStyles.styled.js';
import axios from 'axios';

import StyleRating from './StyleRating.jsx';
import StarRating from './StarRating.jsx';
import { SmallButton } from '../styles/reviewstyles/metaReviewStyles.styled';

const Form = ({ closeForm, form, metaReview, currentProductId, productName }) => {
  //form values
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [photoArray, setPhotoArray] = useState([]);
  //star rating values
  const [starRating, setStarRating] = useState(null);
  //style rating values
  const [charRating, setCharRating] = useState({});
  //form validator hook
  const [formValid, setFormValid] = useState(false);

  //universal input handler
  let handleChange = (event, setState) => {
    setState(event.target.value);
  };

  //adds generated URL image into photoArray
  let addImage = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setPhotoArray([...photoArray, reader.result]);
    };
  };

  //upload photos to cloudinary and get the link
  let convertCloudinary = () => {
    return Promise.all(photoArray.map((photo) => {
      return axios.post('/cloudinary', { img: photo })
        .then((photoURL) => {
          return photoURL.data;
        })
        .catch((err) => console.log(err));
    }))
      .then((photoURLs) => {
        return new Promise((resolve, reject) => {
          if (!photoURLs) {
            reject(photoURLs);
          } else {
            resolve(photoURLs);
          }
        });
      })
      .then((photoURLs) => {
        return photoURLs;
      });
  };

  //upload results to server
  let submitResults = (photoURLs) => {
    console.log('received', photoURLs);
    axios.post('/reviews', {
      // eslint-disable-next-line camelcase
      product_id: parseInt(currentProductId),
      rating: starRating,
      summary: summary,
      body: review,
      name: name,
      email: email,
      photos: photoURLs,
      recommended: recommend,
      characteristics: charRating
    }).then(()=>console.log('posted'))
      .catch(err => console.log(err));
  };

  //submits form to server
  // eslint-disable-next-line camelcase
  let handleSubmit = async (event) => {
    event.preventDefault();

    if (review.length < 50) {
      alert('The review length must be greater than 50 characters.');
    } else {
      closeForm(true);
      convertCloudinary()
        .then((photoURLs) => submitResults(photoURLs))
        .catch(err => console.log(err));
    }
  };


  return (form ?
    <FormModalBackground onSubmit={(event) => handleSubmit(event)}>
      <FormModal>
        <Title><h2 data-testid='form'>Write Your Review about the {productName}</h2> </Title>
        <FormGrid>
          <FormRow>
            <div>Summary<sup><font color="#ff0000">*</font></sup></div>
            <SummaryInput
              type="text"
              maxLength={60}
              id='summary'
              value={summary}
              onChange={event => handleChange(event, setSummary)}
              required />

            <div>Review<sup><font color="#ff0000">*</font></sup><div>
              <ReviewInput
                id='review'
                value={review}
                onChange={event => handleChange(event, setReview)}
                placeHolder='What did you like or dislike about this product?'
                name='review'
                minLength='50'
                maxLength='1000'
                required />
            </div> {review.length < 50 ? `${review.length}/50 characters` : 'Minimum reached'}</div>

            <div>Name<sup><font color="#ff0000">*</font></sup>:&nbsp;<input
              type='name'
              id='name'
              value={name}
              onChange={event => handleChange(event, setName)}
              required></input>
            </div>
            <div>For privacy reasons, do not use your full name or email address</div>

            <div>Email<sup><font color="#ff0000">*</font></sup>:&nbsp;<input
              type='email'
              id='email'
              value={email}
              onChange={event => handleChange(event, setEmail)}
              required></input>
            <div>For authentication reasons, you will not be emailed</div></div>

            <div>Attach up to 5 images &nbsp;
              {photoArray.length < 5 ?
                <input
                  id='file'
                  type='file'
                  accept='image/png, image/jpeg'
                  onChange={event => addImage(event)} />
                : '5 images already input'}
            </div>
            <ImageGallery>{[...photoArray].map(photo => <label><ThumbNail src={photo} /></label>)}</ImageGallery>
          </FormRow>


          <FormRow>
            <StarRating starRating={starRating} setStarRating={setStarRating} />
            <StyleRating metaReview={metaReview} setCharRating={setCharRating} charRating={charRating} />

            <div>
              <div>Would you recommend this product?<sup><font color="#ff0000">*</font></sup></div>
              <label>Yes <input id='yes' name='selectOne' type='radio' onClick={() => setRecommend(true)} required></input></label>
              <label>No <input id='no' name='selectOne' type='radio' onClick={() => setRecommend(false)}></input></label>
            </div>
            <SmallButton type='submit'>Submit Review</SmallButton> &nbsp;
            <SmallButton onClick={() => closeForm(true)}> Cancel</SmallButton>
          </FormRow>
        </FormGrid>
      </FormModal>
    </FormModalBackground> : null
  );
};

export default Form;