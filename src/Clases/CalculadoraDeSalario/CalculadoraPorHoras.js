export default class CalculadoraPorHoras {
    static calcularMonto(empleado) {
        return (empleado.RegistroDeTiempo.tarifa * 
                (empleado.RegistroDeTiempo.retornarHorasTotalesCalculadas() + empleado.RegistroDeTiempo.horasTotalesTrabajadasManuales)) + 
                ((empleado.RegistroDeTiempo.tarifa * 1.5) *
                empleado.RegistroDeTiempo.retornarHorasExtrasTotalesCalculadas());
    }


}