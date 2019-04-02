export default class CalculadoraPorHoras {
    static calcular(empleado) {
        return (empleado.hojaDeTiempo.tarifa * 
            empleado.hojaDeTiempo.horasTotalesTrabajadas);
    }
}