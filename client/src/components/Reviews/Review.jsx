import React, { useState, useEffect } from 'react';
import { ThumbNail, FullSize, VerySmallButton } from '../styles/reviewstyles/imageStyles.styled.js';
import { Background } from '../styles/reviewstyles/FormBackground.styled.js';
import { ReviewArea } from '../styles/reviewstyles/ReviewStyles.styled.js';
import { FcCheckmark } from 'react-icons/fc';
import axios from 'axios';

import { ReviewGrid, ReviewRow, ReviewCol, ReviewStars } from '../styles/reviewstyles/ReviewStyles.styled.js';

const Review = ({ review, setRefresh }) => {

  const [restriction, setRestriction] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [enlarged, setEnlarged] = useState(new Array(review.photos.length).fill(false));

  //enlarges thumbnail and changes array values of true and false for each image
  const enlargeThumbnail = (img, index) => {
    console.log(img);
    return (
      <Background onClick={() => {
        let newDecreasedState = enlarged.slice();
        newDecreasedState[index] = false;
        setEnlarged(newDecreasedState);
      }}>
        <FullSize src={img} />
      </Background>
    );
  };

  let submitHelpful = (id) => {
    // eslint-disable-next-line camelcase
    axios.put('/reviews', { review_id: id })
      .then(() => { setClicked(true); setRefresh(prevState => !prevState); })
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
          <p><small>by {review.reviewer_name} on {getDate()}</small></p>
        </ReviewCol>
      </ReviewRow>
      <ReviewRow><b> {review.summary}</b></ReviewRow>
      {review.recommend ? <p><small> I recommend this product </small><FcCheckmark /></p> : null}
      {restriction ? <ReviewArea maxLength={250}>{review.body}</ReviewArea> : <ReviewArea>{review.body}</ReviewArea>}
      {review.body.length > 250 ?
        <button
          onClick={() => setRestriction(!restriction)}>{restriction ? 'Show More' : 'Show Less'}</button> : null}
      {review.response ? <i>Response from seller: {review.response}</i> : null}

      <ReviewRow>{[...review.photos].map((photo, index) => <ReviewCol key={photo.url}> {enlarged[index] ? enlargeThumbnail(photo.url, index) : <ThumbNail
        onClick={() => {
          let newEnlargedState = enlarged.slice();
          newEnlargedState[index] = true;
          setEnlarged(newEnlargedState);
        }}
        src={photo.url}
        key={photo.url} />}</ReviewCol>)}</ReviewRow>


      {!clicked ? <div>Was this review helpful?
        <VerySmallButton
          onClick={() => submitHelpful(review.review_id)}>Yes</VerySmallButton>
        <VerySmallButton
          onClick={() => setClicked(true)}>No</VerySmallButton></div> : <b><small>Response Recorded</small></b>}
      <p><small>{review.helpfulness} person(s) found this review helpful.</small></p>
    </ReviewGrid>
  );
};

export default Review;