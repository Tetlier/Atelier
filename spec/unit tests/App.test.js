// tests App.jsx functions

import App from '../../client/src/components/App.jsx';

test('should use App\'s sum function', () => {
  const appInstance = new App;
  let results = appInstance.sum(1, 2);
  expect(results).toBe(3);
});

test('gets list of products', async () => {
  const appComponent = new App;
  console.log('before: ', appComponent.state);
  // let getProductsPromise = new Promise((resolve, reject) => {
  //   resolve(appComponent.getProducts2());
  // });
  // let products = await appComponent.getProducts2();
  // appComponent.getProducts2()
  //   .then((products) => {
  //     console.log('products: ', products);
  //     expect(products.length).toBe(5);
  //   })
  //   .catch((err) => {
  //     console.log('error: ', err);
  //   });
  // console.log('products after awaiting: ', products);
  expect(await appComponent.getProducts2().length).toBe(5);
});

