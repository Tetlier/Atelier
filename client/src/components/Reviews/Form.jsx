import React, { useState, useEffect, StarReview } from 'react';
import { FormView } from './reviewstyles/FormView.styled.js';
import { Background } from './reviewstyles/FormBackground.styled.js';
import { SummaryBox } from './reviewstyles/SummaryBox.styled.js';

const Form = ({ closeForm, form }) => {
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(null);
  const [recommend, setrecommend] = useState(false);

  let handleChange = (event, setState) => {
    setState(prevState => event.target.value);
    console.log('review', review, 'summary', summary, 'name', name);
  };

  let handleRating = () => {
    console.log('');
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
    <Background>
      <FormView>
        <h2>Review Form</h2>
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
          onChange={event => handleChange(event, setName)}></input></div>
        <div>Review: <div><textarea
          rows='6'
          cols='50'
          maxLength={1000}
          id='review'
          value={review}
          onChange={event => handleChange(event, setReview)}
        ></textarea> </div><div> {review.length}/50 characters</div></div>
        <div class= 'rating'>Rating:
          <input type='radio' name='starRating' onClick = {handleRating}></input>
          <input type='radio' name='starRating'></input>
          <input type='radio' name='starRating'></input>
          <input type='radio' name='starRating'></input>
          <input type='radio' name='starRating'></input>
        </div>
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