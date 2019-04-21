import notificacionPorSMS from './GestorDeNotificaciones/notificacionPorSMS';

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
        }
        return tipo;
    }
}