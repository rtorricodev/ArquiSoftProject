export default class CalculadoraFechaPorComision {

    constructor(){
        this.estaDisponible = false;
    }

    estaDisponibleParaPagar(fecha, empleado){
        if(fecha.esViernes()){
            if(this.pasaronDosSemanas(empleado)){
                this.estaDisponible = true;
            }
        }   
        this.restaurarContadorDeEmpleado(empleado); 
        return this.estaDisponible;
    }

    pasaronDosSemanas(empleado){
        return empleado.contadorDeViernes === 0 || empleado.contadorDeViernes === 2;
    }

    restaurarContadorDeEmpleado(empleado){
        if(empleado.contadorDeViernes === 3){
            empleado.contadorDeViernes = 0;
        }
        else{
            empleado.contadorDeViernes += 1;
        }
    }

}