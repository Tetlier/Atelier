import React from 'react';
import Review from './Review.jsx';


const ReviewMapper = ({ reviewList, filterRating, currentSearch, setRefresh }) => {

  return (
    <div>{reviewList.map((review, index) => {
      if (filterRating.includes(review.rating) && currentSearch && review.summary.toLowerCase().includes(currentSearch.toLowerCase())) {
        return <Review review={review} key={review.review_id} setRefresh={setRefresh} />;
      } else if (filterRating.includes(review.rating) && !currentSearch) {
        return <Review review={review} key={review.review_id} setRefresh={setRefresh} />;
      } else if (filterRating.length === 0 && currentSearch && review.summary.toLowerCase().includes(currentSearch.toLowerCase())) {
        return <Review review={review} key={review.review_id} setRefresh={setRefresh} />;
      } else if (filterRating.length === 0 && !currentSearch) {
        return <Review review={review} key={review.review_id} setRefresh={setRefresh} />;
      } else {
        return null;
      }
    })
    }
    </div>
  );
};

export default ReviewMapper;