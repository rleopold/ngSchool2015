(function () {
    'use strict';

    angular
        .module('app')
        .factory('studentService', factory);

    factory.$inject = ['$http'];

    function factory($http) {

        var url = 'api/students';

        var service = {
            getStudents: getStudents,
            getStudent: getStudent,
            insertStudent: insertStudent,
            updateStudent: updateStudent,
            deleteStudent: deleteStudent
        };

        return service;

        function getStudents() {
            return $http.get(url);
        }

        function getStudent(id) {
            return $http.get(url + '/' + id);
        }

        function insertStudent(data) {
            return $http.post(url, data);
        }

        function updateStudent(data) {
            return $http.put(url + '/' + id, data);
        }

        function deleteStudent(id) {
            return $http.delete(url + '/' + id);
        }
    }
})();