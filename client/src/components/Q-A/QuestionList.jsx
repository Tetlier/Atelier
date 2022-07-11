import React from 'react';
import Search from './Search.jsx';
import Question from './Question.jsx';
import {Button} from '../styles/Button.styled.js';

export default function QuestionList({productId}) {

  return (
    <div>
      <Search/>
      <Question/>
      <Button>More Answered Questions</Button>
      <Button>Add a Question</Button>
    </div>
  );
}