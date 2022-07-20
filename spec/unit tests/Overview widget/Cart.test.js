import TestRenderer from 'react-test-renderer';
import Cart from '../../../client/src/components/Overview/Cart';
import { StyledCart, CustomSelect } from '../../../client/src/components/styles/Overview/Cart.styled';

describe('Cart component', () => {
  it('should render StyledImgItem', () => {
    const testRenderer = TestRenderer.create(
      <Cart
        selectedStyle={{skusArr: [1]}}
        skuChange={()=> {}}
        selectedSizeQuantity={[{key: 'key', value: 'value'}]}
        selectedSku={''}
        selectedQuantity={[]}
        quantityChange={()=> {}}
        skuAlert={()=> {}}
        skuAlertChange={()=> {}}/>
    );
    const testInstance = testRenderer.root;
    const styledCart = testInstance.findAllByType(StyledCart);
    expect(styledCart.length).toBe(1);
  });

  it('should render CustomSelect', () => {
    const testRenderer = TestRenderer.create(
      <Cart
        selectedStyle={{skusArr: [1]}}
        skuChange={()=> {}}
        selectedSizeQuantity={[{key: 'key', value: 'value'}]}
        selectedSku={''}
        selectedQuantity={[]}
        quantityChange={()=> {}}
        skuAlert={()=> {}}
        skuAlertChange={()=> {}}/>
    );
    const testInstance = testRenderer.root;
    const customSelect = testInstance.findAllByType(CustomSelect);
    expect(customSelect.length).toBe(2);
  });
});