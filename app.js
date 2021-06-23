const express = require('express');

// init express app
const app = express();

// init express middlewares for the app
app.use(express.json());

// init express server connection
app.listen(() => {
  console.log('Server is listening onm port 3000...');
});
