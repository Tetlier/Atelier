import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewMapper from './ReviewMapper.jsx';
import MetaReview from './MetaReview.jsx';

//hooks only in stateless components aka not classes
//reviews

const Reviews = ({ currentProductId, Container, Button }) => {
  let startPoint = 2;
  const [metaReview, setMetaReview] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [form, formClick] = useState(false);

  let getTwoReviews = (id) => {
    axios.get('/reviews', { params: { id: id } })
      .then(results => { setReviewList(results.data.results.splice(0, startPoint)); startPoint += 2; })
      .catch(err => console.log(err));
  };

  let getMetaReview = (id) => {
    axios.get('/meta', { params: { id: id } })
      .then(results => { setMetaReview(results.data); })
      .catch(err => console.log(err));
  };

  let toggleForm = () => {
    formClick(prevform => !prevform);
  };

  //to be used in db

  useEffect(() => {
    //get initial meta and two reviews
    getTwoReviews(currentProductId);
    getMetaReview(currentProductId);
  }, []);

  useEffect(() => {
    console.log('something has changed');
  });

  return (
    <Container>
      <div><MetaReview metaReview={metaReview} /></div>
      <div><ReviewMapper reviewList={reviewList} /></div>
      <div>
        <Button
          onClick = {() => getTwoReviews(currentProductId)}>More Reviews</Button>
        <Button
          onClick = {() => toggleForm()}>Add a Review + </Button></div>
    </Container>
  );
};

export default Reviews;


