#!/usr/bin/node
const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
