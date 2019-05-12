const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import ServicioNotificacion from '../src/Clases/ServicioNotificacion.js';

describe('Funciones basicas de las notificaciones', () => {

    let empleado;
    let SMS = new ServicioNotificacion('SMS');
    let correo = new ServicioNotificacion('Correo');
    let facebook = new ServicioNotificacion('Facebook');
    let wtp = new ServicioNotificacion('WhatsApp');
    beforeEach(() => {
        empleado = new Empleado('Carlos', 'Bodoque', 77777777, 'carlosBodoque@esMiEmail.com', 'cheque', SMS);
    });

    it('Deberia crear notificacion de SMS para un empleado', () => {
        expect(empleado.notificar()).equal('Sera notificado por SMS');
    });

    it('Deberia crear notificacion de correo para un empleado', () => {
        empleado.notificacion = correo;
        expect(empleado.notificar()).equal('Sera notificado por correo');
    });

    it('Deberia crear notificacion de Facebook para un empleado', () => {
        empleado.notificacion = facebook;
        expect(empleado.notificar()).equal('Sera notificado por Facebook');
    });

    it('Deberia crear notificacion de WhatsApp para un empleado', () => {
        empleado.notificacion = wtp;
        expect(empleado.notificar()).equal('Sera notificado por WhatsApp');
    });

})