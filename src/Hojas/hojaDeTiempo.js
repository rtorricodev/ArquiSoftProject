export default class HojaDeTiempo {
    constructor(tarifa, horasTotalesTrabajadas) {
        this.tarifa = tarifa;
        this.horasTotalesTrabajadas = horasTotalesTrabajadas;
    }

    static CrearHojaVacia(){
        return new HojaDeTiempo(0,0);
    }
}