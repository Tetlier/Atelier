/** @jest-environment jsdom */
import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from '../../../client/src/components/Reviews/Reviews.jsx';
import '@testing-library/jest-dom';
import {act} from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen, cleanup, } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import exampleData from './exampleData.js';
import axios from 'axios';


jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Reviews Widget', () => {
  it('should render the Reviews component', async() => {
    axios.get.mockResolvedValue(exampleData.getProducts);
    await act(async() => {
      render(<Reviews currentProductId={40344} currentProductRating={3.5} productName={'Camo Onesie'}/>);
    });
    const listElement = screen.getByText('Average Review: 3.5');
    expect(listElement).toBeInTheDocument();
  });

  it('should log error if axios request returns an error', async() => {
    const logSpy = jest.spyOn(console, 'log');
    axios.get.mockResolvedValueOnce({});
    await act(async() => {
      render(<Reviews currentProductId={productId} currentProductRating={3.5} productName={'Camo Onesie'}/>);
    });
    expect(logSpy).toHaveBeenCalledWith('Error: ', expect.anything());
  });
});