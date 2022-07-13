const axios = require('axios');
require('dotenv').config();
const client = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': process.env.TOKEN
  }
});
let getProducts = () => {
  return (client.get('/products'));
};

let getReviews = (id, page, sort ) => {
  return (client.get(`/reviews/?product_id=${id}&page=${page}&count=10&sort=${sort}`));
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


let getMetaReview = (id, page) => {
  return (client.get(`/reviews/meta?product_id=${id}`));
};

module.exports.getProducts = getProducts;
module.exports.getReviews = getReviews;
module.exports.getProduct = getProduct;
module.exports.getMetaReview = getMetaReview;
