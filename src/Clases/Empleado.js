import CalculadoraFechaPorComision from './CalculadoraDeFechaPago/CalculadoraFechaPorComision.js';
import CalculadoraFechaPorHoras from './CalculadoraDeFechaPago/CalculadoraFechaPorHoras.js';
import CalculadoraFechaFija from './CalculadoraDeFechaPago/CalculadoraFechaFija.js';

export default class Empleado {
    constructor(nombre, apellido, celularPrincipal, correoPrincipal, metodoDePago) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.celularPrincipal = celularPrincipal;
        this.correoPrincipal = correoPrincipal;
        this.contadorDeViernes = 0;
        this.recibioSuPrimerPago = false;
        this.metodoDePago = metodoDePago;
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

}