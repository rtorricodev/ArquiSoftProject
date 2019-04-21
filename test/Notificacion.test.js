const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';

describe('Funciones basicas de las notificaciones', () => {

    let empleado;
    beforeEach(() => {
        empleado = new Empleado('Carlos', 'Bodoque', 77777777, 'carlosBodoque@esMiEmail.com');
    });

    it('Deberia crear notificacion de SMS para un empleado', () => {
        empleado.anadirNotificacion('SMS');
        expect(empleado.notificaciones[0].tipo.mensajeDeNotificacion()).equal('Sera notificado por SMS');
    });

    it('Deberia crear notificacion de correo para un empleado', () => {
        empleado.anadirNotificacion('Correo');
        expect(empleado.notificaciones[0].tipo.mensajeDeNotificacion()).equal('Sera notificado por correo');
    });

})