import React, {useState} from 'react';
import QuestionList from './QuestionList.jsx';

export default function QA ({productId}) {
  const [number, setNum] = useState(0);

  return (
    <div>
      <h2>Questions &amp; Answers</h2>
      <div><QuestionList productId={productId}/></div>
    </div>
  );
}