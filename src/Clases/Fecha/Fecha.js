export default class Fecha {

    constructor(dia, mes, anho) {
        this.fechaFormateada = dia + '/' + mes + '/' + anho;
    }

    retornarFechaActual() {
        let hoy = new Date();
        let dia = hoy.getDate();
        let mes = hoy.getMonth() + 1;
        let anho = hoy.getFullYear();
        let FechaDeHoy = dia + '/' + mes + '/' + anho;
        return FechaDeHoy;
    }

}