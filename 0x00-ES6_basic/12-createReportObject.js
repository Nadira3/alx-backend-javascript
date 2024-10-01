export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Using spread operator to copy employeesList
    // Defining getNumberOfDepartments as an arrow function
    getNumberOfDepartments: () => Object.keys(employeesList).length,
  };
}
