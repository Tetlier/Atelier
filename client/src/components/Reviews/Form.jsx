import React, { useState, useEffect } from 'react';
import { ThumbNail, FullSize } from '../styles/reviewstyles/imageStyles.styled.js';
import { FormModal, FormModalBackground, Star, FormTitle, FormGrid, FormRow, FormCol } from '../styles/reviewstyles/formStyles.styled.js';
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
  const [photoArray, setPhotoArray] = useState('');
  //star rating values
  const [starRating, setStarRating] = useState(0);
  //style rating values
  const [charRating, setCharRating] = useState({});
  //form validator hook
  const [formValid, setFormValid] = useState(false);

  //universal input handler
  let handleChange = (event, setState) => {
    setState(event.target.value);
  };

  //validates that the mandatory fields have been filled
  let validateForm = () => {
  };

  //test all inputs
  useEffect(() => {
    console.log(
      'summary', summary,
      'name', name,
      'review', review,
      'email', email,
      'recommend', recommend,
      'starRating', starRating,
      'charRating', charRating,
      'photoArray', photoArray,
    );
  });

  //submits form to server
  // eslint-disable-next-line camelcase
  let handleSubmit = (event) => {
    event.preventDefault;
    console.log('good to go');
    closeForm(true);
    // axios.post('/reviews', {
    //   params: {
    //     // eslint-disable-next-line camelcase
    //     product_id: currentProductId,
    //     rating: starRating,
    //     summary: summary,
    //     body: review,
    //     name: name,
    //     email: email,
    //     photos: photoArray,
    //     recommended: recommend,
    //     characteristics: charRating
    //   }
    // }).then(console.log('post success')
    //   .catch(err => console.log(err)));
  };



  //2 sections
  //left side for summary and review
  //rigt side for everything else
  return (form ?
    <FormModalBackground onSubmit={(event) => handleSubmit(event)}>
      <FormModal>
        <FormTitle><h2 data-testid='form'>Write Your Review about the 'THIS PRODUCT NAME HERE'</h2> </FormTitle>
        <FormGrid>
          <FormRow>
            <div>Summary</div>
            <textarea
              type="text"
              rows='2'
              cols='50'
              maxLength={60}
              id='summary'
              value={summary}
              onChange={event => handleChange(event, setSummary)}></textarea>

            <div>Review: <div>
              <textarea
                rows='6'
                cols='50'
                minLength='50'
                maxLength='1000'
                id='review'
                value={review}
                onChange={event => handleChange(event, setReview)}
                placeHolder='What did you like or dislike about this product?'
                errorMessage='The review body is less than 50 characters'

              ></textarea> </div> {review.length < 50 ? `${review.length}/50 characters` : 'Minimum reached'}
            </div>

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

            <div>Attach up to 5 images: <input id='file' type='file' accept='image/png, image/jpeg' /></div>

            <div>
              <div>Would you recommend this product?</div>
              <label>Yes <input id='yes' name='selectOne' type='radio' onClick={() => setRecommend(true)} required></input></label>
              <label>No <input id='no' name='selectOne' type='radio' onClick={() => setRecommend(false)}></input></label>
            </div>
          </FormRow>

          <FormRow>
            <StarRating starRating={starRating} setStarRating={setStarRating} />
            <StyleRating metaReview={metaReview} setCharRating={setCharRating} />

            <button type='submit'>Submit Review</button>

            <button onClick={() => closeForm(true)}> Cancel</button>
          </FormRow>

        </FormGrid>
      </FormModal>
    </FormModalBackground> : null
  );
};

export default Form;