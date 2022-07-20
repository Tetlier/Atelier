import React from 'react';
import {
  render, fireEvent, screen, cleanup,
} from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import Answer from '../../../client/src/components/Q-A/Answer.jsx';
import exampleData from './exampleData.js';

describe('Answer component', () => {
  it('should increase an answer\'s helpfulness', async () => {
    let answers = exampleData.getAnswers.data;
    const setAnswers = (newAnswers) => { answers = newAnswers; };
    const sessionCookie = {'s_id': 'cookiestring', actions: []};
    const addToCookie = (id, action) => {
      sessionCookie.actions.push(id + action.slice(0, 1));
    };
    render(<Answer
      answer={answers[0]}
      answers={answers}
      setAnswers={setAnswers}
      sessionCookie={sessionCookie}
      addToCookie={addToCookie}
      sellerName='atelier'
    />);
    const clickable = screen.getByText(/13/);
    fireEvent(
      clickable,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    cleanup();
    render(<Answer
      answer={answers[0]}
      answers={answers}
      setAnswers={setAnswers}
      sessionCookie={sessionCookie}
      addToCookie={addToCookie}
      sellerName='atelier'
    />);
    // screen.debug();
    expect(() => { screen.getByText(/13/); }).toThrow();
    const newClickable = screen.getByText(/14/);
    expect(newClickable).toBeInTheDocument();
    // expect(newClickable).toHaveStyle('font-weight: bold');
  });
});