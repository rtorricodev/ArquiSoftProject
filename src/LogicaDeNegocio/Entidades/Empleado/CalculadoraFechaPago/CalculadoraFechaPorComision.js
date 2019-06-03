class CalculadoraFechaPorComision {
    constructor(){
        this.estaDisponible = false;
        this.contadorDeViernes = 0;
    }

    estaDisponibleParaPagar(fecha){
        if(fecha.esViernes()){
            if(this.pasaronDosSemanas()){
                this.estaDisponible = true;
            }
        }   
        this.restaurarContadorDeEmpleado(); 
        return this.estaDisponible;
    }

    pasaronDosSemanas(){
        return this.contadorDeViernes === 0 || this.contadorDeViernes === 2;
    }

    restaurarContadorDeEmpleado(){
        if(this.contadorDeViernes === 3){
            this.contadorDeViernes = 0;
        }
        else{
            this.contadorDeViernes += 1;
        }
    }

}

module.exports = CalculadoraFechaPorComision;