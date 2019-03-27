export default class SalaryTicket{
    constructor(employee){
        this.employeerName = employee.name; 
        this.employeerType = employee.type;
        switch(this.employeerType){
            case 'comision':
                this.salary = employee.ComisionSalary;
                break;
            case 'partialtime':
                this.salary = employee.PartialTimeSalary;
                break;
            case 'fixed':
                this.salary = employee.fixedSalary;
                break;
        }
    }
}