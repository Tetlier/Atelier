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

let getProducts = (username) => {
  // need to add end of url to options but not change original options
  let optionsCopy = options;
  optionsCopy.url = options.url + '/products';
  return (axios(optionsCopy) // defaults to get request
    .then((res) => res.data)) // res.data
    .catch(err => res.sendStatus(500));
};

module.exports.getProducts = getProducts;