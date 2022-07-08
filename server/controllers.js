const axios = require('axios');
require('dotenv').config();

let options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp',
  headers: {
    // 'User-Agent': 'request',
    'Content-Type': 'application/json',
    'Authorization': `${process.env.TOKEN}`
  }
};

let getProducts = () => {
  // need to add end of url to options but not change original options
  let optionsCopy = options;
  optionsCopy.url = options.url + '/products';
  console.log('inside getProducts');
  return (axios(optionsCopy)); // defaults to get request
};

module.exports.getProducts = getProducts;