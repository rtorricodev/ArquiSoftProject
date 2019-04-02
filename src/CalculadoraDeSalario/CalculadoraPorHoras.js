export default class CalculadoraPorHoras {
    static calcularMonto(empleado) {
        return (empleado.hojaDeTiempo.tarifa * 
                empleado.hojaDeTiempo.horasTotalesTrabajadas);
    }
}