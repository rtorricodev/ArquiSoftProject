const expect = require('chai').expect;

import Fecha from '../src/Clases/Fecha/Fecha.js';

describe('Funciones basicas para clase fecha', () => {

    it('Verificar si se crea fecha actual con el formato dd/mm/aaaa', () => {
        let fecha = new Fecha();
        let fechaDeHoy = new Date();
        let dia = fechaDeHoy.getDate();
        let mes = fechaDeHoy.getMonth() + 1;
        let anho = fechaDeHoy.getFullYear();
        expect(fecha.retornarFechaActual()).equal(dia + '/' + mes + '/' + anho);
    })

})