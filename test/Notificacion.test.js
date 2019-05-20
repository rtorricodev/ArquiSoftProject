const expect = require('chai').expect;

import { Notificacion } from '../src/Notificacion/Notificacion.js';
import { Correo } from '../src/Notificacion/Tipos/Correo.js';
import { WhatsApp } from '../src/Notificacion/Tipos/WhatsApp.js';
import { Facebook } from '../src/Notificacion/Tipos/Facebook.js';
import { SMS } from '../src/Notificacion/Tipos/SMS.js';

let notificacion;
beforeEach(() => {
    notificacion = new Notificacion();
})

describe('Funciones basicas de las notificaciones', () => {

    it('Deberia crear notificacion por correo', () => {
        notificacion = new Correo(notificacion);
        expect(notificacion.notificar()).equal('Sera notificado por correo');
    });

    it('Deberia crear notificacion por whatsapp', () => {
        notificacion = new WhatsApp(notificacion);
        expect(notificacion.notificar()).equal('Sera notificado por WhatsApp');
    });

    it('Deberia crear notificacion por facebook', () => {
        notificacion = new Facebook(notificacion);
        expect(notificacion.notificar()).equal('Sera notificado por Facebook');
    });

    it('Deberia crear notificacion por SMS', () => {
        notificacion = new SMS(notificacion);
        expect(notificacion.notificar()).equal('Sera notificado por SMS');
    });

})