import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import QuestionList from './QuestionList.jsx';
import Search from './Search';
import axios from 'axios';

export default function QA ({productId, sessionCookie, addToCookie}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [productName, setProductName] = useState('');
  const sellerName = 'atelier';

  const updateSearch = function(searchTerm) {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    // get product name
    axios.get(`/products/${productId}`)
      .then((res) => {
        setProductName(res.data.name);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  });

  return (
    <div>
      <h2>Questions &amp; Answers</h2>
      <Search updateSearch={updateSearch}/>
      <QuestionList productId={productId}
        searchTerm={searchTerm}
        sessionCookie={sessionCookie}
        addToCookie={addToCookie}
        sellerName={sellerName}
        productName={productName}
      />
    </div>
  );
}