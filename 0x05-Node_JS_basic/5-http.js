#!/usr/bin/node

// advanced http module
const http = require('http');
const fs = require('fs');
const { parse } = require('path');

const app = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello ALX!');
  } else if (url === '/students') {
    const databasePath = process.argv[2];
    if (!databasePath) {
      res.end('This is the list of our students\n');
      return;
    }

    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        res.end('This is the list of our students\nCannot load the database');
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '')
        .slice(1);

      const students = {};
      let total = 0;

      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        if (field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
          total++;
        }
      });

      const responseLines = ['This is the list of our students', `Number of students: ${total}`];
      Object.entries(students).forEach(([field, names]) => {
        responseLines.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });

      res.end(responseLines.join('\n'));
    });
  } else {
    res.writeHead(404, 'Not Found');
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
