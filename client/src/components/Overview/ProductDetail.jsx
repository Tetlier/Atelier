import { StyledProductDetail } from '../styles/Overview/ProductDetail.styled';
const ProductDetail = ({description, slogan, features}) => {

  const shareToSocialMedia = (socialMedia) => {
    alert(`Shared to ${socialMedia}`);
  };

  return (
    <StyledProductDetail>
      <div style={{'flexBasis': '60%', 'paddingRight': '22px'}}>
        <h1>{slogan}</h1>
        <b>{description}</b>
      </div>
      <ul style={{'flexBasis': '20%'}}>
        {
          features.map((item, i) => {
            return (<li key={i}> {item.feature}, {item.value} </li>);
          })
        }
      </ul>

      <div className='social-links' style={{'flexBasis': '20%'}}>
        <p>Share: &nbsp;&nbsp;&nbsp;</p>
        <div className='social-links'>
          <button className='facebook'
            onClick={() => {
              shareToSocialMedia('facebook');
            }}>
            <i className='fab fa-facebook-f'></i>
          </button>
          <button className='twitter'
            onClick={() => {
              shareToSocialMedia('twitter');
            }}>
            <i className='fab fa-twitter'></i>
          </button>
          <button className='pinterest'
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