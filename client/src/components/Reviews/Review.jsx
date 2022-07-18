import React, { useState, useEffect } from 'react';
import { ThumbNail, FullSize } from '../styles/reviewstyles/imageStyles.styled.js';
import { Background } from '../styles/reviewstyles/FormBackground.styled.js';
import axios from 'axios';

import { ReviewGrid, ReviewRow, ReviewCol, ReviewStars } from '../styles/reviewstyles/ReviewStyles.styled.js';

const Review = ({ review, StarReview }) => {

  const [restriction, setRestriction] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState(false);

  //broken. Shows ALL images
  const enlargeThumbnail = (img) => {
    console.log(img);
    return (
<<<<<<< HEAD
      <Background key={`${photo.url}`} onClick={() => clickPhoto()}>
        <LargePhoto src={photo.url} />
=======
      <Background onClick={() => setImage(!image)}>
        <FullSize src={img} />
>>>>>>> main
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
    <ReviewGrid>
      <ReviewRow>
        <ReviewCol size='4.25'>
          <ReviewStars rating={review.rating} />
        </ReviewCol>
        <ReviewCol size='2'>
          <div>By {review.reviewer_name} on {getDate()}</div>
        </ReviewCol>
      </ReviewRow>
      <ReviewRow><b> {review.summary}</b></ReviewRow>
      {review.recommend ? <div> I recommend this product ✅</div> : null}
      {restriction ? <div maxLength={250}>{review.body}</div> : <div>{review.body}</div>}
      {review.body.length > 250 ?
        <button
          onClick={() => setRestriction(!restriction)}>{restriction ? 'Show More' : 'Show Less'}</button> : null}
      {review.response ? <i>Response from seller: {review.response}</i> : null}

      <ReviewRow>{[...review.photos].map(photo => <ReviewCol> {image ? enlargeThumbnail(photo.url) : <ThumbNail
        onClick={() => setImage(!image)}
        src={photo.url}
        key={`${photo.url}`} />}</ReviewCol>)}</ReviewRow>


      {!clicked ? <div>Was this review helpful?
        <button
          onClick={() => submitHelpful(review.review_id)}>Yes</button>
        <button
          onClick={() => setClicked(true)}>No</button></div> : 'Response Recorded'}
    </ReviewGrid>
  );
};

export default Review;