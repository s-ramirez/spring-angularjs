angular.module('app', [])
    .controller('homeController', homeController);

homeController.$inject = ['$http'];

function homeController($http) {
    var vm = this;

    $http.get('/resource/').success(function(data) {
        vm.greeting = data;
    });
}