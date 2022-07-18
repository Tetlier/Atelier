import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { HiddenRadio, Stars } from '../styles/reviewstyles/formStyles.styled.js';

const StarRating = ({starRating, setStarRating}) => {

  //Starrating hooks
  const [hover, setHover] = useState(null);
  const [starExplanation, setStarExplanation] = useState(null);

  //find matching selection for the explanation displayed for each rating. Runs every time rating changes
  useEffect(() => {
    const obj = {
      '1': 'Poor',
      '2': 'Fair',
      '3': 'Average',
      '4': 'Good',
      '5': 'Great',
    };
    return setStarExplanation(obj[starRating]);
  }, [starRating]);

  useEffect(()=> {
    console.log(starRating, hover);
  }, [starRating, hover]);

  return (
    <div>Rating: {starExplanation ? starExplanation : null}<div>
      {[...Array(5)].map((star, index) => {
        const starVal = index + 1;
        return (
          <Stars key = {starVal}>
            <HiddenRadio
              type='radio'
              name='star'
              value={starVal}
              onClick={() => setStarRating(starVal)}
              required
            />
            <FaStar
              size='25'
              color={(starVal <= hover || starVal <= starRating) ? '#ffc107' : '#w4w5e9' }
              onMouseEnter={() => setHover(starVal)}
              onMouseLeave={() => setHover(null)} />

          </Stars>
        );
      })}
    </div>
    </div>
  );
};

export default StarRating;