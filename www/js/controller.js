angular.module('lector.controller',['ionic','ngCordova'])
.controller("lectorController",function($scope,$cordovaBarcodeScanner)
{
	$scope.leerCodigo= function(){
		$cordovaBarcodeScanner
		.scan()
		.then(function(texto){
			alert(texto.text);
		},function(error){
			alert(error);
		});
	}
});