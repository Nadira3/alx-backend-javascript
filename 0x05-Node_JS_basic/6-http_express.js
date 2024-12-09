#!/usr/bin/node

// express js basic app
const express = require('express');

const app = express();

// Define route for "/"
app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the app
module.exports = app;
