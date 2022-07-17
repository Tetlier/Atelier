import { StyledProductDetail } from '../styles/Overview/ProductDetail.styled';
const ProductDetail = ({description, slogan, features}) => {
  return (
    <StyledProductDetail>
      <h1 style={{'flexBasis': '50%'}}>Description: {description}</h1>
      <br/>
      <h1 style={{'flexBasis': '20%'}}>Slogan: {slogan}</h1>
      <ul style={{'flexBasis': '20%'}}>
        {
          features.map((item, i) => {
            return (<li key={i}>feature: {item.feature},  value: {item.value} </li>);
          })
        }
      </ul>
      <div className='social-links' style={{'flexBasis': '10%'}}>
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