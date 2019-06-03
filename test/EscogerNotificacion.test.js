const expect = require('chai').expect;

import { Notificacion } from '../src/LogicaDeNegocio/Entidades/Notificaciones/Notificacion.js';
import { Correo } from '../src/LogicaDeNegocio/Entidades/Notificaciones/Tipos/Correo.js';
import { WhatsApp } from '../src/LogicaDeNegocio/Entidades/Notificaciones/Tipos/WhatsApp.js';
import { Facebook } from '../src/LogicaDeNegocio/Entidades/Notificaciones/Tipos/Facebook.js';
import { SMS } from '../src/LogicaDeNegocio/Entidades/Notificaciones/Tipos/SMS.js';


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