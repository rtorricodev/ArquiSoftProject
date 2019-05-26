const express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


let ModeloDePeticionEmpleado = require('../../ModelosDePeticion/ModeloDePetecionEmpleado.js');
let CrearEmpleado = require('../../LogicaDeNegocio/CasosDeUso/crearEmpleado.js');

class Express{
    constructor( repositorio){
        this.repositorio = repositorio;
    }

    async definirRutas(){
        app.post("/crear-empleado", (req,res)=>{
            //input

            let modeloPeticion = new ModeloDePeticionEmpleado()
            let modeloEmpleado = modeloPeticion.modelarEmpleado(req);

            //treatment
            let crearEmpleado = new CrearEmpleado();
            crearEmpleado.guardarEmpleado(modeloEmpleado,this.repositorio);


            //output
            res.send('Crear empleado');
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


