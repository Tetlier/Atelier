// tests Q&A widget - QA component
import ReactDom from 'react-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {toBeInTheDocument, within} from '@testing-library/jest-dom';
import {act} from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import axios from 'axios';

import QA from '../../../client/src/components/Q-A/QA.jsx';
import QuestionList from '../../../client/src/components/Q-A/QuestionList';

import exampleData from './exampleData';

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Question and Answer Widget', () => {
  // props passed into QA component
  let productId = 40344;
  let sessionCookie = {
    's_id': document.cookie.slice(5),
    actions: []
  };
  let addToCookie = function(id, action) {
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

  it('should log error if axios request returns an error', async() => {
    const logSpy = jest.spyOn(console, 'log');
    axios.get.mockResolvedValueOnce({});
    await act(async() => {
      render(<QA productId={productId} sessionCookie={sessionCookie} addToCookie={addToCookie}/>);
    });
    expect(logSpy).toHaveBeenCalledWith('Error: ', expect.anything());
  });
});
