const expect = require('chai').expect;

import Empleado from '../src/LogicaDeNegocio/Entidades/Empleado/Empleado.js';
import { beforeEach } from 'mocha';
import PagoPorCheque from '../src/LogicaDeNegocio/Entidades/Empleado/FormaDePago/PagoPorCheque.js';
import PagoEnEfectivo from '../src/LogicaDeNegocio/Entidades/Empleado/FormaDePago/PagoEnEfectivo.js';
import PagoPorDepositoBancario from '../src/LogicaDeNegocio/Entidades/Empleado/FormaDePago/PagoPorDepositoBancario.js';

describe('Funciones basicas del metodo de pago', () => {

    let empleado;
    let empleado2;
    let empleado3;
    let cheque;
    let efectivo;
    let bancario;
    
    beforeEach(() => {
        cheque = new PagoPorCheque();
        efectivo = new PagoEnEfectivo();
        bancario = new PagoPorDepositoBancario();
        empleado = new Empleado('Carlos', 'Bodoque', 77777777, 'carlos@gmail.com', 'fijo', 'fechafijo', cheque);
        empleado2 = new Empleado('Carlos', 'Bodoque', 77777777, 'carlos@gmail.com', 'fijo', 'fechafijo', efectivo);
        empleado3 = new Empleado('Carlos', 'Bodoque', 77777777, 'carlos@gmail.com', 'fijo', 'fechafijo', bancario);
    });

    it('Deberia crear un empleado con el metodo de pago por cheque', () => {
        expect(empleado.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por cheque');
    })

    it('Deberia crear un empleado con el metodo de pago en efectivo', () => {
        expect(empleado2.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado en efectivo por RRHH');
    })

    it('Deberia crear un empleado con el metodo de pago por deposito bancario', () => {
        expect(empleado3.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por deposito bancario');
    })

    it('Deberia crear un empleado con el metodo de pago efectivo y cambia a cheque', () => {
        empleado2.metodoDePago = cheque;
        expect(empleado2.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por cheque');
    })

})