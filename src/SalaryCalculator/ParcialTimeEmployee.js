export default class ParcialTimeSalary {
    static calculate(employee){
        let salary = 0
        if(employee.type === 'partialtime'){
            salary =  (employee.timesheet.rate * employee.timesheet.totalHoursWorked)
        }
        return salary;
    }
}