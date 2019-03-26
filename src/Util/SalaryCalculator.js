export default  class SalaryCalculator{
    static calculate(employee){
        switch(employee.type){
            case 'fixed':
                return 100;
            default:
                 return 0;
        }
    }

}