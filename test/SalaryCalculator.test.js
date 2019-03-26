const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

import Employee from '../src/Employee.js';
import SalaryTicket from '../src/SalaryTicket.js';

describe('The basic functions of Salary Calculator', ()=>{

    let fixedEmployee;
    let salaryTicket; 

    beforeEach(function() {
        fixedEmployee = new Employee('Carl','fixed');
        salaryTicket = new SalaryTicket(fixedEmployee);
     });

    it('generate an empty salary ticket', function() {
        let employee = new Employee('Carl');
        let salaryTicket = new SalaryTicket(employee)
        expect(salaryTicket.salary).equal(0);
    });

    it('generate a salary ticket of 100$ for fixed employeer', ()=>{
        expect(salaryTicket.salary).equal(100);
    })

    it('return false if the mount is incorrect for fixedEmployee', ()=>{
        expect(salaryTicket.salary).not.equal(150);
    })

})
