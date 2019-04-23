import CalculadoraPorComision from './CalculadoraDeSalario/CalculadoraPorComision.js';
import CalculadoraPorHoras from './CalculadoraDeSalario/CalculadoraPorHoras.js';
import CalculadoraFija from './CalculadoraDeSalario/CalculadoraFija.js';

export default class Boleta {
    constructor(empleado) {
        this.empleado = empleado;
        this.salario  = this.calcularSalario();
    }

    crearCalculadoraDeSalario(){
        switch(this.empleado.tipo){
            case 'fijo': 
                return new CalculadoraFija;
            case 'comision': 
                return new CalculadoraPorComision;
            case 'porHora': 
                return new CalculadoraPorHoras;
        }
    }

    calcularSalario(){
        return this.crearCalculadoraDeSalario().calcularMonto(this.empleado);
    }

}