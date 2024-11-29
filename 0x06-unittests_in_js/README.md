# Unit Tests in JavaScript

This repository contains a series of exercises designed to help you understand and implement unit testing in JavaScript, specifically using the Mocha testing framework. The tasks cover various aspects of testing, from basic unit tests to more complex integration tests and API development with Express.

## Project Structure

The project is organized into the following directories and files, each corresponding to a specific task:

- **0-calcul.js**: Basic JavaScript calculations for Task 0.
- **0-calcul.test.js**: Unit tests for `0-calcul.js`.
- **1-calcul.js**: Handling basic calculations for Task 1.
- **1-calcul.test.js**: Unit tests for `1-calcul.js`.
- **2-calcul_chai.js**: Adding Chai assertions for Task 2.
- **2-calcul_chai.test.js**: Unit tests for `2-calcul_chai.js`.
- **3-payment.js**: Payment system implementation for Task 3.
- **3-payment.test.js**: Tests for the payment system (unit and integration tests).
- **4-payment.js**: Extending payment system functionality for Task 4.
- **4-payment.test.js**: Tests for `4-payment.js`.
- **5-payment.js**: Handling payment methods for Task 5.
- **5-payment.test.js**: Unit tests for `5-payment.js`.
- **6-payment_token.js**: Working with tokens for payment methods in Task 6.
- **6-payment_token.test.js**: Tests for `6-payment_token.js`.
- **7-skip.test.js**: Tests demonstrating the use of the `.skip` method for skipping tests.
- **8-api**: API implementation for Task 8.
- **9-api**: Partial task for Task 9 (to be further expanded).
- **10-api**: Completing the API for Task 10.

## Requirements

- Node.js
- npm (Node Package Manager)
- Mocha, Chai, and Sinon for testing
- Express for building the API

## Setup Instructions

To get started, clone the repository and install the necessary dependencies.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/unit-tests-in-js.git
cd unit-tests-in-js
```

2. Install Dependencies
```
npm install
```

3. Run the API

For each task, navigate to the relevant folder and run the API:
```
cd 8-api
node api.js
```

4. Run the Tests

To run the tests for each task, use the following command:
```
npm test
```

Make sure the server is running when executing the tests.

## Task Breakdown

**Task 0**: Basic Unit Testing (Calculations)

Create basic JavaScript functions to handle calculations and validate results using unit tests.


**Task 1**: Assertions in JavaScript

Use Chai assertions to validate different types of data, such as numbers, strings, and arrays.


**Task 2**: Calculations with Chai Assertions

Implement more advanced calculations and test them using Chai assertions to ensure the correctness of the operations.


**Task 3**: Payment System

Create a simple payment system in JavaScript, providing methods for different payment methods and their validation.


**Task 4**: Extending the Payment System

Extend the payment system by adding more features such as adding/removing payment methods, handling discounts, etc.


**Task 5**: Payment Methods Testing

Add and test various payment methods in your system, including credit card, PayPal, etc., with appropriate tests.


**Task 6**: Payment Token Handling

Implement functionality for tokenizing payments, such as generating tokens for specific payment methods and validating them.


**Task 7**: Skipping Tests

Use Mocha's .skip method to skip tests in certain cases where they are not necessary for execution.


**Task 8**: API Implementation

Set up an Express-based API that handles payment and authentication routes, including payment methods and login functionality.


**Task 9**: Expand API Functionality

Expand the API with additional routes or features as necessary to handle more complex use cases.


**Task 10**: Advanced API Handling

Finalize the API setup with advanced features such as error handling, data validation, and full integration with payment methods.


## Tips

Ensure the server is running before running the tests.

Use curl or Postman to manually test the endpoints.

Use Mocha for running the test suite and Chai for assertions.


## License

Copyright by ALX. All rights reserved.
