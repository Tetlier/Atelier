const axios = require('axios');
require('dotenv').config();

let options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp',
  headers: {
    // 'User-Agent': 'request',
    'Content-Type': 'application/json',
    'Authorization': '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'
    // `${process.env.TOKEN}` change back to this
  }
};

let getProducts = () => {
  // need to add end of url to options but not change original options
  let optionsCopy = options;
  optionsCopy.url = options.url + '/products';
  console.log('inside getProducts');
  return (axios(optionsCopy)); // defaults to get request
};

let getReviews = (id) => {
  let optionsCopy = options;
  optionsCopy.url = options.url + `/reviews/?product_id=${id}`;
  console.log(optionsCopy.url)
  return axios((optionsCopy));
};

//to be used in db

module.exports.getProducts = getProducts;
module.exports.getReviews = getReviews;