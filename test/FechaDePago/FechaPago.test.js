const expect = require('chai').expect;

import Empleado from '../../src/Clases/Empleado.js';
import Fecha from '../../src/Clases/Fecha/Fecha.js';
import HojaDeTiempo from '../../src/Clases/RegistroDeTiempo.js';
import HojaDeVenta from '../../src/Clases/RegistroDeVenta.js';

describe('Funciones basicas de la calculadora de fecha de pago', () => {

    it('Verificar si Carlos, un empleado fijo, esta disponible para recibir su pago siendo ultimo dia del mes', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000);
        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(28, 2, 2019);
        expect(Carlos.verificarSiEstaDisponibleParaPagar(fecha)).equal(true);
    })

    it('Verificar si Carlos, un empleado fijo, esta disponible para recibir su pago siendo 20/04/2019', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000);
        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(20, 4, 2019);
        expect(Carlos.verificarSiEstaDisponibleParaPagar(fecha)).equal(false);
    })

    it('Verificar si Roxana, un empleado por hora, esta disponible para recibir su pago tomando en cuenta que es viernes', () => {
        let HojaDeTiempoDeRoxana = new HojaDeTiempo(7, 180);
        let Roxana = new Empleado('Roxana');
        Roxana.esEmpleadoPorHora(HojaDeTiempoDeRoxana);
        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(19, 4, 2019);
        expect(Roxana.verificarSiEstaDisponibleParaPagar(fecha)).equal(true);
    })

    it('Verificar si Roxana, un empleado por hora, esta disponible para recibir su pago siendo 20/04/2019', () => {
        let HojaDeTiempoDeRoxana = new HojaDeTiempo(7, 180);
        let Roxana = new Empleado('Roxana');
        Roxana.esEmpleadoPorHora(HojaDeTiempoDeRoxana);
        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(20, 4, 2019);
        expect(Roxana.verificarSiEstaDisponibleParaPagar(fecha)).equal(false);
    })

    it('Verificar si Juan, un empleado por comision, esta disponible para recibir su pago tomando en cuenta que es viernes', () => {
        let HojaDeVentaDeJuan = new HojaDeVenta(2, 200);
        let Juan = new Empleado('Juan');
        Juan.esEmpleadoPorComision(HojaDeVentaDeJuan, 2000);
        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(19, 4, 2019);
        expect(Juan.verificarSiEstaDisponibleParaPagar(fecha)).equal(true);
    })

    it('Verificar si Juan, un empleado por comision, esta disponible para recibir su pago tomando en cuenta que es el viernes siguiente al que se le pago', () => {
        let HojaDeVentaDeJuan = new HojaDeVenta(2, 200);
        let Juan = new Empleado('Juan');
        Juan.esEmpleadoPorComision(HojaDeVentaDeJuan, 2000);
        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(19, 4, 2019);
        Juan.verificarSiEstaDisponibleParaPagar(fecha);
        fecha.formatearFechaDDMMAA(26, 4, 2019);
        expect(Juan.verificarSiEstaDisponibleParaPagar(fecha)).equal(false);
    })

})