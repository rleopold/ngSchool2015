(function () {
    'use strict';

    angular
        .module('app')
        .controller('Students', controller);

    controller.$inject = ['studentService', 'notificationFactory'];

    function controller(studentService, notificationFactory) {
        /* jshint validthis:true */
        var vm = this;

        vm.students = [];
        vm.newStudent = {};
        vm.showAdd = false;

        //functions
        vm.clickAdd = clickAdd;
        vm.addStudent = addStudent;
        vm.deleteStudent = deleteStudent;

        activate();

        function activate() {
            studentService.getStudents()
                .success(function (data) {
                    vm.students = data;
                })
                .error(function () {
                    notificationFactory.error("SOmething has gone wrong!!");
                });
        }

        function addStudent (student) {
            studentService.insertStudent(student)
			    .success(function (data) {
			        vm.students.push(data);
			        notificationFactory.success('Saved new student');
			        vm.showAdd = false;
			        vm.newStudent = {};
			    })
                .error(function (data) {
                    notificationFactory.error('Failed to create student');
                });
        }

        function deleteStudent(idx) {
            var student = vm.students[idx];
            studentService.deleteStudent(student.Id)
                .success(function (data) {
                    vm.students.splice(idx, 1);
                    notificationFactory.success('Deleted student');
                })
                .error(function (data) {
                    notificationFactory.error('Delete student Failed')
                });
        }

        function clickAdd() {
            vm.showAdd = !vm.showAdd;
        }
    }
})();
