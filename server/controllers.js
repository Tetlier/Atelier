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
let getQuestions = (req, res) => {
  let params = req.query;
  let id = params.id;
  let count = params.count;
  let filter = params.filter;

  // can update to include filter for answers too
  client.get(`/qa/questions/?product_id=${id}&count=100`)
    .then((result) => {
      // keep the questions with filter term
      let filtered = result.data.results.filter((question) => {
        return question.question_body.toLowerCase().includes(filter);
      });
      // sort by descending helpfulness
      filtered.sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness;
      });
      // slice off the first ${count} number of questions
      res.status(200).send(filtered.slice(0, count));
    })
    .catch((err) => {
      console.log('server error');
      res.sendStatus(500);
    });

};

let getAnswers = (req, res) => {
  let questionId = req.params.question_id;
  let count = req.query.count;
  client.get(`qa/questions/${questionId}/answers?count=${count}`)
    .then((result) => {
      let answers = result.data.results;
      // sort by descending helpfulness
      answers.sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness;
      });
      console.log('sorted answers: ', answers);
      res.status(200).send(answers);
    })
    .catch((err) => {
      console.log('server error');
      res.sendStatus(500);
    });
};

module.exports.getProducts = getProducts;
module.exports.getReviews = getReviews;
module.exports.getQuestions = getQuestions;
module.exports.getAnswers = getAnswers;