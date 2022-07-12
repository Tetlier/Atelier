import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import {Button} from '../styles/Button.styled.js';

export default function QuestionList({productId, searchTerm, sessionCookie, addToCookie, sellerName}) {
  // array of questions
  const [questions, setQuestions] = useState([]);
  // current number of questions to display
  const [questionCount, setQuestionCount] = useState(2);
  // whether there are more questions or not
  const [hasMore, setHasMore] = useState(true);

  // when searchTerm is updated, will update list of questions
  useEffect(() => {
    console.log('search term: ', searchTerm);
    let config = { params: {
      id: productId,
      count: questionCount + 1, // gets one more question to see if there are more
      filter: searchTerm
    } };
    axios.get('/qa/questions', config)
      .then((qs) => {
        // tests if there are more questions
        if (qs.data.length > questionCount) {
          setHasMore(true);
          // slices off the extra question
          setQuestions(qs.data.slice(0, qs.data.length - 1));
        } else {
          setHasMore(false);
          setQuestions(qs.data);
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }, [searchTerm, questionCount]);

  return (
    <div className="questionList">
      {questions.length > 0 &&
        <div>
          {questions.map((question, index) =>
            <Question
              key={question.question_id}
              question={question}
              questions={questions}
              setQuestions={setQuestions}
              sessionCookie={sessionCookie}
              addToCookie={addToCookie}
              sellerName={sellerName}/> )}
        </div>
      }
      {hasMore &&
        <Button onClick={() => setQuestionCount(questionCount + 10)}>More Answered Questions</Button>
      }
      <Button>Add a Question</Button>
    </div>
  );
}