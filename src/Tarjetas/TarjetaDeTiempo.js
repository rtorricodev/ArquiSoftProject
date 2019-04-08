export default class TarjetaDeTiempo{
    constructor(horaDeEntrada, horaDeSalida){
        this.horaDeEntrada = horaDeEntrada;
        this.horaDeSalida  = horaDeSalida;
    }

    calcularDuracion(){
        return Math.abs(this.horaDeEntrada.getHours() - this.horaDeSalida.getHours());
    }
}