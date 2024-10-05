export default function createIteratorObject(report) {
  // Extract the employees from the report object
  const { allEmployees } = report;

  // Collect all employees in one array
  let employeeList = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employeeList = employeeList.concat(allEmployees[department]);
    }
  }

  // Return an iterator for the employee list
  return employeeList[Symbol.iterator]();
}
