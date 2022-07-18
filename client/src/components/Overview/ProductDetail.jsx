import { StyledProductDetail } from '../styles/Overview/ProductDetail.styled';
const ProductDetail = ({description, slogan, features}) => {
  return (
    <StyledProductDetail>
      <h3 style={{'flexBasis': '50%'}}>Description: {description}</h3>
      <br/>
      <h3 style={{'flexBasis': '20%'}}>Slogan: {slogan}</h3>
      <ul style={{'flexBasis': '20%'}}>
        {
          features.map((item, i) => {
            return (<li key={i}>feature: {item.feature},  value: {item.value} </li>);
          })
        }
      </ul>
      <div className='social-links' style={{'flexBasis': '10%'}}>
        <p>Share At: </p>
        &nbsp;
        <a href='#'>
          <i className='fab fa-facebook-f'></i>
        </a>
        &nbsp;
        <a href='#'>
          <i className='fab fa-twitter'></i>
        </a>
        &nbsp;
        <a href='#'>
          <i className='fab fa-instagram'></i>
        </a>
        &nbsp;
        <a href='#'>
          <i className='fab fa-whatsapp'></i>
        </a>
      </div>
    </StyledProductDetail>
  );
};

export default ProductDetail;