export default class CalculadoraFija{
    calcularMonto(empleado){
        if(this.noRecibioSuPrimerPago(empleado)){
            empleado.recibioSuPrimerPago = true;
            return this.obtenerSalarioProrrateado(empleado);
        }
        return empleado.salarioFijo;
    }

    noRecibioSuPrimerPago(empleado){
        return !empleado.recibioSuPrimerPago === true;
    }

    obtenerSalarioProrrateado(empleado){
        return (empleado.salarioFijo * this.obtenerDiasTrabajados(empleado)) / empleado.fechaInicioDeTrabajo.obtenerUltimoDiaMes();
    }

    obtenerDiasTrabajados(empleado){
        return (empleado.fechaInicioDeTrabajo.obtenerUltimoDiaMes() - empleado.fechaInicioDeTrabajo.dia + 1 );
    }
}