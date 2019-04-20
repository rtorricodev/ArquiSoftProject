import CalculadoraFechaPorComision from './CalculadoraDeFechaPago/CalculadoraFechaPorComision.js';
import CalculadoraFechaPorHoras from './CalculadoraDeFechaPago/CalculadoraFechaPorHoras.js';
import CalculadoraFechaFija from './CalculadoraDeFechaPago/CalculadoraFechaFija.js';
import Fecha from './Fecha/Fecha.js';

export default class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
        this.contadorDeViernes = 0;
        //TODO:añadir apellido,celular,correo,Facebook,numero de cuenta
    }

    esEmpleadoFijo(salarioFijo){
        this.tipo         = 'fijo';
        this.salarioFijo  = salarioFijo;
    }

    esEmpleadoPorHora(RegistroDeTiempo){
        this.tipo             = 'porHora'; 
        this.RegistroDeTiempo = RegistroDeTiempo;
    }

    esEmpleadoPorComision(RegistroDeVenta,salarioFijo){   
        this.tipo            = 'comision';
        this.salarioFijo     = salarioFijo;
        this.RegistroDeVenta = RegistroDeVenta;
    }

    crearCalculadoraDeFechaPago(){
        switch(this.tipo){
            case 'fijo': 
                return new CalculadoraFechaFija;
            case 'comision': 
                return new CalculadoraFechaPorComision;
            case 'porHora': 
                return new CalculadoraFechaPorHoras;
        }
    }

    verificarSiEstaDisponibleParaPagar(fecha){
        return this.crearCalculadoraDeFechaPago().estaDisponibleParaPagar(fecha, this);
    }

}