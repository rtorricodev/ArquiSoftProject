const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

import Empleado from '../src/Empleado.js';
import Boleta from '../src/Boleta.js';
import HojaDeTiempo from '../src/Hojas/hojaDeTiempo.js';
import HojaDeVenta from '../src/Hojas/hojaDeVenta.js';

describe('Funciones basicas de la calculadora de salario', () => {
    
    let Carlos;

    beforeEach(()=>{
       Carlos = new Empleado('Carlos');
    })

    it('Generar boleta de salario para Carlos que es empleado fijo con 2000$ de salario', () => {
        Carlos.esEmpleadoFijo(2000);
        let BoletaDeCarlos = new Boleta(Carlos);
        expect(BoletaDeCarlos.salario).equal(2000);
    })

    it('Generar boleta de salario para Roxana que es un empleado por hora', () => {
        let HojaDeTiempoDeRoxana = new HojaDeTiempo(7, 180);
        let Roxana = new Empleado('Roxana');
        Roxana.esEmpleadoPorHora(HojaDeTiempoDeRoxana);
        let BoletaDeRoxana = new Boleta(Roxana);
        expect(BoletaDeRoxana.salario).equal(1260);
    })

    it('Generar boleta de salario para Juan que es un empleado por comision', () => {
        let HojaDeVentaDeJuan = new HojaDeVenta(2, 200);
        let Juan = new Empleado('Juan');
        Juan.esEmpleadoPorComision(HojaDeVentaDeJuan,2000);
        let BoletaDeJuan = new Boleta(Juan);
        expect(BoletaDeJuan.salario).equal(2400);
    })

    it('Generar boleta de salario para Carlos que era un empleado fijo y ahora es por hora', () => {
        let HojaDeTiempoDeCarlos = new HojaDeTiempo(7, 180);
        Carlos.esEmpleadoPorHora(HojaDeTiempoDeCarlos);
        let BoletaDeCarlos = new Boleta(Carlos);
        expect(BoletaDeCarlos.salario).equal(1260);
    })

    it('Generar boleta de salario para Carlos que era un empleado fijo y ahora es por comision', () => {
        let HojaDeVentasDeCarlos = new HojaDeVenta(2, 200);
        Carlos.esEmpleadoPorComision(HojaDeVentasDeCarlos,2000);
        let BoletaDeCarlos = new Boleta(Carlos);
        expect(BoletaDeCarlos.salario).equal(2400);
    })

})