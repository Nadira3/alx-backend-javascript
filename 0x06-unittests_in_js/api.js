#!/usr/bin/node
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.get('/cart/*', (req, res) => {
  res.status(404).send('Not Found');
});

app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', express.json(), (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

module.exports = app;
