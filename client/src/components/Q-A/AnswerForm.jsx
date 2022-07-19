import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FormView, FormBackground, FormTitle, FormSection, FormEntry, FormLabel, FormQuestionEntry } from '../styles/Q-A/FormView.styled';
import { SmallButton } from '../styles/Q-A/InlineButton.styled.js';
import { AnswerFooter } from '../styles/Q-A/QAList.styled.js';
import { ImageList, ThumbNail } from '../styles/Q-A/ImageViews.styled';

export default function AnswerForm ({triggered, setTrigger, questionBody, questionId, productName, setAnswers, sellerName}) {

  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const submitAnswer = function(e) {
    e.preventDefault();

    validateForm()
      .then((photoURLs) => {
        // make POST request
        let config = {
          data: {
            'body': answerBody,
            'name': nickname,
            'email': email,
            'photos': photoURLs
          }
        };
        axios.post(`/qa/questions/${questionId}/answers`, config)
          .then(() => {
            console.log('Answer submitted');
            setTrigger(false);
          })
          .then(() => {
            axios.get(`/qa/questions/${questionId}/answers`, {params: {count: 100, sellerName: sellerName}})
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
      })
      .catch((errorMessage) => {
        window.alert(errorMessage);
      });
  };

  let addImage = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setPhotos([...photos, reader.result]);
    };
  };

  let validateForm = () => {
    let hasError = false;
    let errorMessage = 'You must enter the following:\n';
    if (answerBody.length === 0) {
      errorMessage += '凸 your answer\n';
      hasError = true;
    }
    if (nickname.length === 0) {
      errorMessage += '凸 your nickname\n';
      hasError = true;
    }
    if (!email.includes('@')) {
      errorMessage += '凸 a valid email\n';
      hasError = true;
    }

    // upload photos to cloudinary and store URLs
    return Promise.all(photos.map((photo) => {
      return axios.post('/cloudinary', {img: photo})
        .then((photoURL) => {
          return photoURL.data;
        })
        .catch((err) => {
          errorMessage += '凸 a valid image (JPEG or PNG)\n';
          console.log('Error converting image: ', err);
          hasError = true;
          return err;
        });
    }))
      .then((photoURLs) => {
        return new Promise((resolve, reject) => {
          if (hasError) {
            reject(errorMessage);
          } else {
            resolve(photoURLs);
          }
        });
      })
      .then((photoURLs) => {
        return photoURLs;
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
          <form>
            <FormSection>
              <FormLabel>Your Answer<sup><font color="#ff0000">*</font></sup>:&nbsp;</FormLabel>
              <FormQuestionEntry
                required
                placeholder="Enter your answer"
                autoComplete="off"
                value={answerBody}
                minLength="10" maxLength="1000"
                onChange={(e) => setAnswerBody(e.target.value)}>
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
              <FormLabel>Upload your photos:&nbsp;</FormLabel>
              {photos.length < 5 ?
                <input
                  type="file"
                  accept='image/png, image/jpeg'
                  onChange={(e) => addImage(e)}
                />
                : 'Max of 5 images uploaded'
              }
              <AnswerFooter>{'(optional, JPEG or PNG)'}</AnswerFooter>
              <ImageList>
                {photos.map((photo) => <ThumbNail src={photo}/>)}
              </ImageList>
            </FormSection>
            <SmallButton onClick={(e) => submitAnswer(e)}>Submit
            </SmallButton>
            <SmallButton onClick={() => setTrigger(false)}>Cancel</SmallButton>
          </form>
        </FormView>
      </FormBackground>
    </div>
  ) : undefined;
}