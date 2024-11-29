#!/usr/bin/node
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log correct total for (100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 120');
  });

  it('should log correct total for (10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleSpy, 'The total is: 20');
  });
});
