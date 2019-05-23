const expect = require('chai').expect;

import Fecha from '../src/LogicaDeNegocio/Entidades/Fecha.js';

describe('Funciones basicas para clase fecha', () => {

    it('Verificar si se crea fecha actual con el formato dd/mm/aaaa', () => {
        let fecha = new Fecha();
        let fechaDeHoy = new Date();
        let dia = fechaDeHoy.getDate();
        let mes = fechaDeHoy.getMonth() + 1;
        let anho = fechaDeHoy.getFullYear();
        fecha.retornarFechaActual();
        expect(fecha.fechaDeHoy).equal(dia + '/' + mes + '/' + anho);
    })

    it('Verificar si se crea fecha deseada 17/4/2019', () => {
        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(17, 4, 2019);
        expect(fecha.fechaFormateada).equal('17/4/2019');
    })

})