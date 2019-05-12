const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';

describe('Funciones basicas de las notificaciones', () => {

    let empleado;
    beforeEach(() => {
        empleado = new Empleado('Carlos', 'Bodoque', 77777777, 'carlosBodoque@esMiEmail.com');
    });

    // it('Deberia crear notificacion de SMS para un empleado', () => {
    //     empleado.configuracion.anadirServicioNotificacion('SMS');
    //     expect(empleado.configuracion.serviciosDeNotificaciones[0].tipo.notificar()).equal('Sera notificado por SMS');
    // });

    // it('Deberia crear notificacion de correo para un empleado', () => {
    //     empleado.configuracion.anadirServicioNotificacion('Correo');
    //     expect(empleado.configuracion.serviciosDeNotificaciones[0].tipo.notificar()).equal('Sera notificado por correo');
    // });

    // it('Deberia crear notificacion de Facebook para un empleado', () => {
    //     empleado.configuracion.anadirServicioNotificacion('Facebook');
    //     expect(empleado.configuracion.serviciosDeNotificaciones[0].tipo.notificar()).equal('Sera notificado por Facebook');
    // });

    // it('Deberia crear notificacion de WhatsApp para un empleado', () => {
    //     empleado.configuracion.anadirServicioNotificacion('WhatsApp');
    //     expect(empleado.configuracion.serviciosDeNotificaciones[0].tipo.notificar()).equal('Sera notificado por WhatsApp');
    // });

})