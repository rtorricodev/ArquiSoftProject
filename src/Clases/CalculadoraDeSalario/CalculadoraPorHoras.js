export default class CalculadoraPorHoras {
    calcularMonto(empleado) {
        return  this.obtenerCalculoDeSalarioHorasNormal(empleado) + this.obtenerCalculoDeSalarioHorasExtras(empleado);                
    }

    obtenerCalculoDeSalarioHorasNormal(empleado){
        return empleado.RegistroDeTiempo.tarifa * 
               (empleado.RegistroDeTiempo.retornarHorasTotalesCalculadas() + empleado.RegistroDeTiempo.horasTotalesTrabajadasManuales);
    }

    obtenerCalculoDeSalarioHorasExtras(empleado){
        return (empleado.RegistroDeTiempo.tarifa * 1.5) *
        empleado.RegistroDeTiempo.retornarHorasExtrasTotalesCalculadas();
    }

}