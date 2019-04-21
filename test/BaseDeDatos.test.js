const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import Persistencia from '../src/Persistencia/BaseDeDatos';


describe('Funciones basicas de la persistencia de empleado', () => {


    it('Deberia guardar un empleado',()=>{
        let persistnecia = new Persistencia('no-relacional');
        let mario = new Empleado('Ramiro');
        setTimeout(() => {
            persistnecia.guardar(mario,'Empleados');
        }, 1000);

        setTimeout(() =>{
            expect(2).equal(1);
        },2000)

    })


   

    
    // setTimeout(async () => {
    //    let x = await persistnecia.listar('Empleados');
    //    console.log(x.length);
    // },2000);


    // expect(1).equal(1);
})



