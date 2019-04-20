const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import Boleta from '../src/Clases/Boleta.js';
import RegistroDeTiempo from '../src/Clases/RegistroDeTiempo.js';
import RegistroDeVenta from '../src/Clases/RegistroDeVenta.js';

describe('Funciones basicas de la calculadora de salario', () => {

    let empleado;
    beforeEach(() => {
        empleado = new Empleado('Carlos');
    });

    it('Deberia generar boleta de salario para Carlos que es empleado fijo con 2000$ de salario', () => {
        empleado.esEmpleadoFijo(2000);
        let BoletaDeCarlos = new Boleta(empleado);
        expect(BoletaDeCarlos.salario).equal(2000);
    })

    it('Deberia generar boleta de salario para Roxana que es un empleado por hora', () => {
        let RegistroDeTiempoDeCarlos = new RegistroDeTiempo(7, 180);
        empleado.esEmpleadoPorHora(RegistroDeTiempoDeCarlos);
        let BoletaDeCarlos = new Boleta(empleado);
        expect(BoletaDeCarlos.salario).equal(1260);
    })

    it('Deberia generar boleta de salario para Juan que es un empleado por comision', () => {
        let RegistroDeVentaDeCarlos = new RegistroDeVenta(2, 200);
        empleado.esEmpleadoPorComision(RegistroDeVentaDeCarlos, 2000);
        let BoletaDeCarlos = new Boleta(empleado);
        expect(BoletaDeCarlos.salario).equal(2400);
    })

    it('Deberia generar boleta de salario para Carlos que era un empleado fijo y ahora es por hora', () => {
        empleado.esEmpleadoFijo(2000);
        let RegistroDeTiempoDeCarlos = new RegistroDeTiempo(7, 180);
        empleado.esEmpleadoPorHora(RegistroDeTiempoDeCarlos);
        let BoletaDeCarlos = new Boleta(empleado);
        expect(BoletaDeCarlos.salario).equal(1260);
    })

    it('Deberia generar boleta de salario para Carlos que era un empleado fijo y ahora es por comision', () => {
        empleado.esEmpleadoFijo(2000);
        let RegistroDeVentasDeCarlos = new RegistroDeVenta(2, 200);
        empleado.esEmpleadoPorComision(RegistroDeVentasDeCarlos, 2000);
        let BoletaDeCarlos = new Boleta(empleado);
        expect(BoletaDeCarlos.salario).equal(2400);
    })

})