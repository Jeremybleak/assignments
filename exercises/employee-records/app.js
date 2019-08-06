function Employee(name, jobTitle, salary, status = 'Full time') {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}
Employee.prototype.printEmployeeForm = function(){
    return "Name: " + this.name + " Job Title: " + this.jobTitle + " Salary: " + this.salary + "/hr" + " Status: " + this.status
}
const employeeArray = []
const personOne = new Employee('Evan', "Regonal manager", 50)
// console.log(personOne)
const personTwo = new Employee('Jeremy', "CEO", 500)
// console.log(personTwo)
const personThree = new Employee('Damon', "Lunch Lady", 10, "Part Time")
// console.log(personThree)
console.log(Employee.prototype.printEmployeeForm(personOne)) 
employeeArray.push(personOne.printEmployeeForm())
employeeArray.push(personTwo.printEmployeeForm())
employeeArray.push(personThree.printEmployeeForm())
console.log(employeeArray)