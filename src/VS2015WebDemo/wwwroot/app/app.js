(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .constant('toastr',toastr)
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/students', {
                templateUrl: 'app/partials/students.html',
                controller: 'Students',
                controllerAs: 'vm'
            });
    }
})();