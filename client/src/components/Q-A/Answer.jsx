import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { AnswerStyle, AnswerFooter, LinkHover, ClickedLink } from '../styles/Q-A/QAList.styled';
import { ThumbNail, FullSizeImage, ImageList } from '../styles/Q-A/ImageViews.styled';
import { FormBackground } from '../styles/Q-A/FormView.styled';


export default function Answer ({answer, answers, setAnswers, sessionCookie, addToCookie, sellerName}) {
  const [reported, setReported] = useState(false);

  // gets components of date
  let answerDate = new Date(answer.date);
  let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  let month = monthArr[answerDate.getMonth()];
  let day = answerDate.getDate();
  let year = answerDate.getFullYear();
  const [enlarged, setEnlarged] = useState(new Array(answer.photos.length).fill(false));

  const markHelpful = function() {
    // adds answer to cookie
    addToCookie(answer.answer_id, 'helpful');
    // updates answers array with new helpfulness count
    let indexOfQ = answers.indexOf(answer);
    let newAnswers = answers.slice();
    newAnswers[indexOfQ].helpfulness++;
    setAnswers(newAnswers);
    // axios call to database
    axios.put(`/qa/answers/${answer.answer_id}/helpful`)
      .then((res) => {
        console.log('increased helpfulness');
      })
      .catch((err) => {
        // revert back to original helpfulness count if error
        setAnswers(answers);
        console.log('Error: ', err);
      });
  };

  const reportAnswer = function() {
    let confirmed = window.confirm('Do you really want to report this answer?');
    if (confirmed) {
      // adds answer to cookie
      addToCookie(answer.answer_id, 'reported');
      setReported(true);
      axios.put(`/qa/answers/${answer.answer_id}/report`)
        .then(() => {
          window.alert('Answer reported');
        })
        .catch((err) => {
          // revert back to not reported if error
          setReported(false);
          console.log('Error: ', err);
        });
    } else {
      console.log('Not reported');
    }
  };

  return (
    <AnswerStyle>
      <div className='answer'>
        <div className='answer-body'>{answer.body}</div>
        <ImageList>
          {answer.photos.map((photo, index) =>
            <div key={photo.url}>
              { enlarged[index] ? (
                <FormBackground onClick={() => setEnlarged(new Array(answer.photos.length).fill(false))}>
                  <FullSizeImage src={photo.url} alt='answer photo'/>
                </FormBackground>
              )
                :
                <ThumbNail
                  onClick={() => {
                    let newEnlargedState = enlarged.slice();
                    newEnlargedState[index] = true;
                    setEnlarged(newEnlargedState);
                  }}
                  src={photo.url}
                  loading='lazy'
                  alt='answer photo'
                  loading='lazy'
                />
              }
            </div>)}
        </ImageList>
        <AnswerFooter>
          <div className='answer-footer'>by&nbsp;
            {answer.answerer_name.toLowerCase() === sellerName && <b>Seller</b>}
            {answer.answerer_name.toLowerCase() !== sellerName && answer.answerer_name}
            , {month} {day}, {year} {'\n'}
            &nbsp;| Helpful?&nbsp;
            {/* if not marked as helpful before */}
            {(document.cookie.slice(5) !== sessionCookie.s_id ||
              !(sessionCookie.actions.includes(answer.answer_id + 'h'))) &&
              <LinkHover
                onClick={() => markHelpful()}>
                Yes {`(${answer.helpfulness})`}
              </LinkHover>
            }
            {/* if already marked as helpful */}
            {(document.cookie.slice(5) === sessionCookie.s_id &&
              (sessionCookie.actions.includes(answer.answer_id + 'h'))) &&
              <ClickedLink>Yes {`(${answer.helpfulness})`}</ClickedLink>
            }
            <span> | </span>
            {/* if answer has not been reported */}
            {(document.cookie.slice(5) !== sessionCookie.s_id ||
              !(sessionCookie.actions.includes(answer.answer_id + 'r'))) &&
              <LinkHover onClick={() => reportAnswer()}>Report</LinkHover>
            }
            {/* if answer has been reported */}
            {(reported) &&
              <ClickedLink>Reported</ClickedLink>
            }
          </div>
        </AnswerFooter>
      </div>
    </AnswerStyle>
  );
}