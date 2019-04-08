const expect = require('chai').expect;

import TarjetaDeTiempo from '../src/Tarjetas/TarjetaDeTiempo.js';
import RegistroDeTiempo from '../src/Hojas/RegistroDeTiempo.js';


describe('Funciones básica de las tarjetas de registro de tiempo', () => {
    it('Debería poder asignar una tarjeta a un registro de tiempo', ()=>{

        let registroDeCarlos = new RegistroDeTiempo(7,10);

        let horaDeEntrada = new Date();
        horaDeEntrada.setHours(10);
        horaDeEntrada.setMinutes(0);

        let horaDeSalida = new Date();
        horaDeSalida.setHours(11);
        horaDeSalida.setMinutes(0);

        let tarjeta1 = new TarjetaDeTiempo(horaDeEntrada,horaDeSalida);
        registroDeCarlos.agregarTarjetaARegistro(tarjeta1);
        expect(registroDeCarlos.retornarNumeroDeTarjetas()).equal(1);
    })
})