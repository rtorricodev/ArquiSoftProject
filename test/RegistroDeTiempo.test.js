const expect = require('chai').expect;

import RegistroDeTiempo from '../src/Hojas/RegistroDeTiempo.js';
import TarjetaDeTiempo from '../src/Tarjetas/TarjetaDeTiempo.js';

describe('Funciones básicas del registro de tiempo',()=>{
    it('Debe calcular el tiempo total de una tarjeta', ()=>{

        let nuevoRegistro = new RegistroDeTiempo(7,10);
        
        let horaDeEntrada = new Date();
        horaDeEntrada.setHours(10);
        horaDeEntrada.setMinutes(0);

        let horaDeSalida = new Date();
        horaDeSalida.setHours(11);
        horaDeSalida.setMinutes(0);

        let tarjeta1 = new TarjetaDeTiempo(horaDeEntrada, horaDeSalida);

        nuevoRegistro.agregarTarjetaARegistro(tarjeta1);

        expect(nuevoRegistro.horasTotalesTrabajadas).equal(tarjeta1.calcurarDuracion());
    })
})