import React, { useState, useEffect } from 'react';

import { MetaGrid, MetaRow, MetaCol, SummaryStar, Clickable, Styles, RateSpace, StyleSpace, SmallButton } from '../styles/reviewstyles/metaReviewStyles.styled.js';

const MetaReview = ({ metaReview, currentProductRating,filterRating, setFilterRating, toggleFilter, setTotalRatings, totalRatings }) => {
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
    setTotalRatings(total);
  };

  return (
    <MetaGrid> {metaReview.recommended ?
      <MetaRow>
        <div>< SummaryStar rating={currentProductRating} /></div>
        <h2>Average Review: {currentProductRating}</h2>
        <div> {recommended}% of reviewers recommend this product.</div>
        {/* <div>Rating Breakdown</div> */}
        <div> {filterRating.length !== 0 ? <SmallButton onClick={() => setFilterRating([])}> Remove all filters</SmallButton> : null}</div>
        <div>{[...ratingsArray].reverse().map(rating =>
          <Clickable onClick={() => toggleFilter(parseInt(rating.star))} key = {ratingsArray.indexOf(rating)}>
            <label>{rating.star} stars <RateSpace><progress value={rating.amount / totalRatings}/></RateSpace></label>
            <p><small>{rating.amount} ratings</small></p>
          </Clickable>)}</div>


        <MetaRow>{Object.entries(metaReview.characteristics).map(character =>
          <div key = {character}>
            {character[0]}
            <StyleSpace><Styles type='range' value={character[1].value} min='0' max='5'/></StyleSpace> </div>)}
        </MetaRow>

      </MetaRow> : 'Loading'
    }
    </MetaGrid >
  );
};


export default MetaReview;