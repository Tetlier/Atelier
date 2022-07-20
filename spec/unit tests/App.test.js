// tests App.jsx functions
/**
* @jest-environment puppeteer
*/

import ReactDom from 'react-dom';
import React, {useState, useEffect} from 'react';
import App from '../../client/src/components/App.jsx';
import TestRenderer from 'react-test-renderer';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import {toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';
import {act} from 'react-dom/test-utils';
import axios from 'axios';
import exampleData from './QA widget/exampleData';
import ShallowRenderer from 'react-test-renderer/shallow';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

jest.mock('axios');

describe('App Component', () => {
  // props passed to App
  let sessionCookie = {
    's_id': document.cookie.slice(5),
    actions: []
  };
  // takes in id (question or answer) and action (helpful or reported) to add to cookie
  const addToCookie = function(id, action) {
    action = action.toLowerCase();
    // adds id number + h or r for helpful or reported
    sessionCookie.actions.push(id + action.slice(0, 1));
  };

  it('should render the App component', async() => {
    axios.get.mockResolvedValue(exampleData.getProduct40344);
    const renderer = new ShallowRenderer();
    renderer.render(<App sessionCookie={sessionCookie} addToCookie={addToCookie}/>);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toBeDefined();

  });

  it('should render App', async() => {
    render(<App
      sessionCookie={sessionCookie}
      addToCookie={addToCookie}
    />);
    // screen.debug();
    expect(true).toBe(true);
  });

});

/*
const server = setupServer(
  rest.get('/product/40344', (req, res, ctx) => {
    return res(ctx.json(exampleData.getProduct40344));
  }),

  rest.get('/meta', (req, res, ctx) => {
    return (res(ctx.json(exampleData.getMeta40344)));
  }),

  rest.get('/products', (req, res, ctx) => {
    return (res(ctx.json(exampleData.getProducts)));
  }),

  rest.get('/qa/questions', (req, res, ctx) => {
    return (res(ctx.json(exampleData.getQuestions40344)));
  }),

  rest.get('qa/questions/40344/answers', (req, res, ctx) => {
    return (res(ctx.json(exampleData.getAnswers)));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// props passed to App
let sessionCookie = {
  's_id': document.cookie.slice(5),
  actions: []
};
// takes in id (question or answer) and action (helpful or reported) to add to cookie
const addToCookie = function(id, action) {
  action = action.toLowerCase();
  // adds id number + h or r for helpful or reported
  sessionCookie.actions.push(id + action.slice(0, 1));
};

it('should get average rating', async () => {
  await act(async() => {
    render(<App sessionCookie={sessionCookie} addToCookie={addToCookie}/>);
  });

  const listElement = screen.getByText('Welcome to Atelier!');
  expect(listElement).toBeInTheDocument();
});
*/
