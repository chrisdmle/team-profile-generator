// Code to define and export the Manager class. HINT: This class should inherit from Employee.
//Employee constructor 
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    // Employee role to manager 
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 