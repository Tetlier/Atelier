import React, { useState, useEffect } from 'react';

const StyleRating = ({ metaReview, setCharRating, charRating }) => {
  //hooks to manage id and ratings
  const [currentId, setCurrentId] = useState(0);
  const [currentRating, setCurrentRating] = useState(null);

  //style rating explanations
  const [sizeRatingExplanation, setSizeRatingExplanation] = useState(null);
  const [widthRatingExplanation, setWidthRatingExplanation] = useState(null);
  const [comfortRatingExplanation, setComfortRatingExplanation] = useState(null);
  const [qualityRatingExplanation, setQualityRatingExplanation] = useState(null);
  const [lengthRatingExplanation, setLengthRatingExplanation] = useState(null);
  const [fitRatingExplanation, setFitRatingExplanation] = useState(null);

  //updates rating collection for form every time a character rating is chosen
  useEffect(() => {
    if (currentId) {
      charRating[currentId] = parseInt(currentRating);
      setCharRating(charRating);
    }
  }, [currentId]);

  //Updates rating and explanation on click for the characteristics
  let selection = (style, id, rating, setRatingExplanation) => {
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
    setCurrentId(id);
    setCurrentRating(rating);
    setRatingExplanation(obj[style][rating]);
  };

  return (
    <div>
      {/* <div>Characteristics Rating:</div> */}
      {Object.keys(metaReview.characteristics).map(characteristic => {
        return (
          <div key={characteristic}>
            {characteristic}<sup><font color="#ff0000">*</font></sup>:&nbsp; {[...Array(5)].map((rating, index) => {
              const thisRating = index + 1;
              return (
                <label key={thisRating}
                > {thisRating} <input
                    type='radio'
                    id={metaReview.characteristics[characteristic].id}
                    name={characteristic}
                    value={thisRating}
                    onClick={(event) => {
                      console.log();
                      selection(
                        event.target.name,
                        event.target.id,
                        event.target.value,
                        eval(`set${event.target.name}RatingExplanation`));
                    }}
                    required />
                </label>
              );
            })}
            <div>The {characteristic}: {eval(`${characteristic.toLowerCase()}RatingExplanation`)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StyleRating;