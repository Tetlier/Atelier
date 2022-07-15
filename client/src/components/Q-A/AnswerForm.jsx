import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FormView, FormBackground, FormTitle, FormSection, FormEntry, FormLabel, FormQuestionEntry } from '../styles/Q-A/FormView.styled';
import { SmallButton } from '../styles/Q-A/InlineButton.styled.js';
import { AnswerFooter } from '../styles/Q-A/QAList.styled.js';

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
          <FormTitle>
            <h3>Submit your Answer</h3>
            <h4>{productName}: {questionBody}</h4>
          </FormTitle>
          <form onSubmit={(e) => submitAnswer(e)}>
            <FormSection>
              <FormLabel>Your Answer<sup><font color="#ff0000">*</font></sup>:&nbsp;</FormLabel>
              <FormQuestionEntry
                required
                placeholder="Enter your answer"
                autoComplete="off"
                minLength="10" maxLength="1000"
                onChange={(e) => setAnswerBody(e.target.value)}>
                {answerBody}
              </FormQuestionEntry>
            </FormSection>
            <FormSection>
              <FormLabel>Your nickname<sup><font color="#ff0000">*</font></sup>:&nbsp;</FormLabel>
              <FormEntry
                type="text"
                required
                placeholder="Example: jack543!"
                size="25"
                autoComplete="off"
                value={nickname}
                minLength="5" maxLength="60"
                onChange={(e) => setNickname(e.target.value)}
              />
              <AnswerFooter>For privacy reasons, do not use your full name or email address</AnswerFooter>
            </FormSection>
            <FormSection>
              <FormLabel>Your email<sup><font color="#ff0000">*</font></sup>:&nbsp;</FormLabel>
              <FormEntry
                type="email"
                required
                placeholder="Example: jack@email.com"
                autoComplete="off"
                size="25"
                value={email}
                minLength="10" maxLength="60"
                onChange={(e) => setEmail(e.target.value)}
              />
              <AnswerFooter>For authentication reasons, you will not be emailed</AnswerFooter>
            </FormSection>
            <FormSection>
              <FormLabel>Upload your photos {'(optional)'}:&nbsp;</FormLabel>
              <input
                type="file"
              />
            </FormSection>
            <SmallButton type="submit">Submit
            </SmallButton>
            <SmallButton onClick={() => setTrigger(false)}>Cancel</SmallButton>
          </form>
        </FormView>
      </FormBackground>
    </div>
  ) : undefined;
}