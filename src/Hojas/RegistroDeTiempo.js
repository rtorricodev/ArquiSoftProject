export default class RegistroDeTiempo {
    constructor(tarifa, horasTotalesTrabajadas) {
        this.tarifa = tarifa;
        this.horasTotalesTrabajadas = horasTotalesTrabajadas;
        this.listaDeTarjetas = [];
    }

    agregarTarjetaARegistro(tarjeta){
        this.listaDeTarjetas.push(tarjeta);
    }

    retornarNumeroDeTarjetas(){
        return this.listaDeTarjetas.length;
    }


}