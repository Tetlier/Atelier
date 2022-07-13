import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewMapper from './ReviewMapper.jsx';
import MetaReview from './MetaReview.jsx';
import Form from './Form.jsx';

import { Container } from '../styles/Container.styled.js';
import { Button } from '../styles/Button.styled.js';



//hooks only in stateless components aka not classes
//reviews

const Reviews = ({ currentProductId, currentProductRating, totalReviews }) => {
  const [startPoint, setStart] = useState(0);

  //reviewList states and hooks
  const [reviewList, setReviewList] = useState([]);
  const [reviewPage, setPage] = useState(1);
  const [catchUpPage, incPage] = useState(1);
  const [moreResults, noMoreresults] = useState(true);
  const [sort, toggleSort] = useState('newest');

  //metaReview states and hooks
  const [metaReview, setMetaReview] = useState({});
  const [form, formClick] = useState(false);

  let getTwoReviews = (id) => {
    axios.get('/reviews', { params: { id: id, page: reviewPage, sort: sort } })
      .then(results => {
        if (results) {
          let updatedPage = reviewList.concat(results.data.results.slice(startPoint, (startPoint + 2)));
          setReviewList(updatedPage);
          setStart(prevState => prevState += 2);
        } else {
          noMoreresults(prevState => false);
        }
      })
      .catch(err => console.log(err));
  };

  let getPageReviews = (id, startPage) => {
    axios.get('/reviews', { params: { id: id, page: reviewPage, sort: sort } })
      .then(results => {
        let updatedPage = reviewList.concat(results.data.results);
        setReviewList(updatedPage);
        incPage(prevState => prevState += 1);
      })
      .catch(err => console.log(err));
  };

  let getResidualResults = (id) => {
    axios.get('/reviews', { params: { id: id, page: reviewPage, sort: sort } })
      .then(results => {
        console.log('should be empty', reviewList, 'should be changed', sort);
        let updatedPage = reviewList.concat(results.data.results.slice(0, startPoint));
        setReviewList(updatedPage);
        console.log('info we get', results.data.results.slice(0, (startPoint)));
      })
      .catch(err => console.log(err));
  };

  let getMetaReview = (id) => {
    axios.get('/meta', { params: { id: id } })
      .then(results => { setMetaReview(prevState => results.data); })
      .catch(err => console.log(err));
  };

  let openForm = () => {
    formClick(prevState => true);
  };

  let closeForm = () => {
    formClick(prevState => false);
  };


//currently broken
  let changeSort = (option) => {
    toggleSort(option);
    setReviewList([]);
    console.log('should be empty', reviewList);
    console.log('should be changd', sort);
    incPage(1);
    if (reviewPage > 1) {
      while (catchUpPage < reviewPage) {
        getPageReviews(currentProductId, startPage);
      }
    }
    getResidualResults(currentProductId);
  };

 //Gets initial metareview and two reviews
  useEffect(() => {
    getTwoReviews(currentProductId);
    getMetaReview(currentProductId);
  }, []);

  useEffect(() => {
    if (startPoint === 10) {
      setPage(prevState => prevState += 1);
      setStart(0);
    }
  }, [startPoint]);

  // useEffect(() => {
  //   setReviewList([]);
  //   console.log('current list', reviewList);
  //   incPage(1);
  //   if (reviewPage > 1) {
  //     while (catchUpPage < reviewPage) {
  //       getPageReviews(currentProductId, startPage);
  //     }
  //   }
  //   getResidualResults(currentProductId);
  // }, [sort]);

  //sort will filter existing list and also add sort params
  return (
    <Container>
      <label> Sort on: </label>
      <ul>
        <button onClick={() => changeSort('helpful')}>Helpful</button>
        <button onClick={() => changeSort('newest')}>Newest</button>
        <button onClick={() => changeSort('relevant')}>Relevant</button>
      </ul>
      <div><MetaReview metaReview={metaReview} currentProductRating={currentProductRating}/></div>
      <div> {reviewList.length > 1 ? <ReviewMapper reviewList={reviewList} /> : null}</div>
      <div><Form closeForm={closeForm.bind(this)} form={form} /></div>
      <div> {moreResults ? <Button
        onClick={() => getTwoReviews(currentProductId)}>More Reviews</Button> : null}
        <Button
          data-testid='addReview'
          onClick={() => openForm()}>Add a Review + </Button></div>
    </Container>
  );
};

export default Reviews;


