import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewMapper from './ReviewMapper.jsx';
import MetaReview from './MetaReview.jsx';
import Form from './Form.jsx';


import { Button } from '../styles/Button.styled.js';

import { ReviewContainer } from '../styles/reviewstyles/ReviewContainer.styled.js';
import { Metareviewpanel } from '../styles/reviewstyles/Metareviewpanel.styled.js';
import { Reviewpanel } from '../styles/reviewstyles/Reviewpanel.styled.js';
import { Scroll } from '../styles/reviewstyles/Scroll.styled.js';


//hooks only in stateless components aka not classes
//reviews

const Reviews = ({ currentProductId, currentProductRating, totalReviews }) => {
  const [startPoint, setStart] = useState(0);

  const [filterRating, setFilterRating] = useState([]);
  const [count, setCount] = useState(10);

  //reviewList states and hooks
  const [reviewList, setReviewList] = useState([]);
  const [resultMax, setResultMax] = useState(false);
  const [dropDownSort, setDropDownSort] = useState('relevant');

  //metaReview states and hooks
  const [metaReview, setMetaReview] = useState({});
  const [form, formClick] = useState(false);

  let getTwoReviews = () => {
    axios.get('/reviews', { params: { id: currentProductId, count: count, sort: dropDownSort } })
      .then(results => {
        if (results.data.results) {
          let updatedPage = reviewList.concat(results.data.results.slice(startPoint, (startPoint + 2)));
          setReviewList(updatedPage);
          setStart(prevState => prevState += 2);
        } else {
          setResultMax(prevState => true);
        }
      })
      .catch(err => console.log(err));
  };

  let getPageReviews = () => {
    axios.get('/reviews', { params: { id: currentProductId, count: count, sort: dropDownSort } })
      .then(results => {
        let updatedPage = (results.data.results.slice(0, startPoint));
        setReviewList(updatedPage);
      })
      .catch(err => console.log(err));
  };

  let getMetaReview = (id) => {
    axios.get('/meta', { params: { id: id } })
      .then(results => { setMetaReview(prevState => results.data); })
      .catch(err => console.log(err));
  };

  let closeForm = () => {
    formClick(false);
  };

  //Gets initial metareview and two reviews
  useEffect(() => {
    getTwoReviews(currentProductId);
    getMetaReview(currentProductId);
  }, []);

  useEffect(() => {
    console.log('start', startPoint);
    if (startPoint === count) {
      setCount(prevState => prevState += 10);
    }
  }, [startPoint]);

  //Monitors for changes in dropDownSort after initialization and gets new sorted info on change
  useEffect(() => {
    //tech debt-temporary fix››
    startPoint >= 2 ? getPageReviews() : null;
  }, [dropDownSort]);

  useEffect(() => {
    console.log('changed');
  }, [filterRating]);


  //sort will filter existing list and also add sort params
  let toggleFilter = (rating) => {
    if (filterRating.includes(rating)) {
      let position = filterRating.indexOf(rating);
      filterRating.splice(position, 1);
      setFilterRating(filterRating);
    } else {
      filterRating.push(rating);
      setFilterRating(filterRating);
    }
  };

  return (
    <ReviewContainer>
      <Metareviewpanel>
        <MetaReview metaReview={metaReview}
          currentProductRating={currentProductRating}
          toggleFilter={toggleFilter.bind(this)}
          setFilterRating={setFilterRating}
          filterRating={filterRating} /></Metareviewpanel>
      <Reviewpanel>
        <label> Sort By: </label>
        <select value={dropDownSort} onChange={event => setDropDownSort(event.target.value)}>
          <option value='helpful'>Helpfulness</option>
          <option value='newest'>Newest</option>
          <option value='relevant'>Relevance</option>
        </select>
        <Scroll> {
          reviewList.length > 1 ?
            <ReviewMapper reviewList={reviewList}
              filterRating={filterRating} /> : null}
        </Scroll>
        <div><Form closeForm={closeForm.bind(this)} form={form} /></div>
        <div> {!resultMax ? <Button
          onClick={() => getTwoReviews(currentProductId)}>More Reviews</Button> : null}
          <Button
            data-testid='addReview'
            onClick={() => formClick(true)}>Add a Review + </Button></div>
      </Reviewpanel>
    </ReviewContainer>
  );
};

export default Reviews;


