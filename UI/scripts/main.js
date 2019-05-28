const URL = 'http://localhost:3000';
const CREAR_EMPLEADO = '/crear-empleado';

let app = angular.module('angularApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './UI/views/empleado.html',
        controller : 'controladorEmpleado'
    })
    //.when('/crear-empleado', {
    //    templateUrl : 'empleado.html',
    //    controller : 'controladorEmpleado'
    //})
});

app.controller('controladorEmpleado', function ($scope, $http) {
    $scope.empleado = {
        'nombre' : '',
        'apellido' : '',
        'celularPrincipal' : '',
        'correoPrincipal' : '',
        'metodoPago' : '',
        'tipo' : ''
    };
    $scope.guardarEmpleado = ()=>{
        let empleado = $scope.empleado;
        let req = {
            method : 'POST',
            url: URL + CREAR_EMPLEADO,
            data : JSON.stringify(empleado)
        };
        console.log(empleado);
        $http(req)
        .then((res)=>{
            //window.location.replace('./UI/views/inicio.html');
        })
        .catch((err)=>{
            //alert('No Funciona!');
        });
    }  
});