export default class CalculadoraFija{
    calcularMonto(empleado){
        if(this.noRecibioSuPrimerPago(empleado)){
            empleado.recibioSuPrimerPago = true;
            return this.obtenerSalarioProrrateado(empleado);
        }
        return empleado.salarioFijo;
    }

    noRecibioSuPrimerPago(empleado){
        return empleado.recibioSuPrimerPago === false;
    }

    obtenerSalarioProrrateado(empleado){
        return (empleado.salarioFijo * (empleado.fechaInicioDeTrabajo.obtenerUltimoDiaMes() - empleado.fechaInicioDeTrabajo.dia + 1 )) / empleado.fechaInicioDeTrabajo.obtenerUltimoDiaMes();
    }
}