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
      console.log('server error getting questions');
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
      res.status(200).send(answers);
    })
    .catch((err) => {
      console.log('server error getting answers');
      res.sendStatus(500);
    });
};

let markQasHelpful = (req, res) => {
  let questionId = req.params.question_id;
  client.put(`qa/questions/${questionId}/helpful`)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log('server error marking question as helpful');
      res.sendStatus(500);
    });
};

let reportQuestion = (req, res) => {
  let questionId = req.params.question_id;
  client.put(`qa/questions/${questionId}/report`)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log('server error reporting question');
      res.sendStatus(500);
    });
};

let markAasHelpful = (req, res) => {
  let answerId = req.params.answer_id;
  client.put(`qa/answers/${answerId}/helpful`)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log('server error marking answer as helpful');
      res.sendStatus(500);
    });
};

let reportAnswer = (req, res) => {
  let answerId = req.params.answer_id;
  client.put(`qa/answers/${answerId}/report`)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log('server error reporting answer');
      res.sendStatus(500);
    });
};

module.exports.getProducts = getProducts;
module.exports.getReviews = getReviews;
module.exports.getQuestions = getQuestions;
module.exports.getAnswers = getAnswers;
module.exports.markQasHelpful = markQasHelpful;
module.exports.reportQuestion = reportQuestion;
module.exports.markAasHelpful = markAasHelpful;
module.exports.reportAnswer = reportAnswer;