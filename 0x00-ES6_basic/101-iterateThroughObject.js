export default function iterateThroughObject(reportWithIterator) {
  // Use the spread operator to gather all employees from the iterator
  const employees = [...reportWithIterator];

  // Join the array of employees with ' | ' separator and return the result
  return employees.join(' | ');
}
