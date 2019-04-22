const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import { beforeEach } from 'mocha';

describe('Funciones basicas del metodo de pago', () => {

    let empleado;
    beforeEach(() => {
        empleado = new Empleado('Carlos');
    });

    it('Deberia crear un empleado con el metodo de pago por cheque', () => {
        empleado.configuracion.escogerMetodoDePago('Cheque');
        expect(empleado.configuracion.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por cheque');
    })

    it('Deberia crear un empleado con el metodo de pago en efectivo', () => {
        empleado.configuracion.escogerMetodoDePago('Efectivo');
        expect(empleado.configuracion.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado en efectivo por RRHH');
    })

    it('Deberia crear un empleado con el metodo de pago por deposito bancario', () => {
        empleado.configuracion.escogerMetodoDePago('Deposito');
        expect(empleado.configuracion.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por deposito bancario');
    })

    it('Deberia crear un empleado con el metodo de pago efectivo y cambia a cheque', () => {
        empleado.configuracion.escogerMetodoDePago('Efectivo');
        empleado.configuracion.escogerMetodoDePago('Cheque');
        expect(empleado.configuracion.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por cheque');
    })

})