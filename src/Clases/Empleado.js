import CalculadoraFechaPorComision from './CalculadoraDeFechaPago/CalculadoraFechaPorComision.js';
import CalculadoraFechaPorHoras from './CalculadoraDeFechaPago/CalculadoraFechaPorHoras.js';
import CalculadoraFechaFija from './CalculadoraDeFechaPago/CalculadoraFechaFija.js';
import pagoPorCheque from './GestorDePagos/pagoPorCheque.js';
import pagoEnEfectivo from './GestorDePagos/pagoEnEfectivo.js';
import pagoPorDepositoBancario from './GestorDePagos/pagoPorDepositoBancario.js';
import Notificacion from './Notificacion.js';

export default class Empleado {
    constructor(nombre, apellido, celular, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.celular = celular;
        this.correo = correo;
        this.contadorDeViernes = 0;
        this.recibioSuPrimerPago = false;
        this.notificaciones = [];
        //TODO:añadir Facebook,numero de cuenta
    }

    esEmpleadoFijo(salarioFijo, fechaInicioDeTrabajo) {
        this.fechaInicioDeTrabajo = fechaInicioDeTrabajo;
        this.tipo = 'fijo';
        this.salarioFijo = salarioFijo;
    }

    esEmpleadoPorHora(RegistroDeTiempo) {
        this.tipo = 'porHora';
        this.RegistroDeTiempo = RegistroDeTiempo;
    }

    esEmpleadoPorComision(RegistroDeVenta, salarioFijo) {
        this.tipo = 'comision';
        this.salarioFijo = salarioFijo;
        this.RegistroDeVenta = RegistroDeVenta;
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

    verificarSiEstaDisponibleParaPagar(fecha) {
        return this.crearCalculadoraDeFechaPago().estaDisponibleParaPagar(fecha, this);
    }

    crearMetodoDePago(tipo) {
        switch (tipo) {
            case 'Cheque':
                this.metodoDePago = new pagoPorCheque();
                break;
            case 'Efectivo':
                this.metodoDePago = new pagoEnEfectivo();
                break;
            case 'Deposito':
                this.metodoDePago = new pagoPorDepositoBancario();
                break;
        }
    }

    anadirNotificacion(nombre) {
        let notificacion = new Notificacion(nombre);
        this.notificaciones.push(notificacion);
    }

}