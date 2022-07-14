import React from 'react';
import Review from './Review.jsx';


const ReviewMapper = ({ reviewList, StarReview, filterRating }) => {

  return (
    <div>{reviewList.map(review => {
      if (filterRating.includes(review.rating)) {
        return <Review review={review} key={reviewList.indexOf(review)} StarReview={StarReview} />;
      } else if (filterRating.length === 0) {
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