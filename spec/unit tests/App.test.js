// tests App.jsx functions

import ReactDom from 'react-dom';
import React from 'react';
import App from '../../client/src/components/App.jsx';
import TestRenderer from 'react-test-renderer';
import axios from 'axios';
import exampleData from './QA widget/exampleData';
import ShallowRenderer from 'react-test-renderer/shallow';

// it('should get a list of products', () => {
//   const appInstance = new App;
//   return appInstance.getProducts2()
//     .then((response) => {
//       expect(response.data.length).toBe(5);
//     })
//     .catch((err) => {
//       console.log('error: ', err);
//     });
// });

jest.mock('axios');

describe('App Component', () => {
  it('should render the App component', async() => {
    axios.get.mockResolvedValue(exampleData.getProduct40344);
    const renderer = new ShallowRenderer();
    renderer.render(<App/>);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toBeDefined();

  });
});