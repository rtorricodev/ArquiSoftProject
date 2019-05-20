import { decoradorNotificacion } from '../decoradorNotificacion.js';

export class WhatsApp extends decoradorNotificacion {
    constructor(notificacion) {
        super(notificacion);
        this.enviarNotificacion = this.notificar();
    }

    notificar() {
        return 'Sera notificado por WhatsApp';
    }
}