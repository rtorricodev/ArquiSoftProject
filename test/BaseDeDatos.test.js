const expect = require('chai').expect;
const assert = require('chai').assert;

import Empleado from '../src/Clases/Empleado.js';
import BaseDeDatos from '../src/Persistencia/BaseDeDatos';
import Fecha from '../src/Clases/Fecha/Fecha.js';
import Boleta from '../src/Clases/Boleta.js';
import { error } from 'util';


describe('Funciones basicas de la persistencia de empleado', () => {
    let bd;
    let conexion;
    let mario;
    let fechaInicioDeTrabajo;
    let boletaDeMario;
 

    before(()=>{
        bd = new BaseDeDatos('no-relacional');
        conexion = bd.establecerConexion();
        mario = new Empleado('mario');
        fechaInicioDeTrabajo = new Fecha(1, 4, 2019);
        mario.esEmpleadoFijo(2000, fechaInicioDeTrabajo);
        boletaDeMario = new Boleta(mario);
    })


    it('Deberia guardar un empleado', ()=>{
        conexion.then(()=>{
            bd.guardar(mario,'Empleados').then( respuesta => {
                if(respuesta == null){
                    this.test.error(new Error('No se guardo empleado adecuadamente'));
                }
            });
        })       
    })

    it('Deberia obtener la lista de empleados', ()=>{
        conexion.then(()=>{
            bd.listar('Empleados').then( lista => {
                if(lista == null){
                    this.test.error(new Error('No devolvio la lista de empleados correctamente'));
                }
            });
        })
    })

    it('Deberia elminar un Empleado', ()=>{
        conexion.then(()=>{
            bd.borrar({nombre: 'mario'},'Empleados').then(respuesta =>{
                if(respuesta == null){
                    this.test.error(new Error('No elimino correctamente empleado de la base de datos'));
                }
            });
        })
    })

    it('Deberia guardar una boleta', ()=>{
        conexion.then(()=>{
            bd.guardar(boletaDeMario,'Boletas').then( respuesta => {
                if(respuesta == null){
                    this.test.error(new Error('No se guardo boleta adecuadamente'));
                }
            });
        })       
    })

    it('Deberia obtener la lista de boletas', ()=>{
        conexion.then(()=>{
            bd.listar('Boletas').then( lista => {
                if(lista == null){
                    this.test.error(new Error('No devolvio la lista de boletas correctamente'));
                }
            });
        })
    })

    it('Deberia elminar una Boleta', ()=>{
        conexion.then(()=>{
            bd.borrar(boletaDeMario,'Boletas').then(respuesta =>{
                if(respuesta == undefined){
                    this.test.error(new Error('No elimino correctamente empleado de la base de datos'));
                }
            });
        })
    })
})



