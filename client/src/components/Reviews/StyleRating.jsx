import React, { useState, useEffect } from 'react';

const StyleRating = ({ metaReview }) => {

  //styleRating hooks - one for the review one for the rating (event.value?)
  const [SizeRating, setSizeRating] = useState(null);
  const [WidthRating, setWidthRating] = useState(null);
  const [QualityRating, setQualityRating] = useState(null);
  const [LengthRating, setLengthRating] = useState(null);
  const [FitRating, setFitRating] = useState(null);
  const [ComfortRating, setComfortRating] = useState(null);

  //selection function that matches the character rating to its corresponding explanation
  let selection = (style, rating, setState) => {
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
    //make the fit here for each style for universal use
    setState(obj[style][rating]) ? setState(obj[style][rating]) : null;
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
                      onClick={(event) => { selection(event.target.name, event.target.value, eval(`set${event.target.name}Rating`)); }}></input></div>
                  </div>
                );
              })}
              </div>
              <div>This rating means: {eval(`${characteristic}Rating`)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StyleRating;