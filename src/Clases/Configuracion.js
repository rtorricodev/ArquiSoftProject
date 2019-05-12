import ServicioNotificacion from './ServicioNotificacion';

export default class Configuracion {
    constructor() {
        this.serviciosDeNotificaciones = [];
    }

    anadirServicioNotificacion(nombre) {
        let servicioNotificacion = new ServicioNotificacion(nombre);
        this.serviciosDeNotificaciones.push(servicioNotificacion);
    }

    escogerMetodoDePago(tipo) {
        switch (tipo) {
            case 'Cheque':
                this.metodoDePago = new pagoPorCheque();
                break;
            case 'Efectivo':
                this.metodoDePago = new pagoEnEfectivo();
                break;
            case 'Deposito':
                this.metodoDePago = new pagoPorDepositoBancario();
                break;
        }
    }

}