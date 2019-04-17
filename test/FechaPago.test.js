const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import Boleta from '../src/Clases/Boleta.js';
import HojaDeTiempo from '../src/Clases/RegistroDeTiempo.js';
import HojaDeVenta from '../src/Clases/RegistroDeVenta.js';

describe('Funciones basicas de la calculadora de fecha de pago', () => {

    it('Verificar si Carlos, un empleado fijo, esta disponible para recibir su pago tomando en cuenta la fecha actual', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000);
        expect(Carlos.estaDisponibleParaPagar).equal(false);
    })

    it('Verificar si Roxana, un empleado por hora, esta disponible para recibir su pago tomando en cuenta la fecha actual', () => {
        let HojaDeTiempoDeRoxana = new HojaDeTiempo(7, 180);
        let Roxana = new Empleado('Roxana');
        Roxana.esEmpleadoPorHora(HojaDeTiempoDeRoxana);
        expect(Roxana.estaDisponibleParaPagar).equal(false);
    })

    it('Verificar si Juan, un empleado por comision, esta disponible para recibir su pago tomando en cuenta la fecha actual', () => {
        let HojaDeVentaDeJuan = new HojaDeVenta(2, 200);
        let Juan = new Empleado('Juan');
        Juan.esEmpleadoPorComision(HojaDeVentaDeJuan,2000);
        expect(Juan.estaDisponibleParaPagar).equal(false);
    })

})