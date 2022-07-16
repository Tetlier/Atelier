import React, { useState, useEffect } from 'react';

import { MetaGrid, MetaRow, MetaCol, SummaryStar, Clickable } from '../styles/reviewstyles/metaReviewStyles.styled.js';

const MetaReview = ({ metaReview, currentProductRating, filterRating, setFilterRating, toggleFilter, setTotalRatings, totalRatings }) => {
  const [recommended, setRecommended] = useState(0);
  const [ratingsArray, setRatingsArray] = useState([]);


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
    console.log('fc', typeof setTotalRatings, 'val', totalRatings);
    setTotalRatings(total);
  };

  return (
    <MetaGrid> {metaReview.recommended ?
      <MetaRow>
        <div>< SummaryStar rating={currentProductRating} /></div>
        <h2>Average Review: {currentProductRating}</h2>
        <div> {recommended}% of reviewers recommend this product.</div>
        <div>Rating Breakdown</div>
        <div> {filterRating.length !== 0 ? <button onClick={() => setFilterRating([])}> Remove all filters</button> : null}</div>
        <div>{ratingsArray.reverse().map(rating =>
          <Clickable onClick={() => toggleFilter(parseInt(rating.star))} key = {rating + 'techdebt2'}>
            <div>{rating.star} stars <progress value={rating.amount / totalRatings}></progress></div>
            <div>{rating.amount} ratings</div>
          </Clickable>)}</div>
        <div>{Object.entries(metaReview.characteristics).map(character =>
          <div key = {character + 'techdebt1'}>
            <div>{character[0]}</div>
            <input type='range' value={character[1].value} min='0' max='5'></input> </div>)}
        </div>

      </MetaRow> : 'Loading'
    }
    </MetaGrid >
  );
};


export default MetaReview;