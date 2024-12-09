#!/usr/bin/node

// function to countStudents
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '' && !line.startsWith('firstname'));
        const students = lines.map((line) => line.split(','));
        const totalStudents = students.length;

        console.log(`Number of students: ${totalStudents}`);

        const fields = {};
        students.forEach((student) => {
          const field = student[3];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]);
        });

        for (const [field, names] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
