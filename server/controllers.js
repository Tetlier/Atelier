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
let getReviews = (id) => {
  return (client.get(`/reviews/?product_id=${id}`));
};

let getMetaReview = (id) => {
  return (client.get(`/reviews/meta?product_id=${id}`));
};

module.exports.getProducts = getProducts;
module.exports.getReviews = getReviews;
module.exports.getMetaReview = getMetaReview;