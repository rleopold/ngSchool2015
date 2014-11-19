(function () {
    'use strict';

    angular
        .module('app')
        .factory('teacherService', teacher);

    teacher.$inject = ['$http', 'apiServiceBase'];

    function teacher($http, apiServiceBase) {
    	var url = apiServiceBase + 'api/teachers';

    	var service = {
    		getTeachers: getTeachers,
    		getTeacher: getTeacher,
    		insertTeacher: insertTeacher,
    		updateTeacher: updateTeacher,
    		deleteTeacher: deleteTeacher
    	};

    	return service;

    	function getTeachers() {
    		return $http.get(url);
    	}

    	function getTeacher(id) {
    		return $http.get(url + '/' + id);
    	}

    	function insertTeacher(data) {
    		return $http.post(url, data);
    	}

    	function updateTeacher(data) {
    		return $http.put(url + '/' + id, data);
    	}

    	function deleteTeacher(id) {
    		return $http.delete(url + '/' + id);
    	}
    }
})();