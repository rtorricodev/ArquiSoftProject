const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import Boleta from '../src/Clases/Boleta.js';
import RegistroDeTiempo from '../src/Clases/RegistroDeTiempo.js';
import RegistroDeVenta from '../src/Clases/RegistroDeVenta.js';
import Fecha from '../src/Clases/Fecha/Fecha.js';
import TarjetaDeTiempo from '../src/Clases/TarjetaDeTiempo.js';

describe('Funciones basicas de la calculadora de salario', () => {

    let empleado;
    beforeEach(() => {
        empleado = new Empleado('Carlos');
    });

    it('Deberia generar boleta de salario para Carlos que es empleado fijo con 2000$ de salario', () => {
        let fechaInicioDeTrabajo = new Fecha(1, 4, 2019);
        empleado.esEmpleadoFijo(2000,fechaInicioDeTrabajo);
        let BoletaDeCarlos = new Boleta(empleado);
        expect(BoletaDeCarlos.salario).equal(2000);
    })

    it('Deberia generar boleta de salario para Carlos que es empleado fijo con 2000$ de salario, pero este entro a mediados del mes', () => {
        let fechaInicioDeTrabajo = new Fecha(16, 4, 2019);
        empleado.esEmpleadoFijo(2000,fechaInicioDeTrabajo);
        let BoletaDeCarlos = new Boleta(empleado);
        expect(BoletaDeCarlos.salario).equal(1000);
    })

    it('Deberia generar boleta de salario para Roxana que es un empleado por hora', () => {
        let RegistroDeTiempoDeCarlos = new RegistroDeTiempo(7, 180);
        empleado.esEmpleadoPorHora(RegistroDeTiempoDeCarlos);
        let BoletaDeCarlos = new Boleta(empleado);
        expect(BoletaDeCarlos.salario).equal(1260);
    })

    it('Deberia generar boleta de salario para Roxana que es un empleado por hora que trabajo 3hrs extras', () => {
        let diaInicio = new Date("December 17, 1995 03:00:00");
        let diaFin = new Date("December 17, 1995 13:00:00");
        let tarjetaDetiempoDeCarlos = new TarjetaDeTiempo(diaInicio,diaFin)
        let registroDeTiempoDeCarlos = new RegistroDeTiempo(80,0,8);
        registroDeTiempoDeCarlos.agregarTarjetaARegistro(tarjetaDetiempoDeCarlos);
        empleado.esEmpleadoPorHora(registroDeTiempoDeCarlos);
        let BoletaDeCarlos = new Boleta(empleado);
        expect(BoletaDeCarlos.salario).equal(880);
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