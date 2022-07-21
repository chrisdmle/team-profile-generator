// Code to define and export the Intern class.  HINT: This class should inherit from Employee.
// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 
        this.school = school; 
    }
    //School from input 
    getSchool () {
        return this.school;
    }

    // Employee role to intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 