var FabricaEmpleado = require('../LogicaDeNegocio/Fabricas/FabricaEmpleado.js');

class ModeloDePeticionEmpleado { 
    constructor(){
    }

    static modelarEmpleado(peticion){
        let cuerpoDePeticion = peticion.body;

        let fabricaEmpleado = new FabricaEmpleado();

        let empleado = fabricaEmpleado.crearEmpleado(cuerpoDePeticion);
      

        return empleado;

    }


}

module.exports = ModeloDePeticionEmpleado;