import CalculadoraPorComision from './CalculadoraDeSalario/CalculadoraPorComision.js';
import CalculadoraPorHoras from './CalculadoraDeSalario/CalculadoraPorHoras.js';
import CalculadoraFija from './CalculadoraDeSalario/CalculadoraFija.js';

import CalculadoraFechaPorComision from './CalculadoraDeFechaPago/CalculadoraFechaPorComision.js';
import CalculadoraFechaPorHoras from './CalculadoraDeFechaPago/CalculadoraFechaPorHoras.js';
import CalculadoraFechaFija from './CalculadoraDeFechaPago/CalculadoraFechaFija.js';

export default class Boleta {
    constructor(empleado) {
        this.empleado = empleado;
        this.salario  = this.actualizarSalario();
        this.fecha = new Date();
        this.estaDisponibleParaPagar = this.verificarSiEstaDisponibleParaPagar();
    }

    crearCalculadoraDeSalario(){
        switch(this.empleado.tipo){
            case 'fijo': 
                return CalculadoraFija;
            case 'comision': 
                return CalculadoraPorComision;
            case 'porHora': 
                return CalculadoraPorHoras;
        }
    }

    crearCalculadoraDeFechaPago(){
        switch(this.empleado.tipo){
            case 'fijo': 
                return CalculadoraFechaFija;
            case 'comision': 
                return CalculadoraFechaPorComision;
            case 'porHora': 
                return CalculadoraFechaPorHoras;
        }
    }

    actualizarSalario(){
        return this.crearCalculadoraDeSalario().calcularMonto(this.empleado);
    }

    verificarSiEstaDisponibleParaPagar(){
        return this.crearCalculadoraDeFechaPago().estaDisponibleParaPagar(this.fecha);
    }


}