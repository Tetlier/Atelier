import React from 'react';

const Review = ({review}) => {

  // "review_id": 1274559,
  // "rating": 3,
  // "summary": "this is kevin's summary",
  // "recommend": true,
  // "response": null,
  // "body": "let''s sogooooo get it together",
  // "date": "2022-05-26T00:00:00.000Z",
  // "reviewer_name": "mynickname",
  // "helpfulness": 3,
  // "photos": []

  return (
    <div>
      <div>Rating: {review.rating}</div>
      <div>Date: {review.date}</div>
      <div>Summary: {review.summary}</div>
      <div>Body: {review.body}</div>
      <div>{review.recommended ? 'I recommend this product' : null}</div>
      <div>Helpfulness: {review.helpfulness}</div>
    </div>
  );
};

export default Review;