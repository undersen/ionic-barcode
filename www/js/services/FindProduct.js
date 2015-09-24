angular.module('lector')

.factory('FindProductModel', function(SERVER, $resource){
	var model =  $resource(SERVER + '/user/verifyEmail', {} , {
		email: {
			method: 'post',
			headers: {Authorization: 'Basic dGVzdDp0ZXN0'}
		}
	});
	return model;

});