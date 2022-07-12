import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Answer from './Answer';

export default function Question({question}) {
  const [answerCount, setAnswerCount] = useState(2);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let config = { params: {
      count: answerCount,
    } };
    axios.get(`/qa/questions/${question.question_id}/answers`, config)
      .then((ans) => {
        setAnswers(ans.data.results);
        console.log('retrieved answers: ', ans.data.results);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });

  }, [answerCount]);

  return (
    <div className="question">
      <h5>Q: {question.question_body}</h5>
      <div>
        {answers.map((answer, index) => <Answer key={index} answer={answer}/>)}

      </div>
    </div>
  );
}