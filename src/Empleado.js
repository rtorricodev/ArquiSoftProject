import CalculadoraPorComision from './CalculadoraDeSalario/CalculadoraPorComision.js';
import CalculadoraPorHoras from './CalculadoraDeSalario/CalculadoraPorHoras.js';

export default class Empleado {
    constructor(nombre, tipo, salarioFijo, hojaDeTiempo, hojaDeVenta) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hojaDeTiempo = hojaDeTiempo;
        this.hojaDeVenta = hojaDeVenta;
        this.salarioFijo = salarioFijo;
    }

    calcularSalario() {
        this.salarioPorComision = CalculadoraPorComision.calcular(this);
        this.salarioPorHora = CalculadoraPorHoras.calcular(this);
    }
}