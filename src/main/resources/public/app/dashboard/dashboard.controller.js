(function() {
    'use strict';

    angular.module('app')
        .controller('dashboardController', DashboardController);

    DashboardController.$inject = ['$http'];

    function DashboardController($http) {
        var vm = this;

        $http.get('/resource/').success(function(data) {
            vm.greeting = data;
        });
    }
})();