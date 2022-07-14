import React, { useState, useEffect } from 'react';
import { SingleReviewStars } from '../styles/reviewstyles/SingleReviewStars.styled.js';
import { ThumbNail } from '../styles/reviewstyles/ThumbNail.styled.js';
import { Background } from '../styles/reviewstyles/FormBackground.styled.js';
import { LargePhoto } from '../styles/reviewstyles/LargePhoto.styled.js';
import { SingleReview } from '../styles/reviewstyles/SingleReview.styled.js';
import { ReviewComponent } from '../styles/reviewstyles/ReviewComponent.styled.js';
import axios from 'axios';

const Review = ({ review, StarReview }) => {

  const [restriction, setRestriction] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState(false);

  const enlargeThumbnail = (photo) => {
    return (
      <Background onClick={() => setImage(!image)}>
        <LargePhoto src={photo.url} />
      </Background>
    );
  };

  let submitHelpful = (id) => {
    // eslint-disable-next-line camelcase
    axios.put('/reviews', { review_id: id })
      .then(() => setClicked(true))
      .catch(err => err);
  };

  let getDate = () => {
    return new Date(review.date).toLocaleString('en-us', {
      month: 'long',
      date: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <SingleReview>
      <ReviewComponent> <SingleReviewStars rating={review.rating} /></ReviewComponent>
      <ReviewComponent><b> {review.summary}</b></ReviewComponent>
      <div>{getDate()}</div>
      {review.recommend ? <div> I recommend this product ✅</div> : null}
      <div>{review.reviewer_name}</div>
      {restriction ? <div maxLength={250}>{review.body}</div> : <div>{review.body}</div>}
      {review.body.length > 250 ?
        <button
          onClick={() => setRestriction(!restriction)}>{restriction ? 'Show More' : 'Show Less'}</button> : null}
      {review.response ? <i>Response from seller: {review.response}</i> : null}


      <div>{review.photos.map(photo => <div> {image ? enlargeThumbnail(photo) : <ThumbNail
        onClick={() => setImage(!image)}
        src={photo.url}
        key={`${photo.url}`} />}</div>)}</div>


      {!clicked ? <div>Was this review helpful?
        <button
          onClick={() => submitHelpful(review.review_id)}>Yes</button>
        <button
          onClick={() => setClicked(true)}>No</button></div> : 'Response Recorded'}
    </SingleReview>
  );
};

export default Review;