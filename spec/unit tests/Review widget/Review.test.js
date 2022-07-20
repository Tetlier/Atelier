import React from 'react';

import ReactDom from 'react-dom';
import { render, fireEvent, screen, cleanup, } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import {act} from 'react-dom/test-utils';
import Review from '../../../client/src/components/Reviews/Review.jsx';
import exampleData from './exampleData.js';
import axios from 'axios';


describe('Review component', () => {
  it('should increase an answer\'s helpfulness', async () => {
    let review = exampleData.getAnswers.data;
    let example = false;
    let exampleFunc = () => console.log('ok');
    // const setAnswers = (newAnswers) => { answers = newAnswers; };

    render(<Review review = {exampleData.getReviews.data.results[0]} setRefresh = {exampleFunc}/>);
    const clickable = screen.getByText(/Yes/);
    fireEvent(
      clickable,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    cleanup();
    render(<Review review = {exampleData.getReviews.data.results[0]} setRefresh = {exampleFunc}/>);
    // screen.debug();
    expect(() => { screen.getByText(/Yes/); }).toThrow();
    const newClickable = screen.getByText(/Response Recorded/);
    expect(newClickable).toBeInTheDocument();
    expect(newClickable).toHaveStyle('font-weight: bold');
  });
});