const express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());


let ControlladorEmpleados = require('../../Controladores/ControladorEmpleados.js');

class Express{
    constructor(repositorio){
        this.repositorio = repositorio;
    }

    async definirRutas(){
        app.options('*',cors());

        app.post("/crear-empleado", (peticion, respuesta)=>{
            let controlador = new ControlladorEmpleados(this.repositorio);
            controlador.registrarEmpleado(peticion, respuesta);
        });
    }
    
    
    async escucharPuerto(puerto){
        app.listen(puerto,()=>{
            console.log("Escuchando puerto: " + puerto);
        })
    }

    inicializarServidor(puerto){
        this.definirRutas();
        this.escucharPuerto(puerto);
    }
}



module.exports = Express


