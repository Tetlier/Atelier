import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.jsx';
import Search from './Search';
import axios from 'axios';
import { QAContainer, QAChild } from '../styles/Q-A/QAContainer.styled';

export default function QA ({productId, sessionCookie, addToCookie, productName}) {
  const [searchTerm, setSearchTerm] = useState('');
  const sellerName = 'atelier';

  const updateSearch = function(searchTerm) {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    setSearchTerm('');
  }, [productId])

  return (
    <div>
      <QAContainer>
        <QAChild>
          <h2>Questions &amp; Answers</h2>
          <Search updateSearch={updateSearch}/>
          <QuestionList productId={productId}
            searchTerm={searchTerm}
            sessionCookie={sessionCookie}
            addToCookie={addToCookie}
            sellerName={sellerName}
            productName={productName}
          />
        </QAChild>
      </QAContainer>
    </div>
  );
}