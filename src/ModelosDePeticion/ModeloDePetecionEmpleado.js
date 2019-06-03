var Empleado = require('../LogicaDeNegocio/Entidades/Empleado/Empleado.js');

class ModeloDePeticionEmpleado { 
    constructor(){
    }

    static modelarEmpleado(peticion){
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