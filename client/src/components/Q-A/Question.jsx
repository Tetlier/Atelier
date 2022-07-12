import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Answer from './Answer';

export default function Question({question}) {
  const [answerCount, setAnswerCount] = useState(2);
  const [answers, setAnswers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  useEffect(() => {
    let config = { params: {
      count: answerCount + 1, // gets one more answer to see if there are more
    } };
    axios.get(`/qa/questions/${question.question_id}/answers`, config)
      .then((ans) => {
        // tests if there are more answers
        if (ans.data.length > answerCount) {
          setHasMore(true);
          if (answerCount === 2) {
            // slices off the extra answer
            setAnswers(ans.data.slice(0, ans.data.length - 1));
          }
        } else {
          setHasMore(false);
          setAnswers(ans.data);
        }

      })
      .catch((err) => {
        console.log('Error: ', err);
      });

  }, [answerCount]);

  return (
    <div className="question">
      <h4>Q: {question.question_body}</h4>
      <aside>
        Helpful?&nbsp;
        {/* <span
          onClick={() => }>
          Yes {`(${question.question_helpfulness})`}
        </span>
        <span
          onClick={() => }>
          Report
        </span> */}
      </aside>
      <h4>A: </h4>
      <div>
        {answers.map((answer, index) => <Answer key={index} answer={answer}/>)}
        {hasMore &&
        <p onClick={() => setAnswerCount(100)}>LOAD MORE ANSWERS</p>
        }
      </div>
    </div>
  );
}