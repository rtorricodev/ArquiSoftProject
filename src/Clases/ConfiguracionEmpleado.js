import Notificacion from './Notificacion.js';

export default class ConfiguracionEmpleado {
    constructor() {
        this.serviciosDeNotificaciones = [];
    }

    anadirServicioNotificacion(nombre) {
        let servicioNotificacion = new Notificacion(nombre);
        this.serviciosDeNotificaciones.push(servicioNotificacion);
    }

}