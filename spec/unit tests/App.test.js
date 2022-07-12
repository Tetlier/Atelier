// tests App.jsx functions
import renderer from 'react-test-renderer';
import App from '../../client/src/components/App.jsx';

it('gets list of products', () => {
  const appComponent = new App;
  console.log('before: ', appComponent.state);
  return appComponent.getProducts2()
    .then((response) => {
      // console.log('products: ', response.data);
      expect(response.data.length).toBe(4);
    });
  // .catch((err) => {
  //   console.log('error: ', err);
  // });
});
