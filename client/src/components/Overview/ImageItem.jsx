
import { StyledImgItem } from '../styles/Overview/ImageItem.styled';

const ImageItem = ({key, src, alt}) => {
  return (
    <StyledImgItem>
      <a href='#' data-id={key}>
        <img src={src} alt={alt}/>
      </a>
    </StyledImgItem>
  );
};

export default ImageItem;