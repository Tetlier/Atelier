import React, { useState, useEffect } from 'react';
import { FormView } from '../styles/reviewstyles/FormView.styled.js';
import { Background } from '../styles/reviewstyles/FormBackground.styled.js';
import { SummaryBox } from '../styles/reviewstyles/SummaryBox.styled.js';

const Form = ({ closeForm, form }) => {
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(null);
  const [recommend, setrecommend] = useState(false);

  const [maxFiles, setFiles] = useState(0);

  let handleChange = (event, setState) => {
    setState(prevState => event.target.value);
    console.log('review', review, 'summary', summary, 'name', name);
  };

  let handleRating = () => {
    console.log('');
  };

  let fileTracker = () => {
    //Tracks how many files
  };


  let handleSubmit = (summary, name, review, rating, recommended) => {
    axios.post('/reviews', {
      params: {
        summary: summary,
        name: name,
        review: review,
        rating: rating,
        recommended: recommended
      }
    });
  };

  return (form ?
    <Background >
      <FormView>
        <h2 data-testid='form'>Write Your Review about the 'THIS PRODUCT NAME HERE'</h2>
        <div>Summary: <textarea
          rows='2'
          cols='50'
          maxLength={60}
          id='summary'
          value={summary}
          onChange={event => handleChange(event, setSummary)}></textarea></div>
        <div>Name: <input
          type='name'
          id='name'
          value={name}
          onChange={event => handleChange(event, setName)}></input>
        <div>For privacy reasons, do not use your full name or email address</div></div>
        <div>Email: <input
          type='email'
          id='email'
          value={email}
          onChange={event => handleChange(event, setEmail)}></input>
        <div>For authentication reasons, you will not be emailed</div></div>
        <div>Review: <div><textarea
          rows='6'
          cols='50'
          maxLength={1000}
          id='review'
          value={review}
          onChange={event => handleChange(event, setReview)}
        ></textarea> </div><div> {review.length}/50 characters</div></div>
        <div>Rating:
          <input type='radio' name='starRating' onClick={handleRating}></input>
          <input type='radio' name='starRating'></input>
          <input type='radio' name='starRating'></input>
          <input type='radio' name='starRating'></input>
          <input type='radio' name='starRating'></input>
        </div>
        <input id = 'file' type = 'file'></input>
        <div>Would you recommend this product?
          <div>Yes<input id='yes' name='selectOne' type='radio' value={true}></input></div>
          <div>No<input id='no' name='selectOne' type='radio' value={false}></input></div></div>
        <button
          onClick={closeForm}>Submit Review</button>
      </FormView>
    </Background> : null
  );
};

export default Form;