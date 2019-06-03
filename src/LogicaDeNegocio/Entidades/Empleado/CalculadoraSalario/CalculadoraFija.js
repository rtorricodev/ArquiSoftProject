class CalculadoraFija{
    constructor(salarioFijo, fechaInicioDeTrabajo, cuotaSindicato){
        this.salarioFijo = salarioFijo;
        this.fechaInicioDeTrabajo = fechaInicioDeTrabajo;
        this.recibioSuPrimerPago = false;
        this.cuotaSindicato = cuotaSindicato;
    }

    calcularMonto(){
        if(this.noRecibioSuPrimerPago()){
            this.recibioSuPrimerPago = true;
            return this.obtenerSalarioProrrateado() - cuotaSindicato;
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