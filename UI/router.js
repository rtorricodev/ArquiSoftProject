const URL = 'http://localhost:3000';
const CREAR_EMPLEADO = '/crear-empleado';

APP.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './UI/views/inicio.html'
    })
    .when('/crear-empleado', {
        templateUrl : './UI/views/empleado.html',
        controller : 'controladorEmpleado'
    })
    .when('/generar-boletas', {
        templateUrl : './UI/views/boletas.html'
    })
});
