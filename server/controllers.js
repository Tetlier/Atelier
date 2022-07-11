const axios = require('axios');
require('dotenv').config();

let getProducts = () => {
  console.log('token: ', process.env.TOKEN);
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.TOKEN
    }
  };
  console.log('config: ', config);
  return (axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', config)); // defaults to get request
};

let getProduct = (productId, callback) => {
  let options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${process.env.TOKEN}`
    }
  };
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40348', options)
    .then((product) => {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40348/styles', options)
        .then((styles) => {
          var result = {productInfo: product.data, styleInfo: styles.data};
          callback(null, result);
        })
        .catch(stylesErr => {
          callback(stylesErr, null);
        });
    })
    .catch(err => {
      callback(err, null);
    });
};

let getReviews = (id) => {

  let options = {

    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.TOKEN
    }
  };
  return axios((options));
};

module.exports.getProducts = getProducts;
module.exports.getReviews = getReviews;
module.exports.getProduct = getProduct;