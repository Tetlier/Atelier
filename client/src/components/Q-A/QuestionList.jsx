import React from 'react';
import Question from './Question.jsx';
import {Button} from '../styles/Button.styled.js';

export default function QuestionList({questions}) {

  return (
    <div className="questionList">
      {questions.forEach((question, index) =>
        <Question/>
      )}
      <Button>More Answered Questions</Button>
      <Button>Add a Question</Button>
    </div>
  );
}