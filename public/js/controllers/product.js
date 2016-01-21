/**
 * Created by user on 2015-12-05
 */

angular.module('product',['customFilter'])
.constant('url', 'http://localhost:8080/product')
.controller('productCtrl', function($scope, $gttp, url){
    $scope.data={};

    $gttp.get(url)
        .success(function(data){
            $scope.data.products = data;
        });
        .error(function(error){
            $scope.data.error = error;
        });

});
