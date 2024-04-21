// Problem 1

// Define employee details as an array of objects
const employees = [
    {
        first_name: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raise_eligible: true
    },
    {
        first_name: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raise_eligible: true
    },
    {
        first_name: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raise_eligible: false
    }
];

console.log("Employees:", employees);

// // Problem 2

const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log("Company:", company);


// Problem 3

const newEmployee = {
    first_name: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raise_eligible: false
};

company.employees.push(newEmployee);
console.log("Updated Company with New Employee:", company);


// // Problem 4

let totalSalary = 0;
company.employees.forEach(employee => {
  totalSalary += employee.salary;
});

console.log("Total salary for all Employees:" + totalSalary);


// // Problem 5

company.employees.forEach(employee => {
    if (employee.raise_eligible) {
      employee.salary *= 1.1;
      employee.raise_eligible = false;
    }
  });
  console.log("Employees after Raise:", company.employees);

// // Problem 6
const workingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
  employee.wfh = workingFromHome.includes(employee.firstName);
});
console.log("Employees after Updating WFH Status:", company.employees);