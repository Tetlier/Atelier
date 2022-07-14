const ProductFeatures = ({features}) => {
  return (
    <div>
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
    </div>
  );
};

export default ProductFeatures;