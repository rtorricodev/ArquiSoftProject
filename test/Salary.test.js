const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

import Employee from '../src/Employee.js';
import SalaryTicket from '../src/SalaryTicket.js';
import Timesheet from '../src/sheet/timesheet.js';
import SalesSheet from '../src/sheet/SaleSheet.js';

describe('The basic functions of Salary Calculator', ()=>{

    it('generate a salary ticket for Carlos that is  fixed employeer with a 2000$ salary', ()=>{
        let Carlos = new Employee('Carlos','fixed',2000);
        let CarlosSalaryTicket = new SalaryTicket(Carlos);
        expect(CarlosSalaryTicket.salary).equal(2000);
    })

    it('generate a salary ticket for Roxana that is a partial time employeer',()=>{
        let RoxanasTimesheet = new Timesheet(7,180);
        let Roxana = new Employee('Roxana','partialtime',0,RoxanasTimesheet);
        Roxana.calculateSalary();
        let RoxanaSalaryTicket = new SalaryTicket(Roxana);
        expect(RoxanaSalaryTicket.salary).equal(1260);
    })

    it('generate a salary ticket for Juan that is a comision employeer', ()=>{
        let JuanSalesSheet = new SalesSheet(2,200);
        let Juan = new Employee('Juan','comision',2000,null,JuanSalesSheet);
        Juan.calculateSalary();
        let JuanSalaryTicker = new SalaryTicket(Juan);
        expect(JuanSalaryTicker.salary).equal(2400);
    })

    it('generate a salary ticket for Carlos that was a fixed employeer and now is a partial time employeer', ()=>{
        let Carlos = new Employee('Carlos','fixed',2000);
        let CarlosTimesheet = new Timesheet(7,180);
        Carlos.type = 'partialtime';
        Carlos.timesheet = CarlosTimesheet;
        Carlos.fixedSalary = 0 ;
        Carlos.calculateSalary();
        let CarlosSalaryTicket = new SalaryTicket(Carlos);
        expect(CarlosSalaryTicket.salary).equal(1260);
    })

    it('generate a salary ticket for Carlos that was a fixed employeer and now is a comision employeer', ()=>{
        let Carlos = new Employee('Carlos','fixed',2000);
        let CarlosSalesSheet = new SalesSheet(2,200);
        Carlos.type = 'comision';
        Carlos.salesheet = CarlosSalesSheet;
        Carlos.calculateSalary();
        let CarlosSalaryTicket = new SalaryTicket(Carlos);
        expect(CarlosSalaryTicket.salary).equal(2400);
    })

})
