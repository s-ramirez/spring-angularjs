(function() {
    'use strict';

    angular.module('app', ['ngRoute'])
        .config(Configure);

    Configure.$inject = ['$routeProvider', '$httpProvider'];

    function Configure($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'dashboardController',
                controllerAs: 'dashboard'
            })
            .when('/login', {
                templateUrl: 'app/login/login.html',
                controller: 'loginController',
                controllerAs: 'login'
            })
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    };
})();