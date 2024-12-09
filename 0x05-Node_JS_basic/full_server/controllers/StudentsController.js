#!/usr/bin/node

// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2]; // Database file path

    try {
      const students = await readDatabase(filePath);
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let result = 'This is the list of our students\n';
      fields.forEach((field) => {
        result += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const filePath = process.argv[2]; // Database file path

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(filePath);
      const studentList = students[major];

      res.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
