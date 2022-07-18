import React, { useState, useEffect } from 'react';
import { ThumbNail, FullSize, ImageGallery } from '../styles/reviewstyles/imageStyles.styled.js';
import { FormModal, FormModalBackground, Star, Title, FormGrid, FormRow, FormCol, ReviewInput, SummaryInput } from '../styles/reviewstyles/formStyles.styled.js';
import axios from 'axios';

import StyleRating from './StyleRating.jsx';
import StarRating from './StarRating.jsx';

const Form = ({ closeForm, form, metaReview, currentProductId, }) => {
  //form values
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [photoArray, setPhotoArray] = useState([]);
  const [convertedPhotos, setConvertedPhotos] = useState([]);
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
    if (photoArray) {
      photoArray.map(photo =>
        axios.post('/cloudinary', { img: photo })
          .then(results => setConvertedPhotos([...convertedPhotos, results.data]))
          // .then(results => { convertedPhotos.push(results.data); setConvertedPhotos(convertedPhotos); })
          .catch(err => console.log(err))
      );
    }
  };

  //upload results to server
  let submitResults = () => {
    console.log('this', convertedPhotos);
    axios.post('/reviews', {
      // eslint-disable-next-line camelcase
      product_id: parseInt(currentProductId),
      rating: starRating,
      summary: summary,
      body: review,
      name: name,
      email: email,
      photos: convertedPhotos,
      recommended: recommend,
      characteristics: charRating
    }).then(console.log('post success'))
      .catch(err => console.log(err));
  };

  //submits form to server
  // eslint-disable-next-line camelcase
  let handleSubmit = async (event) => {
    event.preventDefault();
    closeForm(true);
    await convertCloudinary();
    await submitResults();
  };



  return (form ?
    <FormModalBackground onSubmit={(event) => handleSubmit(event)}>
      <FormModal>
        <Title><h2 data-testid='form'>Write Your Review about the 'THIS PRODUCT NAME HERE'</h2> </Title>
        <FormGrid>
          <FormRow>
            <div>Summary</div>
            <SummaryInput
              type="text"
              maxLength={60}
              id='summary'
              value={summary}
              onChange={event => handleChange(event, setSummary)}
              required />

            <div>Review: <div>
              <ReviewInput
                minLength='50'
                maxLength='1000'
                id='review'
                value={review}
                onChange={event => handleChange(event, setReview)}
                placeHolder='What did you like or dislike about this product?'
                required />
            </div> {review.length < 50 ? `${review.length}/50 characters` : 'Minimum reached'}</div>

            <div>Name: <input
              type='name'
              id='name'
              value={name}
              onChange={event => handleChange(event, setName)}
              required></input>
            </div>
            <div>For privacy reasons, do not use your full name or email address</div>

            <div>Email: <input
              type='email'
              id='email'
              value={email}
              onChange={event => handleChange(event, setEmail)}
              required></input>
              <div>For authentication reasons, you will not be emailed</div></div>

            <div>Attach up to 5 images:
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
              <div>Would you recommend this product?</div>
              <label>Yes <input id='yes' name='selectOne' type='radio' onClick={() => setRecommend(true)} required></input></label>
              <label>No <input id='no' name='selectOne' type='radio' onClick={() => setRecommend(false)}></input></label>
            </div>

            <button type='submit'>Submit Review</button>
            <button onClick={() => closeForm(true)}> Cancel</button>
          </FormRow>
        </FormGrid>
      </FormModal>
    </FormModalBackground> : null
  );
};

export default Form;