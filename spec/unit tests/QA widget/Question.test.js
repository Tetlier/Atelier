// tests Q&A widget - Question component
import ReactDom from 'react-dom';
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import {toBeInTheDocument, within} from '@testing-library/jest-dom';
import {act} from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import axios from 'axios';

import Question from '../../../client/src/components/Q-A/Question.jsx';
import { InLineButton } from '../../../client/src/components/styles/Q-A/InlineButton.styled.js';

import exampleData from './exampleData';

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Question Component', () => {
  // props passed into Question component
  let productId = 40344;
  let question = exampleData.getQuestions40344.data[0];
  let questions = exampleData.getQuestions40344.data;
  let setQuestions = (newQuestions) => { questions = newQuestions; };
  let sessionCookie = {
    's_id': document.cookie.slice(5),
    actions: []
  };
  let addToCookie = function(id, action) {
    action = action.toLowerCase();
    // adds id number + h or r for helpful or reported
    sessionCookie.actions.push(id + action.slice(0, 1));
  };
  let sellerName = 'atelier';
  let productName = 'Heir Force Ones';

  it ('should render Question component', async() => {
    axios.get.mockResolvedValue(exampleData.getAnswers);
    await act(async() => {
      render(<Question
        productId={productId}
        question={question}
        questions={questions}
        setQuestions={setQuestions}
        sessionCookie={sessionCookie}
        addToCookie={addToCookie}
        sellerName={sellerName}
        productName={productName}/>);
    });
    let questionPart = screen.getByText(/Q:/);
    expect(questionPart).toBeInTheDocument();
  });

  it('should increase a question\s helpfulness', async() => {
    axios.get.mockResolvedValue(exampleData.getAnswers);
    await act(async() => {
      render(<Question
        productId={productId}
        question={question}
        questions={questions}
        setQuestions={setQuestions}
        sessionCookie={sessionCookie}
        addToCookie={addToCookie}
        sellerName={sellerName}
        productName={productName}/>);
    });
    const helpfulnessClickable = screen.getAllByText(/(3)/);
    fireEvent(
      helpfulnessClickable[0],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      }),
    );
    cleanup();
    await act(async() => {
      render(<Question
        productId={productId}
        question={question}
        questions={questions}
        setQuestions={setQuestions}
        sessionCookie={sessionCookie}
        addToCookie={addToCookie}
        sellerName={sellerName}
        productName={productName}/>);
    });
    const newHelpfulness = screen.getByText(/(4)/);
    expect(newHelpfulness).toBeInTheDocument();
  });

});
