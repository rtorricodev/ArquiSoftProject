import SalaryCalculator from './Util/SalaryCalculator.js'

export default class SalaryTicket{
    constructor(employee){
        this.employeerName = employee.name; 
        this.employeerType = employee.type;
        this.salary = SalaryCalculator.calculate(employee);
    }
}