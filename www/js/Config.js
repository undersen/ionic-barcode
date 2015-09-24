
angular.module('EFFApp')

.config(function($stateProvider, $urlRouterProvider, $animateProvider) {

    /**
     * Configuraciones generales
     */
    $urlRouterProvider.otherwise('/welcome');
    

    /**
     * Estados para asignar las vistas
     */
    $stateProvider
        .state('welcome', {
            url        : '/welcome',
            templateUrl: 'partials/welcome.html',
            controller : 'WelcomeController',
            params     : {
                isRedirect: false
            }
        })
      
})
