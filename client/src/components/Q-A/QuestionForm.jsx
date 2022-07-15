import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FormView, FormBackground, FormTitle, FormSection, FormEntry, FormQuestionEntry, FormLabel } from '../styles/Q-A/FormView.styled';
import { SmallButton } from '../styles/Q-A/InlineButton.styled.js';
import { AnswerFooter } from '../styles/Q-A/QAList.styled.js';

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
      <FormBackground>
        <FormView>
          <FormTitle>
            <h3>Ask your Question</h3>
            <h4>About the {productName}</h4>
          </FormTitle>
          <form onSubmit={(e) => submitQuestion(e)}>
            <FormSection>
              <FormLabel>Your Question<sup><font color="#ff0000">*</font></sup>:&nbsp;</FormLabel>
              <FormQuestionEntry
                required
                placeholder="Enter your question"
                autoComplete="off"
                minLength="10" maxLength="1000"
                onChange={(e) => setQuestionBody(e.target.value)}>
                {questionBody}
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
            <SmallButton type="submit">Submit
            </SmallButton>
            <SmallButton onClick={() => setTrigger(false)}>Cancel</SmallButton>
          </form>
        </FormView>
      </FormBackground>
    </div>
  ) : undefined;
}