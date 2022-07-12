import { StyledImgShowcase } from '../styles/Overview/ImageShowcase.styled';

const ImageShowcase = ({productStyle}) => {
  return (
    <StyledImgShowcase>
      {
        productStyle.results[0].photos.map((photo, i) => {
          return (
            <img key={i} src={photo.thumbnail_url} alt = 'shoe image'/>
          );
        })
      }
    </StyledImgShowcase>
  );
};

export default ImageShowcase;