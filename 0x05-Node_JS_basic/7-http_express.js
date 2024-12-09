#!/usr/bin/node

// advanced express module
const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parse');
const app = express();

// Function to read and parse the CSV file
const parseCSV = (filePath, callback) => {
  const students = {
    CS: [],
    SWE: []
  };

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }

    csv.parse(data, {
      columns: true,
      trim: true
    }, (err, records) => {
      if (err) {
        return callback(err);
      }

      // Process records and filter empty lines
      records.forEach(record => {
        if (record.Name && record.Programme) {
          if (record.Programme === 'CS') {
            students.CS.push(record.Name);
          } else if (record.Programme === 'SWE') {
            students.SWE.push(record.Name);
          }
        }
      });

      callback(null, students);
    });
  });
};

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

// Route for the students page
app.get('/students', (req, res) => {
  const filePath = process.argv[2];

  if (!filePath) {
    return res.status(400).send('Database file is required');
  }

  parseCSV(filePath, (err, students) => {
    if (err) {
      return res.status(500).send('Error reading the database');
    }

    const numCS = students.CS.length;
    const numSWE = students.SWE.length;

    res.send(`This is the list of our students
Number of students: ${numCS + numSWE}
Number of students in CS: ${numCS}. List: ${students.CS.join(', ')}
Number of students in SWE: ${numSWE}. List: ${students.SWE.join(', ')}`);
  });
});

// Start the server
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
