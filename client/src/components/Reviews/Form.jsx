import React, { useState, useEffect } from 'react';
import { ThumbNail, FullSize } from '../styles/reviewstyles/imageStyles.styled.js';
import { FormModal, FormModalBackground, Star, FormGrid, FormRow, FormCol } from '../styles/reviewstyles/formStyles.styled.js';
import axios from 'axios';

import StyleRating from './StyleRating.jsx';
import StarRating from './StarRating.jsx';

const Form = ({ closeForm, form, metaReview, handleSubmit }) => {
  //form values
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [imageArray, setImageArray] = useState('');
  //star rating values
  const [starRating, setStarRating] = useState(0);
  //style rating values
  const [charRating, setCharRating] = useState({});
  //search hook

  //universal input handler
  let handleChange = (event, setState) => {
    setState(event.target.value);
  };

  //test all inputs
  useEffect(()=> {
    console.log(
      'summary', summary,
      'name', name,
      'review', review,
      'email', email,
      'recommend', recommend,
      'starRating', starRating,
      'charRating', charRating,
      'imageArray', imageArray,
    );
  });

  //2 sections
  //left side for summary and review
  //rigt side for everything else
  return (form ?
    <FormModalBackground >
      <FormModal>
        {/* <h2 data-testid='form'>Write Your Review about the 'THIS PRODUCT NAME HERE'</h2> */}
        <FormCol>
          <div>Summary</div>
          <textarea
            rows='2'
            cols='50'
            maxLength={60}
            id='summary'
            value={summary}
            onChange={event => handleChange(event, setSummary)}></textarea>

          <div>Review: <div> <div>What did you like or dislike about this product?</div><textarea
            rows='6'
            cols='50'
            minLength='50'
            maxLength='1000'
            id='review'
            value={review}
            onChange={event => handleChange(event, setReview)}
          ></textarea> </div> {review.length < 50 ? `${review.length}/50 characters` : 'Minimum reached'}
          </div>
        </FormCol>

        <FormCol>
          <div>Name: <input
            type='name'
            id='name'
            value={name}
            minLength="1"
            onChange={event => handleChange(event, setName)}></input>
          </div>
          <div>For privacy reasons, do not use your full name or email address</div>

          <div>Email: <input
            type='email'
            id='email'
            minLength="1"
            value={email}
            onChange={event => handleChange(event, setEmail)}></input>
          <div>For authentication reasons, you will not be emailed</div></div>

          <StarRating starRating={starRating} setStarRating={setStarRating} />
          <input id='file' type='file' accept='image/png, image/jpeg'></input>
          <div>Would you recommend this product?
            <div>
              <div>Yes<input id='yes' name='selectOne' type='radio' onClick ={() => setRecommend(true)}></input></div>
              <div>No<input id='no' name='selectOne' type='radio' onClick ={() => setRecommend(false)}></input></div></div>
          </div>
          <StyleRating metaReview={metaReview} setCharRating ={setCharRating} />

        </FormCol>
        <button
          type='submit'
          onClick={() => closeForm()}>Submit Review</button>
      </FormModal>
    </FormModalBackground> : null
  );
};

export default Form;