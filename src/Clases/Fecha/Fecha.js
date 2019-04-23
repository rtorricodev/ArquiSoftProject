export default class Fecha {

    constructor(dia, mes, anho) {
        this.dia = dia;
        this.mes = mes;
        this.anho = anho;
    }

    retornarFechaActual() {
        let hoy = new Date();
        this.dia = hoy.getDate();
        this.mes = hoy.getMonth() + 1;
        this.anho = hoy.getFullYear();
        this.fechaDeHoy = this.dia + '/' + this.mes + '/' + this.anho;
    }

    formatearFechaDDMMAA(dia, mes, anho){
        this.dia = dia;
        this.mes = mes;
        this.anho = anho;
        this.fechaFormateada = dia + '/' + mes + '/' + anho;
    }

    formatearFechaAAMMDD(){
        let auxDia = this.dia + 1, auxMes = this.mes + 1;
        if(this.dia<10){
            auxDia = '0' + this.dia;
        }
        if(this.mes<10){
            auxMes = '0' + this.mes;
        }
        return new Date(this.anho + '-' + auxMes + '-' + auxDia);
    }

    obtenerDiaLiteral(){
        this.diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
        let fecha = this.formatearFechaAAMMDD();
        return this.diasSemana[fecha.getDay()];
    }

    esViernes(){
        return this.obtenerDiaLiteral() === "Viernes";
    }

    obtenerUltimoDiaMes(){
        let ultimoDiaMes = new Date(this.formatearFechaAAMMDD().getFullYear(), this.formatearFechaAAMMDD().getMonth() + 1, 0);
        return ultimoDiaMes.getDate();
    }

}