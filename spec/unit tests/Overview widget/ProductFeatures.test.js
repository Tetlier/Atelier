import TestRenderer from 'react-test-renderer';
import ProductFeatures from '../../../client/src/components/Overview/ProductFeatures';

describe('Product features component', () => {
  let features = [{feature: 'feature', value: 'value'}];
  it('should render li', () => {
    const testRenderer = TestRenderer.create(
      <ProductFeatures
        features={features} />
    );
    const testInstance = testRenderer.root;
    const li = testInstance.findAllByType('li');
    expect(li.length).toBe(1);
  });
});