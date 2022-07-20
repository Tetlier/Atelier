import ReactDom from 'react-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {toBeInTheDocument, within} from '@testing-library/jest-dom';
import {act} from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import axios from 'axios';
import exampleData from '../QA widget/exampleData';
import Overview from '../../../client/src/components/Overview/Overview';
import ImageCarousel from '../../../client/src/components/Overview/ImageCarousel';
import { ImageGallery } from '../../../client/src/components/styles/Overview/ImageGallery.styled';
import { OverviewContainer } from '../../../client/src/components/styles/Overview/OverviewContainer.styled';

jest.mock('axios');

beforeEach(() => {
  // jest.clearAllMocks();
  axios.get.mockResolvedValue(exampleData.getProduct40344);
});

describe('Overview component', () => {
  let currentProductId = 40344;
  let currentProductRating = 3.5;

  it('should render imageCarousel component', async() => {
    const testRenderer = TestRenderer.create(
      <Overview
        currentProductId={currentProductId}
        currentProductRating={currentProductRating} />
    );
    const testInstance = testRenderer.root;
    const imageCarousel = testInstance.findAllByType(ImageCarousel);
    expect(imageCarousel.length).toBe(0);
  });

  it('should render imageGallery component', async() => {
    const testRenderer = TestRenderer.create(
      <Overview
        currentProductId={currentProductId}
        currentProductRating={currentProductRating} />
    );
    const testInstance = testRenderer.root;
    const imageGallery = testInstance.findAllByType(ImageGallery);
    expect(imageGallery.length).toBe(0);
  });

  it('should render OverviewContainer component', async() => {
    const testRenderer = TestRenderer.create(
      <Overview
        currentProductId={currentProductId}
        currentProductRating={currentProductRating} />
    );
    const testInstance = testRenderer.root;
    const overviewContainer = testInstance.findAllByType(OverviewContainer);
    expect(overviewContainer.length).toBe(0);
  });
});