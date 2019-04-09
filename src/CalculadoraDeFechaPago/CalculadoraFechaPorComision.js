export default class CalculadoraFechaPorComision {

    constructor(){
        this.estaDisponible = false;
        this.diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    }


    estaDisponibleParaPagar(fecha, empleado){
        let  dia = this.obtenerDiaEnBaseALaFecha(fecha);
        if(this.esViernes(dia)){
            if(pasaronDosSemanas()){
                this.this.estaDisponible = true;
            }
        }   
        this.restaurarContadorDeEmpleado(empleado);
        return this.estaDisponible;
    }


    pasaronDosSemanas(empleado){
        return empleado.contadorDeViernes === 0 || empleado.contadorDeViernes === 2
    }

    obtenerDiaEnBaseALaFecha(fecha){  //Esta funcion se repite en dos archivos
        return this.diasSemana[fecha.getDay()];
    }

    restaurarContadorDeEmpleado(empleado){
        if(empleado.contadorDeViernes == 3){
            empleado.contadorDeViernes == 0;
        }
        else{
            empleado.contadorDeViernes += 1;
        }
    }

    esViernes(dia){  //Esta funcion se repite en dos archivos
        return dia === "Viernes"
    }
}