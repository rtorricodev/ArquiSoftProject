let GeneradorBoletas = require('../Entidades/GeneradorDeBoletas.js');
let FabricaEmpleado = require('../Fabricas/FabricaEmpleado.js');
class BoletaInteractor{
    constructor(){
    }

    static async generarBoletas(fecha, repositorio){
        
        let fabricaEmpleado = new FabricaEmpleado();
        var nuevaLista = [];
        let listaEmpleados = await repositorio.obtenerListaDe('Empleados');
        for (let empleado of listaEmpleados) {
            let data = fabricaEmpleado.desglosar(empleado);
            let nuevoEmpleado = fabricaEmpleado.crearEmpleado(data);
            nuevaLista.push(nuevoEmpleado);
        }
        let generadorBoletas = new GeneradorBoletas(nuevaLista);
        let listaBoletas = generadorBoletas.generarBoletas(fecha);
   
        return listaBoletas;
    }
}

module.exports = BoletaInteractor;

