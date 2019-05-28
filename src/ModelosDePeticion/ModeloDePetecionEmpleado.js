var Empleado = require('../LogicaDeNegocio/Entidades/Empleado.js');

class ModeloDePeticionEmpleado { 
    constructor(){
    }

    modelarEmpleado(peticion){
        let cuerpoDePeticion = peticion.body;
      
        var empleado = new Empleado(
            cuerpoDePeticion.nombre,
            cuerpoDePeticion.apellido, 
            cuerpoDePeticion.celularPrincipal,
            cuerpoDePeticion.correoPrincipal
        );
        return empleado;

    }


}

module.exports = ModeloDePeticionEmpleado;