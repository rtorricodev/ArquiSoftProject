
class EmpleadoInteractor {
    constructor(){
    }

    static guardarEmpleado(empleado, repositorio) {
        repositorio.registrarObjeto(empleado,'Empleados');
    }

    static async listarEmpleados(repositorio) {
        let lista = await repositorio.obtenerListaDe('Empleados');
        return lista;
    }
}

module.exports = EmpleadoInteractor;