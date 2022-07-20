// tests Q&A widget - QuestionForm component
import ReactDom from 'react-dom';
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import {toBeInTheDocument, within} from '@testing-library/jest-dom';
import {act} from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import axios from 'axios';

import QuestionForm from '../../../client/src/components/Q-A/QuestionForm.jsx';

import exampleData from './exampleData';

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('QuestionForm Component', () => {
  // props passed into QuestionForm component
  let triggered = true;
  let setTrigger = () => { triggered = false; };
  let productId = 40344;
  let setQuestions = (newQuestions) => { questions = newQuestions; };
  let productName = 'Heir Force Ones';

  it ('should render QuestionForm component', async() => {
    await act(async() => {
      render(<QuestionForm
        triggered={triggered}
        setTrigger={setTrigger}
        productId={productId}
        setQuestions={setQuestions}
        productName={productName}/>);
    });
    let questionFormPart = screen.getByText(/Ask your Question/);
    expect(questionFormPart).toBeInTheDocument();
  });

  // it('should increase a question\s helpfulness', async() => {
  //   axios.get.mockResolvedValue(exampleData.getAnswers);
  //   await act(async() => {
  //     render(<Question
  //       productId={productId}
  //       question={question}
  //       questions={questions}
  //       setQuestions={setQuestions}
  //       sessionCookie={sessionCookie}
  //       addToCookie={addToCookie}
  //       sellerName={sellerName}
  //       productName={productName}/>);
  //   });
  //   const helpfulnessClickable = screen.getAllByText(/(3)/);
  //   fireEvent(
  //     helpfulnessClickable[0],
  //     new MouseEvent('click', {
  //       bubbles: true,
  //       cancelable: true
  //     }),
  //   );
  //   cleanup();
  //   await act(async() => {
  //     render(<Question
  //       productId={productId}
  //       question={question}
  //       questions={questions}
  //       setQuestions={setQuestions}
  //       sessionCookie={sessionCookie}
  //       addToCookie={addToCookie}
  //       sellerName={sellerName}
  //       productName={productName}/>);
  //   });
  //   const newHelpfulness = screen.getByText(/(4)/);
  //   expect(newHelpfulness).toBeInTheDocument();
  // });

});
