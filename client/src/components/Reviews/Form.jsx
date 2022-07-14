import React, { useState, useEffect } from 'react';
import { FormView } from '../styles/reviewstyles/FormView.styled.js';
import { Background } from '../styles/reviewstyles/FormBackground.styled.js';
import { SummaryBox } from '../styles/reviewstyles/SummaryBox.styled.js';
import { FormStar } from '../styles/reviewstyles/FormStar.styled.js';


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

  //will change the rating value
  let handleRating = () => {
    console.log('');
  };

  let fileTracker = () => {
    //Tracks how many files
  };

  //make a storage of images for them to then be mapped as thumbnails and displayed in full img

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
      <FormView action={console.log('clicked')}>
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
          minlength="1"
          onChange={event => handleChange(event, setName)}></input>
        <div>For privacy reasons, do not use your full name or email address</div></div>
        <div>Email: <input
          type='email'
          id='email'
          minlength="1"
          value={email}
          onChange={event => handleChange(event, setEmail)}></input>
        <div>For authentication reasons, you will not be emailed</div></div>
        <div>Review: <div> <div>What did you like or dislike about this product?</div><textarea
          rows='6'
          cols='50'
          minlength='50'
          maxLength='1000'
          id='review'
          value={review}
          onChange={event => handleChange(event, setReview)}
        ></textarea> </div><div> {review.length}/50 characters</div></div>
        <div>Rating:
          <div><FormStar /></div>
          <FormStar type='radio' name='starRating' onClick={handleRating}></FormStar>
          <input type='radio' name='starRating'></input>
          <input type='radio' name='starRating'></input>
          <input type='radio' name='starRating'></input>
          <input type='radio' name='starRating'></input>
        </div>
        <input id='file' type='file' accept='image/png, image/jpg'></input>
        <div>Would you recommend this product?
          <div>Yes<input id='yes' name='selectOne' type='radio' value={true}></input></div>
          <div>No<input id='no' name='selectOne' type='radio' value={false}></input></div></div>
        <div>Characteristics:</div>
        <input type='radio' name='characterRating' value='1'></input>
        <input type='radio' name='characterRating' value='2'></input>
        <input type='radio' name='characterRating' value='3'></input>
        <input type='radio' name='characterRating' value='4'></input>
        <input type='radio' name='characterRating' value='5'></input>

        {/* <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table> */}


        <button
          type='submit'
          onClick={() => closeForm()}>Submit Review</button>
      </FormView>
    </Background> : null
  );
};

export default Form;