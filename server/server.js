const path = require('path');
const express = require('express');
const controllers = require('./controllers.js');
// const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

// app.use(cors({origin: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'}));

app.get('/products', (req, res) => {
  controllers.getProducts()
    .then((results) => {
      res.status(201).send(results.data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.get('/reviews', (req, res) => {
  controllers.getReviews(req.query.id)
    .then((results) => {
      res.send(results.data).status(200);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

app.get('/qa/questions', (req, res) => {
  let params = req.query;
  console.log('params: ', params);
  // let getQPromise = new Promise((resolve, reject) => {
  //   controllers.getQuestions();
  // });
  controllers.getQuestions(req, res, params.id, params.count, params.filter);
  // getQPromise
  //   .then((data) => {
  //     res.send(data).status(200);
  //   })
  //   .catch((err) => {
  //     console.log('server err');
  //     res.sendStatus(500);
  //   });
});

app.listen(3000);
console.log('Server listening at http://localhost:3000');