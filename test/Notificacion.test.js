const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';

describe('Funciones basicas de las notificaciones', () => {

    let empleado;
    beforeEach(() => {
        empleado = new Empleado('Carlos', 'Bodoque', 77777777, 'carlosBodoque@esMiEmail.com');
    });

    it('Deberia crear notificacion de SMS para un empleado', () => {
        empleado.configuracionEmpleado.anadirServicioNotificacion('SMS');
        expect(empleado.configuracionEmpleado.serviciosDeNotificaciones[0].tipo.mensajeDeNotificacion()).equal('Sera notificado por SMS');
    });

    it('Deberia crear notificacion de correo para un empleado', () => {
        empleado.configuracionEmpleado.anadirServicioNotificacion('Correo');
        expect(empleado.configuracionEmpleado.serviciosDeNotificaciones[0].tipo.mensajeDeNotificacion()).equal('Sera notificado por correo');
    });

    it('Deberia crear notificacion de Facebook para un empleado', () => {
        empleado.configuracionEmpleado.anadirServicioNotificacion('Facebook');
        expect(empleado.configuracionEmpleado.serviciosDeNotificaciones[0].tipo.mensajeDeNotificacion()).equal('Sera notificado por Facebook');
    });

    it('Deberia crear notificacion de WhatsApp para un empleado', () => {
        empleado.configuracionEmpleado.anadirServicioNotificacion('WhatsApp');
        expect(empleado.configuracionEmpleado.serviciosDeNotificaciones[0].tipo.mensajeDeNotificacion()).equal('Sera notificado por WhatsApp');
    });

})