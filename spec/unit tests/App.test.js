// tests App.jsx functions

import renderer from 'react-test-renderer';
import App from '../../client/src/components/App.jsx';

it('gets list of products', () => {
  const appComponent = new App;
  console.log('before: ', appComponent.state);
  let getProductsPromise = new Promise((resolve, reject) => {
    return appComponent.getProducts();
  });
  getProductsPromise
    .then((products) => {
      console.log('products: ', products);
      expect(products.length).toBe(5);
    })
    .catch((err) => {
      console.log('error: ', err);
    });
});
