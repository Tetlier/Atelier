import { StyledProductDetail } from '../styles/Overview/ProductDetail.styled';
const ProductDetail = ({description, slogan, features}) => {
  return (
    <StyledProductDetail>
      <h3 style={{'flexBasis': '40%'}}>Description: {description}</h3>
      <br/>
      <h3 style={{'flexBasis': '20%'}}>Slogan: {slogan}</h3>
      <ul style={{'flexBasis': '20%'}}>
        {
          features.map((item, i) => {
            return (<li key={i}>feature: {item.feature},  value: {item.value} </li>);
          })
        }
      </ul>

      <div className='social-links' style={{'flexBasis': '20%'}}>
        <p>Share At: </p>
        <div className='social-links'>
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
      </div>
    </StyledProductDetail>
  );
};

export default ProductDetail;