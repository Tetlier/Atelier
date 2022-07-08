import React from 'react';
import Review from './Review.jsx';

const ReviewMapper = (props) => {
  return (
    <div>{props.reviewList.map(review =>
      <Review review={review} key={reviewList.indexOf(review)} />)}</div>
  );
};

export default ReviewMapper;