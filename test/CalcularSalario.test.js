const expect = require('chai').expect;

import Empleado from '../src/LogicaDeNegocio/Entidades/Empleado/Empleado.js';
import RegistroDeTiempo from '../src/LogicaDeNegocio/Entidades/RegistroDeTiempo.js';
import RegistroDeVenta from '../src/LogicaDeNegocio/Entidades/RegistroDeVenta.js';
import Fecha from '../src/LogicaDeNegocio/Entidades/Fecha.js';
import TarjetaDeTiempo from '../src/LogicaDeNegocio/Entidades/TarjetaDeTiempo.js';

import CalculadoraPorComision from '../src/LogicaDeNegocio/CasosDeUso/CalcularSalario/CalculadoraPorComision.js';
import CalculadoraPorHoras from '../src/LogicaDeNegocio/CasosDeUso/CalcularSalario/CalculadoraPorHoras.js';
import CalculadoraFija from '../src/LogicaDeNegocio/CasosDeUso/CalcularSalario/CalculadoraFija.js';

describe('Funciones basicas de la calculadora de salario', () => {

    let empleado;
    let calculadoraFija;
    let calculadoraPorHora;
    let calculadoraPorComision;
    let registroDeTiempo;
    let registroDeVentasDeCarlos
    beforeEach(() => {
        empleado = new Empleado('Carlos', 'Bodoque', 77777777, 'carlosBodoque@esMiEmail.com');
        registroDeTiempo = new RegistroDeTiempo(7, 180);
        registroDeVentasDeCarlos = new RegistroDeVenta(2, 200);
        calculadoraFija = new CalculadoraFija(2000);
        calculadoraPorHora = new CalculadoraPorHoras(registroDeTiempo);
        calculadoraPorComision = new CalculadoraPorComision(2000, registroDeVentasDeCarlos);
    });

    it('Deberia generar boleta de salario para Carlos que es empleado fijo con 2000$ de salario', () => {
        empleado.calculadoraSalario = calculadoraFija;
        let fechaInicioDeTrabajo = new Fecha(1, 4, 2019);
        empleado.calculadoraSalario.fechaInicioDeTrabajo = fechaInicioDeTrabajo;
        expect(empleado.calcularSalario()).equal(2000);
    })

    it('Deberia generar boleta de salario para Carlos que es empleado fijo con 2000$ de salario, pero este entro a mediados del mes', () => {
        empleado.calculadoraSalario = calculadoraFija;
        let fechaInicioDeTrabajo = new Fecha(16, 4, 2019);
        empleado.calculadoraSalario.fechaInicioDeTrabajo = fechaInicioDeTrabajo;
        expect(empleado.calcularSalario()).equal(1000);
    })

    it('Deberia generar boleta de salario para Roxana que es un empleado por hora', () => {
        empleado.calculadoraSalario = calculadoraPorHora;
        expect(empleado.calcularSalario()).equal(1260);
    })

    it('Deberia generar boleta de salario para Roxana que es un empleado por hora que trabajo 3hrs extras', () => {
        empleado.calculadoraSalario = calculadoraPorHora;
        let registroDeTiempoDeCarlos = new RegistroDeTiempo(80, 0, 8);
        let diaInicio = new Date("December 17, 1995 03:00:00");
        let diaFin = new Date("December 17, 1995 13:00:00");
        let tarjetaDetiempoDeCarlos = new TarjetaDeTiempo(diaInicio, diaFin)
        registroDeTiempoDeCarlos.agregarTarjetaARegistro(tarjetaDetiempoDeCarlos);
        calculadoraPorHora.registroDeTiempo = registroDeTiempoDeCarlos;
        expect(empleado.calcularSalario()).equal(880);
    })

    it('Deberia generar boleta de salario para Juan que es un empleado por comision', () => {
        empleado.calculadoraSalario = calculadoraPorComision;
        expect(empleado.calcularSalario()).equal(2400);
    })

    it('Deberia generar boleta de salario para Carlos que era un empleado fijo y ahora es por hora', () => {
        empleado.calculadoraSalario = calculadoraFija;
        empleado.calculadoraSalario = calculadoraPorHora;
        expect(empleado.calcularSalario()).equal(1260);
    })

    it('Deberia generar boleta de salario para Carlos que era un empleado fijo y ahora es por comision', () => {
        empleado.calculadoraSalario = calculadoraFija;
        empleado.calculadoraSalario = calculadoraPorComision;
        expect(empleado.calcularSalario()).equal(2400);
    })

})