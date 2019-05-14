import notificacionPorSMS from './GestorDeNotificaciones/notificacionPorSMS';
import notificacionPorCorreo from './GestorDeNotificaciones/notificacionPorCorreo.js';
import notificacionPorFacebook from './GestorDeNotificaciones/notificacionPorFacebook.js';
import notificacionPorWhatsApp from './GestorDeNotificaciones/notificacionPorWhatsApp.js';

export default class ServicioNotificacion {

    constructor(nombre) {
        this.tipo = this.crearTipoDeNotificacion(nombre);
        this.notificar = true;
    }

    activarNotificacion() {
        this.notificar = true;
    }

    desactivarNotificacion() {
        this.notificar = false;
    }

    crearTipoDeNotificacion(nombre) {
        let tipo
        switch (nombre) {
            case 'SMS':
                tipo = new notificacionPorSMS();
                break;
            case 'Correo':
                tipo = new notificacionPorCorreo();
                break;
            case 'Facebook':
                tipo = new notificacionPorFacebook();
                break;
            case 'WhatsApp':
                tipo = new notificacionPorWhatsApp();
                break;
        }
        return tipo;
    }
}