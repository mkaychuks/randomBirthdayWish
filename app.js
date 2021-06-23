const express = require('express');
const randomQuotes = require('./myRandom'); // init the random quotes for the app

// init express app
const app = express();

// init express middlewares for the app
app.use(express.json());

// init express server connection
app.listen(() => {
  console.log('Server is listening onm port 3000...');
});
