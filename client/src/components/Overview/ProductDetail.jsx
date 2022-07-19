import { StyledProductDetail } from '../styles/Overview/ProductDetail.styled';
const ProductDetail = ({description, slogan, features}) => {

  const shareToSocialMedia = (socialMedia) => {
    alert(`Shared to ${socialMedia}`);
  }

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
        <p>Share At: &nbsp;&nbsp;&nbsp;</p>
        <div className='social-links'>
        <button
          onClick={() => {
            shareToSocialMedia('facebook');
        }}>
          <i className='fab fa-facebook-f'></i>
        </button>
        <button
        onClick={() => {
          shareToSocialMedia('twitter');
        }}>
          <i className='fab fa-twitter'></i>
          </button>
        <button
        onClick={() => {
          shareToSocialMedia('pinterest');
        }}>
            <i className="fab fa-pinterest"></i>
        </button>
        </div>
      </div>
    </StyledProductDetail>
  );
};

export default ProductDetail;