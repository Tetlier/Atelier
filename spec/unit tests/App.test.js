// tests App.jsx functions

import App from '../../client/src/components/App.jsx';

it('should get a list of products', () => {
  const appInstance = new App;
  return appInstance.getProducts2()
    .then((response) => {
      expect(response.data.length).toBe(5);
    })
    .catch((err) => {
      console.log('error: ', err);
    });
});
