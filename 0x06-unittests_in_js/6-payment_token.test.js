#!/usr/bin/node
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with success message', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
