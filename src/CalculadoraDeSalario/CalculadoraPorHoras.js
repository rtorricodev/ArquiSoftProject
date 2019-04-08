export default class CalculadoraPorHoras {
    static calcularMonto(empleado) {
        return (empleado.RegistroDeTiempo.tarifa * 
                empleado.RegistroDeTiempo.horasTotalesTrabajadas);
    }
}