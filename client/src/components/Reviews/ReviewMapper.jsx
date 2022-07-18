import React from 'react';
import Review from './Review.jsx';


const ReviewMapper = ({ reviewList, StarReview, filterRating, currentSearch }) => {

  // //requirement variables

  //refactor in progress mass || does not work
  // let filterRatingExists = filterRating && filterRating.includes(review.rating);
  // let searchTermExists = currentSearch && review.summary.toLowerCase().includes(currentSearch.toLowerCase());
  // // //Cases
  // let bothExists = filterRatingExists && currentSearch && searchTermExists;
  // let filterExists = filterRatingExists && !searchTermExists;
  // let searchExists = !filterRatingExists && searchTermExists;
  // let bothDoNotExist = !filterRatingExists && !searchTermExists;

  // if (bothExists || filterExists || searchExists || bothDoNotExist) {
  //   console.log(review.rating, filterRating);
  //   return <Review review={review} key={reviewList.indexOf(review)} StarReview={StarReview} />;

  //mapper with filterRating and currentSearch filters applied

  return (
    <div>{reviewList.map(review => {
      if (filterRating.includes(review.rating) && currentSearch && review.summary.toLowerCase().includes(currentSearch.toLowerCase())) {
        return <Review review={review} key={reviewList.indexOf(review)} StarReview={StarReview} />;
      } else if (filterRating.includes(review.rating) && !currentSearch) {
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

export default ReviewMapper;