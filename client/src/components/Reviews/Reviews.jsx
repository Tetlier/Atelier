import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewMapper from './ReviewMapper.jsx';
import MetaReview from './MetaReview.jsx';
import Form from './Form.jsx';

//hooks only in stateless components aka not classes
//reviews

const Reviews = ({ currentProductId, Container, Button, StarReview, currentProductRating }) => {
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

  let openForm = () => {
    formClick(prevState => true);
  };

  let closeForm = () => {
    formClick(prevState => false);
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
      <div><MetaReview metaReview={metaReview} StarReview = {StarReview} currentProductRating ={currentProductRating}/></div>
      <div><ReviewMapper reviewList={reviewList} /></div>
      <div><Form closeForm = {closeForm.bind(this)} form = {form}/></div>
      <div>
        <Button
          onClick={() => getTwoReviews(currentProductId)}>More Reviews</Button>
        <Button
          onClick={() => openForm()}>Add a Review + </Button></div>
    </Container>
  );
};

export default Reviews;


