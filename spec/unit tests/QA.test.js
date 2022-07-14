// tests Q&A widget
import ReactDom from 'react-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom';

import QA from '../../client/src/components/Q-A/QA.jsx';
import QuestionList from '../../client/src/components/Q-A/QuestionList';

describe('Question and Answer Widget', () => {
  // uses Jest
  it('should render onto the DOM without crashing', () => {
    const root = document.createElement('div');
    ReactDom.render(<QA/>, root);
  });

  // uses React Testing Library
  it('should render the Q & A component', () => {
    render(<QA/>);
    const listElement = screen.getByText('Questions & Answers');
    expect(listElement).toBeInTheDocument();
  });
});

describe('Question List Component', () => {
  it('should render an Add Question button', () => {
    render(<QuestionList/>);
    const listElement = screen.getByText('Add a Question +');
    expect(listElement).toBeInTheDocument();
  });
});
