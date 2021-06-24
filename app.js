const express = require('express');
const randomQuotes = require('./myRandom'); // init the random quotes for the app

// init express app
const app = express();

// init express middlewares for the app
app.use(express.json());

// creating a function that randomizes the quotes to be sent
function randomize(arr) {
  const randomReturns = arr[Math.floor(Math.random() * arr.length)];
  return randomReturns;
}

// init the post request route that handles POST
app.post('/', (req, res) => {
  const { name, dob } = req.body;
  //const wish = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
  const newWish = {
    name: name,
    dob: dob,
    wishes: randomize(randomQuotes), // utilizing the function created for the randomize
  };
  res.send(newWish);
});

// init express server connection
app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
