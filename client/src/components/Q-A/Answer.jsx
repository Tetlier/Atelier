import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Answer ({answer, answers, setAnswers, sessionCookie, addToCookie}) {
  const [reported, setReported] = useState(false);

  // gets components of date
  let answerDate = new Date(answer.date);
  let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  let month = monthArr[answerDate.getMonth()];
  let day = answerDate.getDate();
  let year = answerDate.getFullYear();

  const markHelpful = function() {
    // adds answer to cookie
    addToCookie(answer.answer_id, 'helpful');
    // updates answers array with new helpfulness count
    let indexOfQ = answers.indexOf(answer);
    let newAnswers = answers.slice();
    newAnswers[indexOfQ].helpfulness++;
    setAnswers(newAnswers);
    console.log('calling database to mark helpful');
    // axios call to database
    axios.put(`/qa/answers/${answer.answer_id}/helpful`)
      .then((res) => {
        console.log('response: ', res);
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

  // need to account for seller name being bolded
  return (
    <div className="answer">
      <div className="answer-body">{answer.body}</div>
      <div className="answer-footer">by {answer.answerer_name}, {month} {day}, {year} {'\n'}
        &nbsp;| Helpful?&nbsp;
        {/* if not marked as helpful before */}
        {(document.cookie.slice(5) !== sessionCookie.s_id ||
          !(sessionCookie.actions.includes(answer.answer_id + 'h'))) &&
          <span onClick={() => markHelpful()}>
          Yes {`(${answer.helpfulness})`}
          </span>
        }
        {/* if already marked as helpful */}
        {(document.cookie.slice(5) === sessionCookie.s_id &&
          (sessionCookie.actions.includes(answer.answer_id + 'h'))) &&
          <span>
            <b>Yes {`(${answer.helpfulness})`}</b>
          </span>
        }
        <span> | </span>
        {/* if answer has not been reported */}
        {(document.cookie.slice(5) !== sessionCookie.s_id ||
          !(sessionCookie.actions.includes(answer.answer_id + 'r'))) &&
          <span
            onClick={() => reportAnswer()}>
            Report
          </span>
        }
        {/* if answer has been reported */}
        {(reported) &&
          <span><b>Reported</b></span>
        }
      </div>
    </div>
  );
}