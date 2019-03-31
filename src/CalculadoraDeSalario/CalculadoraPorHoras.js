export default class CalculadoraPorHoras {
    static calcular(empleado) {
        let salario = 0
        if (empleado.tipo === 'porHora') {
            salario = (empleado.hojaDeTiempo.tarifa * empleado.hojaDeTiempo.horasTotalesTrabajadas)
        }
        return salario;
    }
}