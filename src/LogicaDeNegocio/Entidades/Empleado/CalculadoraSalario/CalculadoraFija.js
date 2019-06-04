class CalculadoraFija{
    constructor(salarioFijo, fechaInicioDeTrabajo){
        this.salarioFijo = salarioFijo;
        this.fechaInicioDeTrabajo = fechaInicioDeTrabajo;
        this.recibioSuPrimerPago = false;
    }

    calcularMonto(){
        if(this.noRecibioSuPrimerPago()){
            this.recibioSuPrimerPago = true;
            return this.obtenerSalarioProrrateado();
        }
        return this.salarioFijo - cuotaSindicato;
    }

    noRecibioSuPrimerPago(){
        return !this.recibioSuPrimerPago === true;
    }

    obtenerSalarioProrrateado(){
        return (this.salarioFijo * this.obtenerDiasTrabajados()) / this.fechaInicioDeTrabajo.obtenerUltimoDiaMes();
    }

    obtenerDiasTrabajados(){
        return (this.fechaInicioDeTrabajo.obtenerUltimoDiaMes() - this.fechaInicioDeTrabajo.dia + 1 );
    }
}

module.exports = CalculadoraFija;