import React, { useState } from 'react';
import { SingleReviewStars } from '../styles/reviewstyles/SingleReviewStars.styled.js';
import { ThumbNail } from '../styles/reviewstyles/ThumbNail.styled.js';
import { Background } from '../styles/reviewstyles/FormBackground.styled.js';
import { LargePhoto } from '../styles/reviewstyles/LargePhoto.styled.js';

const Review = ({ review, StarReview }) => {

  const [restriction, toggle] = useState(false);
  const [clicked, controlClicks] = useState(false);
  const [image, togglePhoto] = useState(false);

  let toggleRestriction = () => {
    toggle(prevState => !prevState);
  };

  let oneClick = () => {
    controlClicks(prevState => !prevState);
  };

  let clickPhoto = () => {
    togglePhoto(prevState => !prevState);
  };

  const enlargeThumbnail = (photo) => {
    return (
      <Background onClick={() => clickPhoto()}>
        <LargePhoto src={photo.url} />
      </Background>
    );
  };

  let submitHelpfulness = () => {
    //will be an axios function to post the value
  };

  let getDate = () => {
    return new Date(review.date).toLocaleString('en-us', {
      month: 'long',
      date: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div>
      <div> <SingleReviewStars rating={review.rating} /></div>
      <b> {review.summary}</b>
      <div>{getDate()}</div>
      {review.recommend ? <div> I recommend this product ✅</div> : null}
      {restriction ? <div maxLength={250}>{review.body}</div> : <div>{review.body}</div>}
      {review.body.length > 250 ?
        <button
          onClick={() => toggleRestriction()}>{restriction ? 'Show More' : 'Show Less'}</button> : null}
      {review.response ? <i>Response from seller: {review.response}</i> : null}


      <div>{review.photos.map(photo => <div> {image ? enlargeThumbnail(photo) : <ThumbNail
        onClick={() => clickPhoto()}
        src={photo.url}
        key={`${photo.url}`} />}</div>)}</div>


      {!clicked ? <div>Was this review helpful?
        <button
          onClick={() => oneClick()}>Yes</button>
        <button
          onClick={() => oneClick()}>No</button></div> : 'Response Recorded'}
    </div>
  );
};

export default Review;