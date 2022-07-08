import React from 'react';

const Review = (props) => {

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
      <div>{props.review.rating}</div>
      <div>{props.review.date}</div>Í
      <div>{props.review.summary}</div>
      <div>{props.review.body}</div>
      <div>{props.review.recommended}</div>
      <div>{props.review.helpfulness}</div>
    </div>
  );
};

export default Review;