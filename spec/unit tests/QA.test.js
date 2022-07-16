// tests Q&A widget
import ReactDom from 'react-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom';
import {act} from 'react-dom/test-utils';
import axios from 'axios';

import QA from '../../client/src/components/Q-A/QA.jsx';
import QuestionList from '../../client/src/components/Q-A/QuestionList';
import * as exampleData from './exampleData';

jest.mock('axios');

describe('Question and Answer Widget', () => {
  // props passed into QA component
  const productId = 40344;
  const sessionCookie = {
    's_id': document.cookie.slice(5),
    actions: []
  };
  const addToCookie = function(id, action) {
    action = action.toLowerCase();
    // adds id number + h or r for helpful or reported
    sessionCookie.actions.push(id + action.slice(0, 1));
  };

  it('should render the Q & A component', async() => {
    axios.get.mockResolvedValue(exampleData.getProduct40344);
    await act(async() => {
      render(<QA productId={productId} sessionCookie={sessionCookie} addToCookie={addToCookie}/>);
    });
    const listElement = screen.getByText('Questions & Answers');
    expect(listElement).toBeInTheDocument();
  });

  it('should get product product name upon rendering', async() => {
    axios.get.mockResolvedValue(exampleData.getProduct40344);
    await act(async() => {
      render(<QA productId={productId} sessionCookie={sessionCookie} addToCookie={addToCookie}/>);
    });
    const listElement = screen.getByText('Questions & Answers');
    expect(listElement).toBeInTheDocument();
  });

  it('should log error if axios request returns an error', async() => {
    const logSpy = jest.spyOn(console, 'log');
    axios.get.mockResolvedValue({});
    await act(async() => {
      render(<QA productId={productId} sessionCookie={sessionCookie} addToCookie={addToCookie}/>);
    });
    expect(logSpy).toHaveBeenCalledWith('Error: ', expect.anything());
  });
});

// describe('Question List Component', () => {
//   it('should render an Add Question button', () => {
//     render(<QuestionList/>);
//     const listElement = screen.getByText('ADD A QUESTION +');
//     expect(listElement).toBeInTheDocument();
//   });
// });
