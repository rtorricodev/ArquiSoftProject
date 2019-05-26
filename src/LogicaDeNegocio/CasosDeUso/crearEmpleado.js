
class CrearEmpleado {
    constructor(){
    }

    guardarEmpleado(empleado, repositorio) {
        repositorio.registrarObjeto(empleado,'Empleados');
    }
}

module.exports = CrearEmpleado;