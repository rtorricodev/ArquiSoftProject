const expect = require('chai').expect;

import RegistroDeTiempo from '../src/Clases/RegistroDeTiempo.js';
import TarjetaDeTiempo from '../src/Clases/TarjetaDeTiempo.js';

describe('Funciones básicas del registro de tiempo',()=>{

    let nuevoRegistro;
    let nuevoRegistro2;

    let horaDeEntrada;
    let horaDeSalida;

    let horaDeEntrada2;
    let horaDeSalida2;

    let tarjeta1;
    let tarjeta2;

    beforeEach(()=>{

        nuevoRegistro = new RegistroDeTiempo(7,10);
        nuevoRegistro2 = new RegistroDeTiempo(7,10);

        horaDeEntrada = new Date();
        horaDeEntrada.setHours(10);
        horaDeEntrada.setMinutes(0);

        horaDeSalida = new Date();
        horaDeSalida.setHours(11);
        horaDeSalida.setMinutes(0);

        horaDeEntrada2 = new Date();
        horaDeEntrada2.setHours(15);
        horaDeEntrada2.setMinutes(0);

        horaDeSalida2 = new Date();
        horaDeSalida2.setHours(16);
        horaDeSalida2.setMinutes(0);

        tarjeta1 = new TarjetaDeTiempo(horaDeEntrada, horaDeSalida);
        tarjeta2 = new TarjetaDeTiempo(horaDeEntrada2, horaDeSalida2);

    })

    it('Debe calcular el tiempo total de una tarjeta', ()=>{
        nuevoRegistro.agregarTarjetaARegistro(tarjeta1);
        expect(nuevoRegistro.retornarHorasTotalesCalculadas()).equal(tarjeta1.calcularDuracion());
    })

    it('Debe calcular el tiempo total de una lista de tarjetas',()=>{
        let listaDeTarjetas = [tarjeta1,tarjeta2];
        nuevoRegistro2.agregarListaDeTarjetas(listaDeTarjetas);
        expect(nuevoRegistro2.retornarHorasTotalesCalculadas()).equal(tarjeta1.calcularDuracion() + tarjeta2.calcularDuracion());
    })
})