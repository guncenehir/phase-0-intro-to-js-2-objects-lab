// Write your solution in this file!
const employee = { 
        name: "Sherlock Holmes",
        streetAdress : "221B Baker Street"
    };

function updateEmployeeWithKeyAndValue(employee, key, value){
    const myObject = {...employee};
    myObject[key] = value;
    return myObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}