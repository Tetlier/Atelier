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

// returns first ${count} number of questions that contains filter term, sorted by helpfulness
let getQuestions = (req, res, id, count, filter = '') => {
  console.log('id: ', id, ', count: ', count, ', filter: ', filter);
  client.get(`/qa/questions/?product_id=${id}&count=100`)
    .then((result) => {
      // keep the questions with filter term
      let filtered = result.data.results.filter((question) => {
        console.log('question body: ', question.question_body);
        return question.question_body.toLowerCase().includes(filter);
      });
      // sort by descending helpfulness
      filtered.sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness;
      });
      console.log('results: ', filtered.slice(0, count));
      // slice off the first ${count} number of questions
      res.status(200).send(filtered.slice(0, count));
    })
    .catch((err) => {
      console.log('server error');
      res.sendStatus(500);
    });

};

module.exports.getProducts = getProducts;
module.exports.getReviews = getReviews;
module.exports.getQuestions = getQuestions;