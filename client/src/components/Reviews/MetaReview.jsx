import React, { useState, useEffect } from 'react';
import { SummaryStar } from '../styles/reviewstyles/SummaryStar.styled.js';

const MetaReview = ({ metaReview, currentProductRating }) => {
  const [recommended, changeRecommended] = useState(0);

  useEffect(() => {
    if (metaReview.recommended) {
      getRecommended(parseInt(metaReview.recommended.true), parseInt(metaReview.recommended.false));
    }
  }, [metaReview]);

  let getRecommended = (recommended, notRecommended) => {
    changeRecommended(prevState => Math.round(100 * (recommended / ( recommended + notRecommended))));
  };

  return (
    <div> {metaReview.recommended ?
      <div>
        <h2>Average Review: {currentProductRating} < SummaryStar rating={currentProductRating} /></h2>
        <div> {recommended}% of reviewers recommend this product.</div>
        <div></div>
        <div>5 stars <progress value = {1 / 23}></progress></div>
        <div>4 stars</div>
        <div>3 stars</div>
        <div>2 stars</div>
        <div>1 star</div>

      </div> : 'Loading'}
    </div>
  );
};


export default MetaReview;