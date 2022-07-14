import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FormBackground } from '../styles/Q-A/FormBackground.styled';
import { FormView } from '../styles/Q-A/FormView.styled';
import { Button } from '../styles/Button.styled.js';

export default function QuestionForm ({triggered, setTrigger, productId, setQuestions, productName}) {

  const [questionBody, setQuestionBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const submitQuestion = function(e) {
    e.preventDefault();

    // need to upload photos to library and save url in future
    let config = {
      data: {
        'body': questionBody,
        'name': nickname,
        'email': email,
        'product_id': productId
      }
    };
    axios.post('/qa/questions', config)
      .then(() => {
        console.log('Question submitted');
        setTrigger(false);
      })
      .catch((err) => {
        console.log('Error submitting question: ', err);
      });
  };

  return (triggered) ? (
    <div className="question-form">
      <FormBackground/>
      <FormView>
        <h3>Ask your Question</h3>
        <h4>About the {productName}</h4>
        <form onSubmit={(e) => submitQuestion(e)}>
          <label>Your Question<sup><font color="#ff0000">*</font></sup>:&nbsp;
            <input
              type="text"
              required
              placeholder="Enter your question"
              size="50"
              autoComplete="off"
              value={questionBody}
              minLength="10" maxLength="1000"
              onChange={(e) => setQuestionBody(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>Your nickname<sup><font color="#ff0000">*</font></sup>:&nbsp;
            <input
              type="text"
              required
              placeholder="Example: jack543!"
              size="25"
              autoComplete="off"
              value={nickname}
              minLength="5" maxLength="60"
              onChange={(e) => setNickname(e.target.value)}
            />
            <div>For privacy reasons, do not use your full name or email address</div>
          </label>
          <br></br>
          <br></br>
          <label>Your email<sup><font color="#ff0000">*</font></sup>:&nbsp;
            <input
              type="email"
              required
              placeholder="Example: jack@email.com"
              autoComplete="off"
              size="25"
              value={email}
              minLength="10" maxLength="60"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>For authentication reasons, you will not be emailed</div>
          </label>
          <br></br>
          <br></br>
          <Button type="submit">Submit
          </Button>
          <Button onClick={() => setTrigger(false)}>Cancel</Button>
        </form>
      </FormView>
    </div>
  ) : undefined;
}