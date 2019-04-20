import CalculadoraFechaPorComision from './CalculadoraDeFechaPago/CalculadoraFechaPorComision.js';
import CalculadoraFechaPorHoras from './CalculadoraDeFechaPago/CalculadoraFechaPorHoras.js';
import CalculadoraFechaFija from './CalculadoraDeFechaPago/CalculadoraFechaFija.js';
import pagoPorCheque from './GestorDePagos/pagoPorCheque.js';

export default class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
        this.contadorDeViernes = 0;
        this.fecha = new Date();
        this.tipoDePago = 'efectivo'; //Por defecto para evitar errores
        this.metodoDePago = this.crearMetodoDePago();
        //TODO:añadir apellido,celular,correo,Facebook,numero de cuenta
    }

    esEmpleadoFijo(salarioFijo) {
        this.tipo = 'fijo';
        this.salarioFijo = salarioFijo;
        this.estaDisponibleParaPagar = this.verificarSiEstaDisponibleParaPagar();
    }

    esEmpleadoPorHora(RegistroDeTiempo) {
        this.tipo = 'porHora';
        this.RegistroDeTiempo = RegistroDeTiempo;
        this.estaDisponibleParaPagar = this.verificarSiEstaDisponibleParaPagar();
    }

    esEmpleadoPorComision(RegistroDeVenta, salarioFijo) {
        this.tipo = 'comision';
        this.salarioFijo = salarioFijo;
        this.RegistroDeVenta = RegistroDeVenta;
        this.estaDisponibleParaPagar = this.verificarSiEstaDisponibleParaPagar();
    }

    crearCalculadoraDeFechaPago() {
        switch (this.tipo) {
            case 'fijo':
                return new CalculadoraFechaFija;
            case 'comision':
                return new CalculadoraFechaPorComision;
            case 'porHora':
                return new CalculadoraFechaPorHoras;
        }
    }

    verificarSiEstaDisponibleParaPagar() {
        return this.crearCalculadoraDeFechaPago().estaDisponibleParaPagar(this.fecha, this);
    }

    crearMetodoDePago() {
        switch (this.tipoDePago) {
            case 'Cheque':
                this.metodoDePago = new pagoPorCheque();
        }
    }
}