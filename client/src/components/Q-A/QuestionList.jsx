import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import {Button} from '../styles/Button.styled.js';

export default function QuestionList({productId, searchTerm}) {
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(4);

  // when searchTerm is updated, will update list of questions
  useEffect(() => {
    console.log('search term: ', searchTerm);
    let config = { params: {
      id: productId,
      count: questionCount,
      filter: searchTerm
    } };
    axios.get('/qa/questions', config)
      .then((qs) => {
        setQuestions(qs.data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }, [searchTerm]);

  return (
    <div className="questionList">
      {questions.map((question, index) => <Question key={index} question={question}/> )}
      <Button>More Answered Questions</Button>
      <Button>Add a Question</Button>
    </div>
  );
}