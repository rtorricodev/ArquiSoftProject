import { Notificacion } from './Notificacion.js'

export class decoradorNotificacion extends Notificacion {
    constructor(notificacion) {
        super();
        this.notificacion = notificacion;
    }

    notificar() {}
}