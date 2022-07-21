import React, { useState, useEffect } from 'react';
import { MetaGrid, MetaRow, MetaCol, SummaryStar, Clickable, Styles, RateSpace, StyleSpace, SmallButton } from '../styles/reviewstyles/metaReviewStyles.styled.js';

const MetaReview = ({ metaReview, currentProductRating, filterRating, setFilterRating, toggleFilter, setTotalRatings, totalRatings, setRefresh }) => {
  const [recommended, setRecommended] = useState(0);
  const [ratingsArray, setRatingsArray] = useState([]);

  //refreshes metaReview info when information to metareview, filterRating, and reviewList, form (post) are updated
  useEffect(() => {
    if (metaReview.recommended) {
      getRecommended(parseInt(metaReview.recommended.true), parseInt(metaReview.recommended.false));
      getRatings();
      // setRefresh(prevState => !prevState);
    }
  }, [metaReview]);

  //gets the overall recommendation of the product
  let getRecommended = (recommended, notRecommended) => {
    setRecommended(Math.round(100 * (recommended / (recommended + notRecommended))));
  };

  //obtains the count for each individual star rating, and the total count
  let getRatings = () => {
    let ratings = Object.entries(metaReview.ratings);
    let total = 0;
    let container = [];
    for (let i = 0; i < ratings.length; i++) {
      let starRatings = {};
      starRatings.star = ratings[i][0];
      starRatings.amount = ratings[i][1];
      container.push(starRatings);
      total += parseInt(ratings[i][1]);
    }
    setRatingsArray(container);
    setTotalRatings(total);
  };

  return (
    <MetaGrid> {metaReview.recommended ?
      <div>
        <MetaRow>
          <div>< SummaryStar rating={currentProductRating} /></div>
          <h2>Average Review: {currentProductRating}</h2>
          <div> {recommended}% of reviewers recommend this product.</div>
          {/* <div>Rating Breakdown</div> */}
          <div> {filterRating.length !== 0 ? <SmallButton onClick={() => setFilterRating([])}> Remove all filters</SmallButton> : <div>&nbsp;</div>} </div>
          <div>{[...ratingsArray].reverse().map(rating =>
            <Clickable onClick={() => toggleFilter(parseInt(rating.star))} key={ratingsArray.indexOf(rating)}>
              <label>{rating.star} stars <RateSpace><progress className='progressBar'
                value={rating.amount / totalRatings} /></RateSpace></label>
              <p><small>{rating.amount} ratings</small></p>
            </Clickable>)}</div>
        </MetaRow>
        <MetaRow>{Object.entries(metaReview.characteristics).map(character =>
          <div key={character}>
            {character[0]}
            <StyleSpace><Styles type='range' readOnly value={character[1].value} min='0' max='5' /></StyleSpace> </div>)}
        </MetaRow>
      </div> : 'Loading'
    }
    </MetaGrid >
  );
};


export default MetaReview;