// // tests Q&A widget - QuestionList component
// import ReactDom from 'react-dom';
// import React from 'react';
// import {render, screen} from '@testing-library/react';
// import {toBeInTheDocument, within} from '@testing-library/jest-dom';
// import {act} from 'react-dom/test-utils';
// import TestRenderer from 'react-test-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';
// import axios from 'axios';

// import QuestionList from '../../../client/src/components/Q-A/QuestionList';
// import Question from '../../../client/src/components/Q-A/Question.jsx';
// import { LargeButton } from '../../../client/src/components/styles/Q-A/InlineButton.styled.js';
// import { ScrollList } from '../../../client/src/components/styles/Q-A/QAList.styled.js';

// import exampleData from './exampleData';

// jest.mock('axios');

// beforeEach(() => {
//   jest.clearAllMocks();
// });

// describe('Question List Component', () => {
//   // props passed into QA component
//   let productId = 40344;
//   let searchTerm = '';
//   let sessionCookie = {
//     's_id': document.cookie.slice(5),
//     actions: []
//   };
//   let addToCookie = function(id, action) {
//     action = action.toLowerCase();
//     // adds id number + h or r for helpful or reported
//     sessionCookie.actions.push(id + action.slice(0, 1));
//   };
//   let sellerName = 'atelier';
//   let productName = 'Heir Force Ones';

//   it('should render 2 buttons: More Answered Questions and Add Question', async() => {
//     axios.get.mockResolvedValue(exampleData.getQuestions40344);
//     // const renderer = new ShallowRenderer();
//     // await act(async() => {
//     //   renderer.render(<QuestionList productId={productId} searchTerm={searchTerm} sessionCookie={sessionCookie}
//     //     addToCookie={addToCookie} sellerName={sellerName} productName={productName}/>);
//     // });
//     // const result = renderer.getRenderOutput();
//     // console.log('children: ', result.props.children);
//     // screen.debug();
//     const testRenderer = TestRenderer.create(
//       <QuestionList productId={productId} searchTerm={searchTerm} sessionCookie={sessionCookie}
//         addToCookie={addToCookie} sellerName={sellerName} productName={productName}/>
//     );

//     const testInstance = testRenderer.root;
//     const buttons = testInstance.findAllByType(LargeButton);
//     expect(buttons.length).toBe(2);
//   });

//   // it('should render 2 questions by default', async() => {
//   //   axios.get.mockResolvedValue(exampleData.getQuestions40344);
//   //   const renderer = new ShallowRenderer();
//   //   await act(async() => {
//   //     renderer.render(<QuestionList productId={productId} searchTerm={searchTerm} sessionCookie={sessionCookie}
//   //       addToCookie={addToCookie} sellerName={sellerName} productName={productName}/>);
//   //     const result = renderer.getRenderOutput();
//   //   });
//   //   screen.debug();
//   //   expect(result.props.children.length).toBe(2);
//   // });

//   // it('should render a More Answered Questions button if there are more', async() => {
//   //   axios.get.mockResolvedValue(exampleData.getQuestions40344);
//   //   await act(async() => {
//   //     render(<QuestionList productId={productId} searchTerm={searchTerm} sessionCookie={sessionCookie}
//   //       addToCookie={addToCookie} sellerName={sellerName} productName={productName}/>);
//   //   });
//   //   const listElement = screen.getByText('MORE ANSWERED QUESTIONS');
//   //   expect(listElement).toBeInTheDocument();
//   // });

// });
