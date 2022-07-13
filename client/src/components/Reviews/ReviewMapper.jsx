// import React, { useState } from 'react';
import React from 'react';
import Review from './Review.jsx';

const ReviewMapper = ({ reviewList, StarReview }) => {
  return (
    <div>{reviewList.map(review =>
      <Review review={review} key={reviewList.indexOf(review)} StarReview = {StarReview} />)}</div>
  );
};

export default ReviewMapper;