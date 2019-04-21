import notificacionPorSMS from './GestorDeNotificaciones/notificacionPorSMS';
import notificacionPorCorreo from './GestorDeNotificaciones/notificacionPorCorreo.js';
import notificacionPorFacebook from './GestorDeNotificaciones/notificacionPorFacebook.js';

export default class Notificacion {

    constructor(nombre) {
        this.tipo = this.crearTipoDeNotificacion(nombre);
        this.notificar = true;
    }

    activarNotificacion() {
        this.notificar = true;
    }

    DesactivarNotificacion() {
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
        }
        return tipo;
    }
}