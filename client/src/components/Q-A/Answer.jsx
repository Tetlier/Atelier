import React, {useState, useEffect} from 'react';

export default function Answer ({answer}) {
  let answerDate = new Date(answer.date);
  let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  let month = monthArr[answerDate.getMonth()];
  let day = answerDate.getDate();
  let year = answerDate.getFullYear();

  return (
    <div className="answer">
      <div className="answer-body">A: {answer.body}</div>
      <div className="answer-footer">by {answer.answerer_name}, {month} {day}, {year} {'\n'}</div>
    </div>
  );
}