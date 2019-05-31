APP.controller('controladorBoleta', function ($scope, $http) {
    let req = {
        method : 'GET',
        url : URL + LISTAR_BOLETAS,
    }
    $http(req)
    .then((res)=>{
        scope.listaBoletas = res.data;
    })
    .catch((err)=>{
        console.log(err);
    });
});