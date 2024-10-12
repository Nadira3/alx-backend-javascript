
// Define the student interface
interface Student
{
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const student1: Student = {
	firstName: 'Daniel';
	lastName: 'Higgins';
	age: 20;
	location: 'Ikeja';
}

const student2: Student = {
	firstName: 'Mary';
	lastName: 'Poppins';
	age: 25;
	location: 'Maryland';
}

// Create an array containing both students
const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Append a row for each student in the studentsList array
