import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Answer from './Answer';
import AnswerForm from './AnswerForm';
import { QorATitle, QAside, LinkHover, ClickedLink, QuestionBody, LoadMore } from '../styles/Q-A/QAList.styled.js';
import { InlineButton } from '../styles/Q-A/InlineButton.styled';

export default function Question({productId, question, questions, setQuestions, sessionCookie, addToCookie, sellerName, productName}) {
  const [answerCount, setAnswerCount] = useState(2);
  const [answers, setAnswers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [addAnswer, setAddAnswer] = useState(false);

  useEffect(() => {
    let config = { params: {
      count: answerCount + 1, // gets one more answer to see if there are more
      sellerName: sellerName
    } };
    axios.get(`/qa/questions/${question.question_id}/answers`, config)
      .then((ans) => {
        // tests if there are more answers
        if (ans.data.length > answerCount) {
          setHasMore(true);
          if (answerCount === 2) {
            // slices off the extra answer
            setAnswers(ans.data.slice(0, ans.data.length - 1));
          }
        } else {
          setHasMore(false);
          setAnswers(ans.data);
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      });

  }, [answerCount]);

  const markHelpful = function() {
    // adds question to cookie
    addToCookie(question.question_id, 'helpful');
    // updates questions array with new helpfulness count
    let indexOfQ = questions.indexOf(question);
    let newQuestions = questions.slice();
    newQuestions[indexOfQ].question_helpfulness++;
    setQuestions(newQuestions);
    // axios call to database
    axios.put(`/qa/questions/${question.question_id}/helpful`)
      .then(() => {
        console.log('increased helpfulness');
      })
      .catch((err) => {
        // revert back to original helpfulness count if error
        setQuestions(questions);
        console.log('Error: ', err);
      });
  };

  const reportQuestion = function() {
    let confirmed = window.confirm('Do you really want to report this question?');
    if (confirmed) {
      // adds question to cookie (no need to test if already added since reported questions will not be gotten)
      addToCookie(question.question_id, 'reported');
      // updates questions array with reported
      let indexOfQ = questions.indexOf(question);
      let newQuestions = questions.slice();
      newQuestions[indexOfQ].reported = true;
      setQuestions(newQuestions);
      // axios call to database
      axios.put(`/qa/questions/${question.question_id}/report`)
        .then(() => {
          window.alert('Question reported');
        })
        .catch((err) => {
          // revert back to original helpfulness count if error
          setQuestions(questions);
          console.log('Error: ', err);
        });
    } else {
      console.log('Not reported');
    }
  };

  return (
    <div className="question-and-answer">
      <QorATitle>
        <QuestionBody>
          <h4>Q: {question.question_body}</h4>
        </QuestionBody>
        <QAside>
          Helpful?&nbsp;
          {/* if not marked as helpful before */}
          {(document.cookie.slice(5) !== sessionCookie.s_id ||
            !(sessionCookie.actions.includes(question.question_id + 'h'))) &&
            <LinkHover onClick={() => markHelpful()}>
            Yes {`(${question.question_helpfulness})`}
            </LinkHover>
          }
          {/* if already marked as helpful */}
          {(document.cookie.slice(5) === sessionCookie.s_id &&
            (sessionCookie.actions.includes(question.question_id + 'h'))) &&
            <ClickedLink>Yes {`(${question.question_helpfulness})`}</ClickedLink>
          }
          <span> | </span>
          {/* if question has not been reported */}
          {!(question.reported) &&
            <LinkHover
              onClick={() => reportQuestion()}>
              Report
            </LinkHover>
          }
          {/* if question has been reported */}
          {(question.reported) &&
            <ClickedLink>Reported</ClickedLink>
          }
          <span> | </span>
          <LinkHover onClick={() => setAddAnswer(true)}>
            Add Answer
          </LinkHover>
        </QAside>
      </QorATitle>
      {answers.length > 0 &&
        <div>
          <QorATitle>
            <h4>A: </h4>
          </QorATitle>
          <div>
            {answers.map((answer, index) =>
              <Answer key={answer.answer_id}
                answer={answer}
                answers={answers}
                setAnswers={setAnswers}
                sessionCookie={sessionCookie}
                addToCookie={addToCookie}
                sellerName={sellerName}
              />
            )}
            {hasMore &&
            <LoadMore onClick={() => {
              setAnswerCount(100);
              setHasMore(false);
            }}>LOAD MORE ANSWERS</LoadMore>
            }
            {(!hasMore && answerCount > 2) &&
            <LoadMore onClick={() => {
              setAnswerCount(2);
              setHasMore(true);
              setAnswers(answers.slice(0, 2));
            }}>COLLAPSE ANSWERS</LoadMore>
            }
          </div>
        </div>
      }
      <AnswerForm
        triggered={addAnswer}
        setTrigger={setAddAnswer}
        questionBody={question.question_body}
        questionId={question.question_id}
        productName={productName}
        setAnswers={setAnswers}
        sellerName={sellerName}
      />
    </div>
  );
}