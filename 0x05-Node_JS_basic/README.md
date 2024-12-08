# Node.js Basics - Full Project

This repository contains a series of Node.js projects, starting from Task 0 (basic concepts) to Task 8 (building a full server with Express). It covers fundamental aspects of Node.js, including routing, handling CSV files, and building a RESTful API with Express.

## Project Overview

This project is structured as a series of tasks designed to teach you key concepts in Node.js. By completing the tasks, you will gain a deeper understanding of how to build web servers, handle routes, manage databases (in this case, CSV files), and use modern JavaScript features with Babel.

### Tasks:
- **Task 0**: Introduction to Node.js - Basic setup and creating a simple Node.js app.
- **Task 1**: Basic routing with Express - Handling HTTP requests.
- **Task 2**: Handling JSON files - Reading and writing JSON data.
- **Task 3**: Handling CSV files - Reading and parsing CSV data.
- **Task 4**: Middleware and Error Handling - Introduction to middleware in Express and managing errors.
- **Task 5**: File handling - Managing files in Node.js (read/write operations).
- **Task 6**: Routing with parameters - Dynamic routing in Express.
- **Task 7**: Query Parameters - Working with query strings in routes.
- **Task 8**: Full Server with Express - A complete server setup that reads data from a CSV file and serves it via a RESTful API.

## Project Structure

The project is organized into multiple folders corresponding to different tasks. Below is the directory structure for Task 8 (Full Server):

full_server/ ├── controllers/ │   ├── AppController.js │   └── StudentsController.js ├── routes/ │   └── index.js ├── utils.js ├── server.js └── database.csv (sample CSV file with student data)

### Key Files and Descriptions:

- `controllers/AppController.js`: Handles the main app route for the homepage (`/`).
- `controllers/StudentsController.js`: Contains the logic for handling student data and displaying it by major (CS or SWE).
- `routes/index.js`: Sets up the application routes.
- `utils.js`: Provides utility functions like reading CSV data from the file system.
- `server.js`: Initializes the Express server and connects everything.
- `database.csv`: A CSV file containing student data (first name and major).

## Prerequisites

Before running the project, ensure that you have the following installed:

- **Node.js** (version 12.x or later)
- **npm** (Node package manager)
- **Babel** (for ES6 support)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-basics.git
   cd nodejs-basics
   ```

2. Install dependencies:
```
npm install
```

3. Install Babel and necessary packages:
```
npm install --save-dev babel-preset-env babel-register
```


Running the Server

To start the server, use the following command:
```
npm run dev ./database.csv
```

This will start the server using nodemon and automatically reload the server on file changes. The database.csv file will be passed to the server as an argument.

Available Routes

Once the server is running, the following routes will be available:

GET /: Displays a welcome message ("Hello ALX!").

GET /students: Lists all students, categorized by major (CS, SWE).

GET /students/:major: Lists students from the specified major (CS or SWE). If an invalid major is provided, an error message will be shown.


### Example requests:

1. Welcome message:
```
curl localhost:1245
```

Output:
```
Hello ALX!
```

2. List of students:
```
curl localhost:1245/students
```

Output:
```
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

3. List of SWE students:
```
curl localhost:1245/students/SWE
```

Output:
```
List: Guillaume, Joseph, Paul, Tommy
```

4. Error for invalid major:
```
curl localhost:1245/students/French
```

Output:

Major parameter must be CS or SWE



Technologies Used

Node.js: JavaScript runtime for building the server.

Express: Web framework for building RESTful APIs.

Babel: JavaScript compiler that supports modern ES6+ features.

CSV: For storing and reading student data.


License

This project is licensed under the ALX Backend Curriculum - see the LICENSE file for details.
