const axios = require('axios');
require('dotenv').config();

// let options = {
//   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp`,
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': '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'
//   }
// };

let getProducts = () => {
  let options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${process.env.TOKEN}`
    }
  };
  return (axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', options)); // defaults to get request
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
      'Authorization': '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'
    }
  };
  return axios((options));
};

//to be used in db

module.exports.getProducts = getProducts;
module.exports.getReviews = getReviews;
module.exports.getProduct = getProduct;