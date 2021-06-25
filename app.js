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
  const newWish = {
    Name: name,
    Date_of_Birth: dob,
    Birthday_Wish: randomize(randomQuotes), // utilizing the function created for the randomize
  };
  if (name == undefined || null) {
    return res
      .status(400)
      .json({ success: false, message: 'Name is required' });
  } else if (dob == undefined || null) {
    return res.status(400).json({
      success: false,
      message: 'Date is required (Write in this format "MM-DD-YYYY")',
    });
  } else {
    return res.status(400).json({
      success: false,
      message: 'Date is required (Write in this format "MM-DD-YYYY")',
    });
  }
  res.send(newWish);
});

// init express server connection
app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
