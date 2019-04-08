export default class RegistroDeTiempo {
    constructor(tarifa, horasTotalesTrabajadas) {
        this.tarifa = tarifa;
        this.horasTotalesTrabajadas = horasTotalesTrabajadas;
        this.listaDeTarjetas = [];
    }

    agregarTarjeta(tarjeta){
        this.listaDeTarjetas.push(tarjeta);
    }

    numeroDeTarjetas(){
        return this.listaDeTarjetas.length;
    }
}