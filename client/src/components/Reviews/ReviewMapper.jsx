import React from 'react';
import Review from './Review.jsx';


const ReviewMapper = ({ reviewList, StarReview, filterRating, currentSearch }) => {

  //mapper with filterRating and currentSearch filters applied
  return (
    <div>{reviewList.map(review => {
      if (filterRating.includes(review.rating) && currentSearch && review.summary.toLowerCase().includes(currentSearch.toLowerCase())) {
        return <Review review={review} key={reviewList.indexOf(review)} StarReview={StarReview} />;
      } else if (filterRating.includes(review.rating && !currentSearch)) {
        return <Review review={review} key={reviewList.indexOf(review)} StarReview={StarReview} />;
      } else if (filterRating.length === 0 && currentSearch && review.summary.toLowerCase().includes(currentSearch.toLowerCase())) {
        return <Review review={review} key={reviewList.indexOf(review)} StarReview={StarReview} />;
      } else if (filterRating.length === 0 && !currentSearch) {
        return <Review review={review} key={reviewList.indexOf(review)} StarReview={StarReview} />;
      } else {
        null;
      }
    })
    }
    </div>
  );
};


//   //choose what to filter
//   return (
//     <div>{ reviewList.map(review =>
//       <Review review={review} key={reviewList.indexOf(review)} StarReview = {StarReview} />)}</div>
//   );
// };

export default ReviewMapper;