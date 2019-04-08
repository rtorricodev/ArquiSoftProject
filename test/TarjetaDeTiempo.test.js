const expect = require('chai').expect;

import TarjetaDeTiempo from '../src/Tarjetas/TarjetaDeTiempo.js';
import RegistroDeTiempo from '../src/Hojas/RegistroDeTiempo.js';


describe('Funciones básica de las tarjetas de registro de tiempo', () => {
    let nuevoRegistro;

    let horaDeEntrada;
    let horaDeSalida;

    let horaDeEntrada2;
    let horaDeSalida2;

    let tarjeta1;
    let tarjeta2;


    beforeEach(()=>{

        nuevoRegistro = new RegistroDeTiempo(7,10);

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

    it('Debería poder asignar una tarjeta a un registro de tiempo', ()=>{
        let numeroActualDeTarjetas = nuevoRegistro.retornarNumeroDeTarjetas();
        nuevoRegistro.agregarTarjetaARegistro(tarjeta1);
        expect(nuevoRegistro.retornarNumeroDeTarjetas()).equal(numeroActualDeTarjetas + 1);
    })

    it('Debería poder asignarse varias tarjetas a un registro de tiempo', ()=>{
       let listaDeTarjetas = [tarjeta1,tarjeta2];
       let numeroActualDeTarjetas = nuevoRegistro.retornarNumeroDeTarjetas();
       nuevoRegistro.agregarListaDeTarjetas(listaDeTarjetas);
       expect(nuevoRegistro.retornarNumeroDeTarjetas()).equal(numeroActualDeTarjetas + listaDeTarjetas.length)
    })
})