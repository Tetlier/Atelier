import TestRenderer from 'react-test-renderer';
import ImageItem from '../../../client/src/components/Overview/ImageItem';
import { StyledImgItem } from '../../../client/src/components/styles/Overview/ImageItem.styled';

describe('ImageItem component', () => {
  it('should render StyledImgItem', () => {
    const testRenderer = TestRenderer.create(
      <ImageItem
        src='test'
        alt='test' />
    );
    const testInstance = testRenderer.root;
    const styledImgItem = testInstance.findAllByType(StyledImgItem);
    expect(styledImgItem.length).toBe(1);
  });
});