import React, { useState, useEffect } from 'react';
import { SummaryStar } from '../styles/reviewstyles/SummaryStar.styled.js';
import { RatingDiv } from '../styles/reviewstyles/RatingDiv.styled.js';

const MetaReview = ({ metaReview, currentProductRating, filterRating, setFilterRating }) => {
  const [recommended, setRecommended] = useState(0);
  const [ratingsArray, setRatingsArray] = useState([]);
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    if (metaReview.recommended) {
      getRecommended(parseInt(metaReview.recommended.true), parseInt(metaReview.recommended.false));
      getRatings();
    }
  }, [metaReview]);

  let getRecommended = (recommended, notRecommended) => {
    setRecommended(Math.round(100 * (recommended / (recommended + notRecommended))));
  };


  //obtains the count for each individual star rating, and the total count
  let getRatings = () => {
    let eachStar = Object.keys(metaReview.ratings);
    let eachAmount = Object.values(metaReview.ratings);
    let total = 0;
    for (let i = 0; i < eachStar.length; i++) {
      let starRatings = {};
      starRatings.star = eachStar[i];
      starRatings.amount = eachAmount[i];
      ratingsArray.push(starRatings);
      setRatingsArray(ratingsArray);
      total += parseInt(eachAmount[i]);
    }
    setTotalRatings(total);
    console.log('ratingsArray', ratingsArray, totalRatings);
  };

  //Adds and removes rating filters
  let toggleFilter = (rating) => {
    if (filterRating.includes(rating)) {
      let position = filterRating.indexOf(rating);
      filterRating.splice(position, 1);
      setFilterRating(filterRating);
    } else {
      filterRating.push(rating);
      setFilterRating(filterRating);
    }
  };

  return (
    <div> {metaReview.recommended ?
      <div>
        <h2>Average Review: {currentProductRating} < SummaryStar rating={currentProductRating} /></h2>
        <div>out of {totalRatings} ratings</div>
        <div> {recommended}% of reviewers recommend this product.</div>
        <div>Rating Breakdown</div>
        <div> {filterRating.length !== 0 ? <button onClick={() => setFilterRating([])}> Remove all filters</button> : null}</div>
        <div>{ratingsArray.map(rating =>
          <RatingDiv onClick={() => toggleFilter(parseInt(rating.star))}>
            <div>{rating.star} stars <progress value={rating.amount / totalRatings}></progress></div>
            <div>{rating.amount} ratings</div>
          </RatingDiv>)}</div>
        <div>{Object.entries(metaReview.characteristics).map(character =>
          <div>
            <div>{character[0]}</div>
            <input type='range' value={character[1].value} min='0' max='5'></input> </div>)}
        </div>

      </div> : 'Loading'
    }
    </div >
  );
};


export default MetaReview;