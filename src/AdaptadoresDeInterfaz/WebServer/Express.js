const express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());


let ControladorEmpleados = require('../../Controladores/ControladorEmpleados.js');
let ControladorBoleta = require('../../Controladores/ControladorBoleta.js');

class Express{
    constructor(repositorio){
        this.repositorio = repositorio;
    }

    async definirRutasEmpleado(){
        let controladorEmpleado = new ControladorEmpleados(this.repositorio);
    
        app.get("/empleados",(peticion, respuesta)=>{
            controladorEmpleado.listarEmpleados(peticion,respuesta);
        })

        
        app.post("/empleado/crear", (peticion, respuesta)=>{
            controladorEmpleado.registrarEmpleado(peticion, respuesta);
        });
    }

    async definirRutasDeBoleto(){

        let controladorBoleta = new ControladorBoleta(this.repositorio);
        
        app.get("/boletas",(peticion,respuesta)=>{
            controladorBoleta.listarBoletas(peticion,respuesta);
        });
    }
    
    
    async escucharPuerto(puerto){
        app.listen(puerto,()=>{
            console.log("Escuchando puerto: " + puerto);
        })
    }

    inicializarServidor(puerto){
        app.options('*',cors());
        this.definirRutasEmpleado();
        this.definirRutasDeBoleto();
        this.escucharPuerto(puerto);
    }
}



module.exports = Express


