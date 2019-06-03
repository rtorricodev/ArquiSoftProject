let GeneradorBoletas = require('../Entidades/GeneradorDeBoletas.js');

class BoletaInteractor{
    constructor(){

    }

    static async generarBoletas(fecha, repositorio){
        let listaEmpleados = await repositorio.obtenerListaDe('Empleados');
        let generadorBoletas = new GeneradorBoletas(listaEmpleados);
        let listaBoletas = generadorBoletas.generarBoletas(fecha);
        return listaBoletas;
    }
}

module.exports = BoletaInteractor;