import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import Search from './Search';

export default function QA ({productId}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    let config = { params: {
      id: productId,
      count: 4,
      filter: searchTerm
    } };
    axios.get('/qa/questions', config)
      .then((qs) => {
        console.log('questions retrieved: ', qs.data);
        setQuestions(qs);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }, [searchTerm]);

  const updateSearch = function(searchTerm) {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <h2>Questions &amp; Answers</h2>
      <Search updateSearch={updateSearch}/>
    </div>
  );
}