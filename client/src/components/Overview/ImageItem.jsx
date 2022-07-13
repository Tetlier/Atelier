
import { StyledImgItem } from '../styles/Overview/ImageItem.styled';

const ImageItem = ({ src, alt}) => {
  return (
    <StyledImgItem>
      <a href='#'>
        <img src={src} alt={alt}/>
      </a>
    </StyledImgItem>
  );
};

export default ImageItem;