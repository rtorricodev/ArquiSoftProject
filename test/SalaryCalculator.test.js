const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

import Employee from '../src/Employee.js';
import SalaryCalculator from '../src/Util/SalaryCalculator';

describe('The basic functions of Salary Calculator', ()=>{
    let Carl = new Employee('Carl','fixed');;

    it('generate a salary ticket of 100$ for fixed employeer', ()=>{
        expect(SalaryCalculator.calculate(Carl)).equal(100);
    })
})
