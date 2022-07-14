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

app.get('/product', (req, res) => {
  controllers.getProduct(40344, (err, data) => {
    if (err) {
      console.log('err for /product : ', err);
      res.status(500).send();
    } else {
      res.send(data);
    }
  });
});

app.get('/reviews', (req, res) => {
  controllers.getReviews(req.query.id, req.query.count, req.query.sort)
    .then((results) => {
      res.send(results.data).status(200);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

app.get('/meta', (req, res) => {
  controllers.getMetaReview(req.query.id)
    .then((results) => {
      res.send(results.data).status(200);
    })
    .catch(err => { console.log(err); res.sendStatus(500); });
});

app.put('/reviews', (req, res) => {
  controllers.putHelpful(req.body.review_id)
    .then((results) => {
      res.send(results.data).status(200);
    })
    .catch(err => { console.log(err); res.sendStatus(500); });
});

const router = express.Router();

app.use('/', router);

router.get('/qa/questions/:question_id/answers', controllers.getAnswers);

router.get('/qa/questions', controllers.getQuestions);

router.put('/qa/questions/:question_id/helpful', controllers.markQasHelpful);

router.put('/qa/questions/:question_id/report', controllers.reportQuestion);

router.put('/qa/answers/:answer_id/helpful', controllers.markAasHelpful);

router.put('/qa/answers/:answer_id/report', controllers.reportAnswer);

router.post('/qa/questions', controllers.postQuestion);

router.post('/qa/questions/:question_id/answers', controllers.postAnswer);

app.listen(3000);
console.log('Server listening at http://localhost:3000');
