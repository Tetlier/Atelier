import { StyledImgShowcase } from '../styles/Overview/ImageShowcase.styled';

const ImageShowcase = ({productStyle}) => {
  return (
    <StyledImgShowcase>
      {
        productStyle.results[0].photos.map((photo, i) => {
          return ( i === 0 &&
            <img key={i} src={photo.thumbnail_url} alt = 'shoe image' className= {i === 0 ? 'active' : ''}/>
          );
        })
      }
    </StyledImgShowcase>
  );
};

export default ImageShowcase;