/** @jest-environment jsdom */

import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from '../../client/src/components/Reviews/Reviews.jsx';
import '@testing-library/jest-dom';



import renderer from 'react-test-renderer';
import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';

//cleans up residue after each test so it doesn't interfere with others
beforeEach(()=> render(<Reviews currentProductId = '40344' currentProductRating = '3'/>))
afterEach(() => cleanup);

//test that reviews loads
test('renders onto the DOM without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Reviews />, root);
});

test('opens the form on addReview click', ()=> {
  const addReview = screen.queryByTestId('addReview');
  fireEvent.click(addReview);
  const form = screen.queryByTestId('form');
  expect(form).toBeVisible();
});



//see if things mounted on the dom correctly
//puppetteer- clicks onto things