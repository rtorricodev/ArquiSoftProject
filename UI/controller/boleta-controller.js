APP.controller('controladorBoleta', function ($scope, $http) {
    $scope.fecha = new Fecha();
    $scope.generarBoletas = ()=>{
        let date = $scope.fecha;
        let req = {
            method : 'POST',
            url: URL + LISTAR_BOLETAS,
            data : JSON.stringify(date)
        };
        $http(req)
        .then((res)=>{
            $scope.listadeBoletas = res.data;
        })
        .catch((err)=>{
            alert('No Funciona!: ' + err);
        });
    }

});
