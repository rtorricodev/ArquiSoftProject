const expect = require('chai').expect;

import Empleado from '../src/Empleado.js';
import Boleta from '../src/Boleta.js';
import HojaDeTiempo from '../src/Hojas/RegistroDeTiempo';
import HojaDeVenta from '../src/Hojas/RegistroDeVenta';

describe('Funciones basicas de la calculadora de fecha de pago', () => {

    it('Verificar si Carlos, un empleado fijo, esta disponible para recibir su pago tomando en cuenta la fecha actual', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000);
        let BoletaDeCarlos = new Boleta(Carlos);
        expect(BoletaDeCarlos.estaDisponibleParaPagar).equal(false);
    })

    it('Verificar si Roxana, un empleado por hora, esta disponible para recibir su pago tomando en cuenta la fecha actual', () => {
        let HojaDeTiempoDeRoxana = new HojaDeTiempo(7, 180);
        let Roxana = new Empleado('Roxana');
        Roxana.esEmpleadoPorHora(HojaDeTiempoDeRoxana);
        let BoletaDeRoxana = new Boleta(Roxana);
        expect(BoletaDeRoxana.estaDisponibleParaPagar).equal(false);
    })

    it('Verificar si Juan, un empleado por comision, esta disponible para recibir su pago tomando en cuenta la fecha actual', () => {
        let HojaDeVentaDeJuan = new HojaDeVenta(2, 200);
        let Juan = new Empleado('Juan');
        Juan.esEmpleadoPorComision(HojaDeVentaDeJuan,2000);
        let BoletaDeJuan = new Boleta(Juan);
        expect(BoletaDeJuan.estaDisponibleParaPagar).equal(false);
    })

})