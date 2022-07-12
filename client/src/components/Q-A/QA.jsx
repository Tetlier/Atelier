import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.jsx';
import Search from './Search';

export default function QA ({productId}) {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearch = function(searchTerm) {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <h2>Questions &amp; Answers</h2>
      <Search updateSearch={updateSearch}/>
      <QuestionList productId={productId} searchTerm={searchTerm}/>
    </div>
  );
}