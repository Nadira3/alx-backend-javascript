#!/usr/bin/node

// Display initial prompt
process.stdout.write('Welcome to ALX, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Convert input to string and remove extra spaces
  console.log(`Your name is: ${name}`);
});

// Handle program exit
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(); // Exit the program
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
