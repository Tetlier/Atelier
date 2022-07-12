//This file tests the functionality of App specific functions
const App = require('../../client/src/components/App.jsx');
// getProducts = require('../client/src/components/App.jsx’).getProducts;
import renderer from 'react-test-renderer';
test('gets all the products', () => {
  const appComponent = renderer.create('<App/>');
  expect(appComponent.getProducts().length).toBe(5);
});
var sum = function(n1, n2) {
  return n1 + n2;
};
test('adds 1 + 2 to equal 3', () => {
  expect(App.sum(1, 2)).toBe(3);
});
test('should work', () => {
  expect(sum(1, 2)).toBe(3);
});