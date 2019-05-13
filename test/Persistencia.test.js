const expect = require('chai').expect;
const assert = require('chai').assert;

import Persistencia from '../src/BaseDeDatos/Persistencia.js';
import Mongo from '../src/BaseDeDatos/Mongo.js';

import Empleado from '../src/Clases/Empleado.js';
import Fecha from '../src/Clases/Fecha/Fecha.js';
import Boleta from '../src/Clases/Boleta.js';
import { error } from 'util';


describe('Funciones basicas de la persistencia de empleado', () => {

    let mongo;
    let mongoConected;
    let empleado;
    let persistencia 
    let fechaInicioDeTrabajo;
    let boletaDeMario;

    before( () => {
        mongo = new Mongo('mongodb://localhost/27017','ArquiSoft');
        mongoConected = mongo.establecerConexion();
        mongoConected.then( () =>{
            persistencia = new Persistencia(mongo);
        })
        empleado = new Empleado('Mario');
        fechaInicioDeTrabajo = new Fecha(1, 4, 2019);
        empleado.esEmpleadoFijo(2000, fechaInicioDeTrabajo);
        boletaDeMario = new Boleta(empleado);
    })
    


    it('Deberia guardar un empleado', async () => {
        mongoConected.then(()=>{
            try{
                persistencia.registrarObjeto(empleado,'Empleados');
            }catch(error){
                done(new Error('Algo salio mal'));
            }
        })
    })
    
    it('Deberia obtener la lista de empleados', () => {
        mongoConected.then( () => {
            try{
                persistencia.obtenerListaDe('Empleados');
            }catch(error){
                done(new Error('Algo salio mal'));
            }
        })
    })
        

    it('Deberia elminar un Empleado', ()=>{
        mongoConected.then(()=>{
            try{
                persistencia.eliminarObjeto(empleado,'Empleados');
            }catch(error){
                done(new Error('Algo salio mal'));
            }
        });
    })

    it('Deberia crear una boleta', ()=>{
        mongoConected.then(()=>{
            try{
                persistencia.registrarObjeto(boletaDeMario,'Boletas');
            }catch(eror){
                done(new Error('Algo salio mal'));
            }
        })
    })

    it('Deberia retornar la lista de boletas', () => {
        mongoConected.then( () => {
            try{
                persistencia.obtenerListaDe('Boletas');
            }catch(error){
                done(new Error('Algo salio mal'));
            }
        })
    })


    it('Deberia elminar una Boleta', ()=>{
        mongoConected.then(()=>{
            try{
                persistencia.eliminarObjeto(boletaDeMario,'Boletas');
            }catch(errror){
                done(new Error('Algo salio mal'));
            }
        });
    })

    after(()=>{
        mongo.desconectarse();
    })
})
