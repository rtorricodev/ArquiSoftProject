export default class HojaDeVenta {
    constructor(comision, ventasTotales) {
        this.comision = comision;
        this.ventasTotales = ventasTotales;
    }

    static CrearHojaVacia(){
        return new HojaDeVenta(0,0);
    }
}