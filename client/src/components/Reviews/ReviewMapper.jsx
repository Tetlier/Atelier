// import React, { useState } from 'react';
import React from 'react';
import Review from './Review.jsx';

const ReviewMapper = ({ reviewList }) => {
  return (
    <div>{reviewList.map(review =>
      <Review review={review} key={reviewList.indexOf(review)} />)}</div>
  );
};

export default ReviewMapper;