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
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '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'
    }
  };
  return (axios(options)); // defaults to get request
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