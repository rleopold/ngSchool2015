(function () {
    'use strict';

    angular
        .module('app')
        .controller('teachers', teachers);

    teachers.$inject = ['teacherService','notificationFactory']; 

    function teachers(teacherService, notificationFactory) {
        /* jshint validthis:true */
        var vm = this;
        
        vm.teachers = [];
        vm.showAdd = false;
        vm.newTeacher = {};

        vm.addTeacher = addTeacher;
        vm.deleteTeacher = deleteTeacher;
        vm.clickAdd = clickAdd;

        activate();

        function activate() {
            teacherService.getTeachers()
                .success(function (data) {
                    vm.teachers = data;
                })
                .error(function () {
                    notificationFactory.error("Failed to retrieve teachers.");
                });
        }

        function addTeacher (teacher) {
            teacherService.insertTeacher(teacher)
			    .success(function (data) {
			        vm.teachers.push(data);
			        notificationFactory.success('Saved new Teacher');
			        vm.showAdd = false;
			    })
                .error(function (data) {
                    notificationFactory.error('Failed to create Teacher');
                });
        }

        function deleteTeacher (idx) {
            var teacher = vm.teachers[idx];
            teacherService.deleteTeacher(teacher.Id)
                .success(function (data) {
                    vm.teachers.splice(idx, 1);
                    notificationFactory.success('Deleted Teacher');
                })
                .error(function (data) {
                    notificationFactory.error('Delete Teacher Failed')
                });
        }

        function clickAdd() {
            vm.showAdd = !vm.showAdd;
        }

    }
})();
