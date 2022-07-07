const path = require('path');
const express = require('express');
const controllers = require('./controllers.js');

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(express.json());
// other configurations...

// route requests to controllers
// need to add header with Authentication key

app.listen(3000);
console.log('Server listening at http://localhost:3000');