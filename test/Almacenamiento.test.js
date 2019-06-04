const expect = require('chai').expect;
const assert = require('chai').assert;

import RepositorioAlmacenamiento from '../src/LogicaDeNegocio/Repositorios/RepositorioAlmacenamiento.js';
import Mongo from '../src/AdaptadoresDeInterfaz/almacenamiento/Mongo.js';

import Empleado from '../src/LogicaDeNegocio/Entidades/Empleado/Empleado.js';
import Boleta from '../src/LogicaDeNegocio/Entidades/Boleta.js';

import CalculadoraFija from '../src/LogicaDeNegocio/Entidades/Empleado/CalculadoraSalario/CalculadoraFija.js';
import CalculadoraFechaFija from '../src/LogicaDeNegocio/Entidades/Empleado/CalculadoraFechaPago/CalculadoraFechaFija.js';

describe('Funciones basicas de la repositorioAlmacenamiento de empleado', () => {

    let mongo;
    let mongoConected;
    let empleado;
    let repositorioAlmacenamiento 
    let boletaDeMario;

    before( () => {
        mongo = new Mongo('mongodb://localhost/27017','ArquiSoft');
        mongoConected = mongo.establecerConexion();
        mongoConected.then( () =>{
            repositorioAlmacenamiento = new RepositorioAlmacenamiento(mongo);
        })
        
        
        let caliculadoraFija = new CalculadoraFija(2000);
        let CalculadoraDeFechafija = new CalculadoraFechaFija();

        empleado = new Empleado('Carlos', 'Bodoque', 77777777, 'carlosBodoque@esMiEmail.com',caliculadoraFija,CalculadoraDeFechafija);
        boletaDeMario = new Boleta(empleado);
    })
    


    it('Deberia guardar un empleado', async () => {
        mongoConected.then(()=>{
            repositorioAlmacenamiento.registrarObjeto(empleado,'Empleados');
        })
    })
    
    it('Deberia obtener la lista de empleados', () => {
        mongoConected.then( () => {
            repositorioAlmacenamiento.obtenerListaDe('Empleados');
        })
    })

    it('Deberia elminar un Empleado', ()=>{
        mongoConected.then(()=>{
            repositorioAlmacenamiento.eliminarObjeto(empleado,'Empleados');
   
        });
    })

    it('Deberia crear una boleta', ()=>{
        mongoConected.then(()=>{
            repositorioAlmacenamiento.registrarObjeto(boletaDeMario,'Boletas');
        })
    })

    it('Deberia retornar la lista de boletas',  () => {
      
        // repositorioAlmacenamiento.obtenerListaDe('Boletas').then(lista=>{
        //     .log(lista);
        // });
      
    })

    it('Deberia elminar una Boleta', ()=>{
        mongoConected.then(()=>{
            repositorioAlmacenamiento.eliminarObjeto(boletaDeMario,'Boletas');
        });
    })

    after(()=>{
        mongoConected.then(()=>{
            mongo.desconectarse();
        })
    })
})
