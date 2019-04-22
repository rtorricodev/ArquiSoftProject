export default class CalculadoraFija{
    calcularMonto(empleado){
        if(!empleado.recibioSuPrimerPago){
            /*salario prorrateado*/
            empleado.recibioSuPrimerPago = true;
            return (empleado.salarioFijo * (empleado.fechaInicioDeTrabajo.obtenerUltimoDiaMes() - empleado.fechaInicioDeTrabajo.dia + 1 )) / empleado.fechaInicioDeTrabajo.obtenerUltimoDiaMes();
        }
        return empleado.salarioFijo;
    }
}