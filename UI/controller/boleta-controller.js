APP.controller('controladorBoleta', function ($scope, $http) {
    $scope.fecha = new Fecha();
    $scope.generarBoletas = ()=>{
        let fecha = $scope.fecha;
        let req = {
            method : 'GET',
            url: URL + LISTAR_BOLETAS + '?dia=' + fecha.dia + '&mes=' + fecha.mes + '&anho=' + fecha.anho
        };
        $http(req)
        .then((res)=>{
            $scope.listaBoletas = res.data;
        })
        .catch((err)=>{
            alert('No Funciona!: ' + err);
        });
    }

});
