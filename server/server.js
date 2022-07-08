const path = require('path');
const express = require('express');
const controllers = require('./controllers.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
// other configurations...

app.get('/products', (req, res) => {
  console.log('inside get function');
  controllers.getProducts()
    .then((results) => {
      console.log('got results');
      res.status(201).send(results.data);
    })
    .catch((err) => {
      console.log('caught an error');
      res.sendStatus(401);
    });
});

app.get('/reviews', (req, res) => {
  console.log('this', req.query.id);
  controllers.getReviews(req.query.id)
    .then(data => res.send(data).status(200))
    .catch(err => {console.log(err); res.sendStatus(401); });
});

app.listen(3000);
console.log('Server listening at http://localhost:3000');