import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FormBackground } from '../styles/Q-A/FormBackground.styled';
import { FormView } from '../styles/Q-A/FormView.styled';
import { Button } from '../styles/Button.styled.js';

export default function AnswerForm ({triggered, setTrigger, questionBody, questionId, productName, setAnswers}) {

  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const submitAnswer = function(e) {
    e.preventDefault();

    // need to upload photos to library and save url in future
    let config = {
      data: {
        'body': answerBody,
        'name': nickname,
        'email': email,
        'photos': photos
      }
    };
    axios.post(`/qa/questions/${questionId}/answers`, config)
      .then(() => {
        console.log('Answer submitted');
        setTrigger(false);
      })
      .then(() => {
        axios.get(`/qa/questions/${questionId}/answers`, {params: {count: 100}})
          .then((ans) => {
            setAnswers(ans.data);
          })
          .catch((err) => {
            console.log('Error getting answers: ', err);
          });
      })
      .catch((err) => {
        console.log('Error submitting answer: ', err);
      });
  };

  return (triggered) ? (
    <div className="answer-form">
      <FormBackground>
        <FormView>
          <h3>Submit your Answer</h3>
          <h4>{productName}: {questionBody}</h4>
          <form onSubmit={(e) => submitAnswer(e)}>
            <label>Your Answer<sup><font color="#ff0000">*</font></sup>:&nbsp;
              <input
                type="text"
                required
                placeholder="Enter your answer"
                size="50"
                autoComplete="off"
                value={answerBody}
                minLength="10" maxLength="1000"
                onChange={(e) => setAnswerBody(e.target.value)}
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
            <label>Upload your photos {'(optional)'}:&nbsp;
              <input
                type="file"
              />
            </label>
            <br></br>
            <br></br>
            <Button type="submit">Submit
            </Button>
            <Button onClick={() => setTrigger(false)}>Cancel</Button>
          </form>
        </FormView>
      </FormBackground>
    </div>
  ) : undefined;
}