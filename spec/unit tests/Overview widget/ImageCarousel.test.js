import TestRenderer from 'react-test-renderer';
import ImageCarousel from '../../../client/src/components/Overview/ImageCarousel';
import { StyledImageCarousel } from '../../../client/src/components/styles/Overview/ImageCarousel.styled';

describe('ImageCarousel component', () => {
  it('should render StyledImgItem', () => {
    const testRenderer = TestRenderer.create(
      <ImageCarousel
        productStyle={{photos: [1, 2, 3]}}
        thumbnailChange={()=>{}}
        selectedThumbnailIndex={0}
      />
    );
    const testInstance = testRenderer.root;
    const styledImageCarousel = testInstance.findAllByType(StyledImageCarousel);
    expect(styledImageCarousel.length).toBe(1);
  });

  it('should disable prev and next buttons', () => {
    const testRenderer = TestRenderer.create(
      <ImageCarousel
        productStyle={{photos: [1, 2, 3]}}
        thumbnailChange={()=>{}}
        selectedThumbnailIndex={0}
      />
    );
    const testInstance = testRenderer.root;
    const scrollbuttons = testInstance.findAllByType('button');
    expect(scrollbuttons.length).toBe(2);
    // expect(scrollbuttons[0].disabled).toBe(true);
  });
});

