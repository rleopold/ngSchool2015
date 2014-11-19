(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .constant('toastr', toastr)
        .constant('apiServiceBase', window.location.origin + '/')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/students', {
                templateUrl: 'school/students.html',
                controller: 'Students',
                controllerAs: 'vm'
            })
            .when('/classes', {
                templateUrl: 'school/classes.html',
                controller: 'Classes',
                controllerAs: 'vm'
            });
    }
})();