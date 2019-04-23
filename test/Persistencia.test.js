// const expect = require('chai').expect;

// import Empleado from '../../src/Clases/Empleado.js';
// import Persistencia from '../../src/Persistencia/Persistencia.js';


// describe('Funciones basicas de la persistencia de empleado', () => {

//     let persistnecia = new Persistencia('no-relacional');
//     let mario = new Empleado('Camilo');

//     setTimeout(() => {
//         persistnecia.guardar(mario, 'Empleados');
//     }, 1000);


//     setTimeout(async() => {
//         let x = await persistnecia.obtenerTabla('Empleados');
//         console.log(x.length);
//     }, 2000);


//     expect(1).equal(1);
// })