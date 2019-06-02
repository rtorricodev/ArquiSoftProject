const express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());


let ControladorEmpleados = require('../../Controladores/ControladorEmpleados.js');

class Express{
    constructor(repositorio){
        this.repositorio = repositorio;
    }

    async definirRutasEmpleado(){
        app.options('*',cors());

        let controlador = new ControladorEmpleados(this.repositorio);

        app.get("/empleados",(peticion, respuesta)=>{
            controlador.listarEmpleados(peticion,respuesta);
        })

        app.post("/empleado/crear", (peticion, respuesta)=>{
            controlador.registrarEmpleado(peticion, respuesta);
        });

        

    }
    
    
    async escucharPuerto(puerto){
        app.listen(puerto,()=>{
            console.log("Escuchando puerto: " + puerto);
        })
    }

    inicializarServidor(puerto){
        this.definirRutasEmpleado();
        this.escucharPuerto(puerto);
    }
}



module.exports = Express


