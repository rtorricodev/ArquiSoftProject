const expect = require('chai').expect;

import { Notificacion } from '../src/LogicaDeNegocio/CasosDeUso/RecibirNotificaciones/Notificacion.js';
import { Correo } from '../src/LogicaDeNegocio/CasosDeUso/RecibirNotificaciones/Tipos/Correo.js';
import { WhatsApp } from '../src/LogicaDeNegocio/CasosDeUso/RecibirNotificaciones/Tipos/WhatsApp';
import { Facebook } from '../src/LogicaDeNegocio/CasosDeUso/RecibirNotificaciones/Tipos/Facebook';
import { SMS } from '../src/LogicaDeNegocio/CasosDeUso/RecibirNotificaciones/Tipos/SMS.js';


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