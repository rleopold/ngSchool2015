(function () {
    'use strict';

    angular
        .module('app')
        .factory('classService', classService);

    classService.$inject = ['$http','apiServiceBase'];

    function classService($http, apiServiceBase) {
        var url = apiServiceBase + 'api/classes';

        var service = {
            getClasses: getClasses,
            getClass: getClass,
            insertClass: insertClass,
            updateClass: updateClass,
            deleteClass: deleteClass
        };

        return service;

        function getClasses() {
            return $http.get(url);
        }

        function getClass(id) {
            return $http.get(url + '/' + id);
        }

        function insertClass(data) {
            return $http.post(url, data);
        }

        function updateClass(data) {
            return $http.put(url + '/' + id, data);
        }

        function deleteClass(id) {
            return $http.delete(url + '/' + id);
        }
    }
})();