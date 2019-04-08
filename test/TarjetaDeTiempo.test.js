const expect = require('chai').expect;

import TarjetaDeTiempo from '../src/Tarjetas/TarjetaDeTiempo.js';
import RegistroDeTiempo from '../src/Hojas/RegistroDeTiempo';


describe('Funciones básica de las tarjetas de registro de tiempo', () => {
    it('Debería poder asignar una tarjeta a un registro de tiempo', ()=>{

        let registroDeCarlos = new RegistroDeTiempo();

        let horaDeEntrada = new Date();
        horaDeEntrada.setHours = 10;
        horaDeEntrada.setMinutes = 0;
        
        let horaDeSalida = new Date;
        horaDeSalida.setHours = 11;
        horaDeSalida.setMinutes = 30;

        tarjeta1 = new TarjetaDeTiempo(horaDeEntrada,horaDeSalida);
        registroDeCarlos.agregar(tarjeta1);
        expect(registroDeCarlos.númeroDeTarjetas()).equal(1);
    })
})