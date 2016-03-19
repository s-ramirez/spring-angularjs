(function() {
    'use strict';

    angular.module('app')
        .controller('loginController', LoginController);

    LoginController.$inject = ['$rootScope', '$http', '$location'];

    function LoginController($rootScope, $http, $location) {
        var vm = this;

        vm.authenticate = function(credentials, callback) {
            var headers = credentials ? { authorization : "Basic " +
                btoa(vm.credentials.username + ":" + vm.credentials.password) } : {};

            $http.get('api/user', { headers : headers }).success(function(data) {
                if (data.name) {
                    $rootScope.authenticated = true;
                } else {
                    $rootScope.authenticated = false;
                }
                callback && callback();
            }).error(function () {
                $rootScope.authenticated = false;
                callback && callback();
            });
        }

        vm.login = function() {
            vm.authenticate(vm.credentials, function() {
                if($rootScope.authenticated) {
                    $location.path('/');
                    vm.error = false;
                } else {
                    $location.path('/login');
                    vm.error = true;
                }
            })
        }

        vm.credentials = {};
        vm.authenticate();
    }
})();