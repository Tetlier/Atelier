import { StyledProductDetail } from '../styles/Overview/ProductDetail.styled copy';
const ProductDetail = ({description, slogan, features}) => {
  return (
    <StyledProductDetail>
      <h1>{description}</h1>
      <h1>{slogan}</h1>
      <ul>
        {
          features.map((item, i) => {
            return (<li key={i}>feature: {item.feature},  value: {item.value} </li>);
          })
        }
      </ul>
      <div className='social-links'>
        <p>Share At: </p>
        <a href='#'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='#'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='#'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='#'>
          <i className='fab fa-whatsapp'></i>
        </a>
      </div>
    </StyledProductDetail>
  );
};

export default ProductDetail;