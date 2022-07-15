import React, { useState, useEffect } from 'react';

const StyleRating = ({ metaReview, setCharRating }) => {
  //style rating values
  const [sizeRating, setSizeRating] = useState(null);
  const [widthRating, setWidthRating] = useState(null);
  const [comfortRating, setComfortRating] = useState(null);
  const [qualityRating, setQualityRating] = useState(null);
  const [lengthRating, setLengthRating] = useState(null);
  const [fitRating, setFitRating] = useState(null);

  //style rating explanations
  const [sizeRatingExplanation, setSizeRatingExplanation] = useState(null);
  const [widthRatingExplanation, setWidthRatingExplanation] = useState(null);
  const [comfortRatingExplanation, setComfortRatingExplanation] = useState(null);
  const [qualityRatingExplanation, setQualityRatingExplanation] = useState(null);
  const [lengthRatingExplanation, setLengthRatingExplanation] = useState(null);
  const [fitRatingExplanation, setFitRatingExplanation] = useState(null);

  //Updates rating and explanation on click for the characteristics
  let selection = (style, rating, setRating, setRatingExplanation) => {
    const obj = {
      Size: {
        1: 'A size too small',
        2: '1/2 a size too small',
        3: 'Perfect',
        4: '1/2 a size too big',
        5: 'A size too wide',
      },
      Width: {
        1: 'Too narrow',
        2: 'Slightly narrow',
        3: 'Perfect',
        4: 'Slightly wide',
        5: 'Too wide',
      },
      Comfort: {
        1: 'Uncomfortable',
        2: 'Slightly uncomfortable',
        3: 'Ok',
        4: 'Comfortable',
        5: 'Perfect',
      },
      Quality: {
        1: 'Poor',
        2: 'Below average',
        3: 'What I expected',
        4: 'Pretty great',
        5: 'Perfect',
      },
      Length: {
        1: 'Runs short',
        2: 'Runs slightly short',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long',
      },
      Fit: {
        1: 'Runs tight',
        2: 'Runs slightly tight',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long',
      },
    };
    setRating(rating);
    setRatingExplanation(obj[style][rating]);
  };

  return (
    <div>
      <div>Characteristics:</div>
      <div>
        {Object.keys(metaReview.characteristics).map(characteristic => {

          return (
            <div>
              <div> {characteristic} : {[...Array(5)].map((rating, index) => {
                const thisRating = index + 1;
                return (
                  <div>
                    <div
                    > {thisRating} <input
                      type='radio'
                      name={characteristic}
                      value={thisRating}
                      onClick={(event) => {
                        selection(
                          event.target.name,
                          event.target.value,
                          eval(`set${event.target.name}Rating`),
                          eval(`set${event.target.name}RatingExplanation`));
                      }}></input></div>
                  </div>
                );
              })}
              </div>
              <div>This rating means: {eval(`${characteristic.toLowerCase()}RatingExplanation`)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StyleRating;