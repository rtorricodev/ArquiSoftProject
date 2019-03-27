export default class ComisionEmployeeSalary {
    static calculate(employee){
        let salary = 0;
        if(employee.type === 'comision'){
            salary = employee.fixedSalary + employee.salesheet.comision * employee.salesheet.totalSales;
        }
        return salary;
    }
}