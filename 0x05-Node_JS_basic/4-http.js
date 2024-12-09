#!/usr/bin/node

// simple http server
const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ALX!');
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;