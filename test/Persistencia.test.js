const expect = require('chai').expect;
const assert = require('chai').assert;

import Persistencia from '../src/BaseDeDatos/Persistencia.js';
import Mongo from '../src/BaseDeDatos/Mongo.js';

import Empleado from '../src/Clases/Empleado.js';
import Fecha from '../src/Clases/Fecha/Fecha.js';
import Boleta from '../src/Clases/Boleta.js';

import CalculadoraFija from '../src/Clases/CalculadoraDeSalario/CalculadoraFija.js';
import CalculadoraFechaFija from '../src/Clases/CalculadoraDeFechaPago/CalculadoraFechaFija.js';

describe('Funciones basicas de la persistencia de empleado', () => {

    let mongo;
    let mongoConected;
    let empleado;
    let persistencia 
    let boletaDeMario;
    let fechaInicioDeTrabajo;

    before( () => {
        mongo = new Mongo('mongodb://localhost/27017','ArquiSoft');
        mongoConected = mongo.establecerConexion();
        mongoConected.then( () =>{
            persistencia = new Persistencia(mongo);
        })
        
        
        let caliculadoraFija = new CalculadoraFija(2000);
        let CalculadoraDeFechafija = new CalculadoraFechaFija();

        empleado = new Empleado('Carlos', 'Bodoque', 77777777, 'carlosBodoque@esMiEmail.com',caliculadoraFija,CalculadoraDeFechafija);
        boletaDeMario = new Boleta(empleado);
    })
    


    it('Deberia guardar un empleado', async () => {
        mongoConected.then(()=>{
            persistencia.registrarObjeto(empleado,'Empleados');
        })
    })
    
    // it('Deberia obtener la lista de empleados', () => {
    //     mongoConected.then( () => {
    //         persistencia.obtenerListaDe('Empleados');
    //     })
    // })
        

    // it('Deberia elminar un Empleado', ()=>{
    //     mongoConected.then(()=>{
    //         persistencia.eliminarObjeto(empleado,'Empleados');
   
    //     });
    // })

    // it('Deberia crear una boleta', ()=>{
    //     mongoConected.then(()=>{
    //         persistencia.registrarObjeto(boletaDeMario,'Boletas');
    //     })
    // })

    // it('Deberia retornar la lista de boletas', () => {
    //     mongoConected.then( () => {
    //         persistencia.obtenerListaDe('Boletas');

    //     })
    // })


    // it('Deberia elminar una Boleta', ()=>{
    //     mongoConected.then(()=>{
    //         persistencia.eliminarObjeto(boletaDeMario,'Boletas');
    //     });
    // })

    after(()=>{
        mongoConected.then(()=>{
            mongo.desconectarse();
        })
    })
})
