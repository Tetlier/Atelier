import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import QuestionForm from './QuestionForm';
import { Button } from '../styles/Button.styled.js';
import { ScrollList } from '../styles/Q-A/ScrollList.styled';

export default function QuestionList({productId, searchTerm, sessionCookie, addToCookie, sellerName, productName}) {
  // array of questions
  const [questions, setQuestions] = useState([]);
  // current number of questions to display
  const [questionCount, setQuestionCount] = useState(2);
  // whether there are more questions or not
  const [hasMore, setHasMore] = useState(true);
  // whether to show the add question modal or not
  const [addQuestion, setAddQuestion] = useState(false);

  // when searchTerm is updated, will update list of questions
  useEffect(() => {
    let config = { params: {
      id: productId,
      count: questionCount + 1, // gets one more question to see if there are more
      filter: searchTerm
    } };
    axios.get('/qa/questions', config)
      .then((qs) => {
        // tests if there are more questions
        if (qs.data.length > questionCount) {
          setHasMore(true);
          // slices off the extra question
          setQuestions(qs.data.slice(0, qs.data.length - 1));
        } else {
          setHasMore(false);
          setQuestions(qs.data);
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    // limits refresh to every 1 s
    setTimeout(() => {}, 1000);
  }, [searchTerm, questionCount]);

  return (
    <div className="questionList">
      <ScrollList>
        {questions.length > 0 &&
          <div>
            {questions.map((question, index) =>
              <Question
                key={question.question_id}
                productId={productId}
                question={question}
                questions={questions}
                setQuestions={setQuestions}
                sessionCookie={sessionCookie}
                addToCookie={addToCookie}
                sellerName={sellerName}
                productName={productName}
              /> )}
          </div>
        }
      </ScrollList>
      <br></br>
      {hasMore &&
        <Button onClick={() => setQuestionCount(questionCount + 2)}>More Answered Questions</Button>
      }
      <Button onClick={() => setAddQuestion(true)}>Add a Question +</Button>
      <QuestionForm
        triggered={addQuestion}
        setTrigger={setAddQuestion}
        productId={productId}
        setQuestions={setQuestions}
        questionCount={questionCount}
        searchTerm={searchTerm}
        productName={productName}
      />
    </div>
  );
}