import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.jsx';
import Search from './Search';

export default function QA ({productId, sessionCookie, addToCookie}) {
  const [searchTerm, setSearchTerm] = useState('');
  const sellerName = 'atelier';

  const updateSearch = function(searchTerm) {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <h2>Questions &amp; Answers</h2>
      <Search updateSearch={updateSearch}/>
      <QuestionList productId={productId}
        searchTerm={searchTerm}
        sessionCookie={sessionCookie}
        addToCookie={addToCookie}
        sellerName={sellerName}
      />
    </div>
  );
}