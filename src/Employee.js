import ComisionEmployeeSalary from './SalaryCalculator/ComisionEmployee.js';
import ParcialTimeSalary from './SalaryCalculator/ParcialTimeEmployee.js';

export  default class Employee {
    constructor(name, type, fixedSalary, timesheet, salesheet ){
        this.name = name;
        this.type = type;
        this.timesheet = timesheet;
        this.salesheet = salesheet;
        this.fixedSalary = fixedSalary;
        this.ComisionSalary = ComisionEmployeeSalary.calculate(this);
        this.PartialTimeSalary = ParcialTimeSalary.calculate(this);
    }
}