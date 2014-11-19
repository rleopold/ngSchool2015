(function () {
    'use strict';

    angular
        .module('app')
        .controller('Classes', classes);

    classes.$inject = ['classService', 'teacherService', 'notificationFactory']; 

    function classes(classService, teacherService, notificationFactory) {
        /* jshint validthis:true */
        var vm = this;

        vm.classes = [];
        vm.teachers = [];
        vm.newClass = {};
        vm.showAdd = false;
        
        vm.addClass = addClass;
        vm.deleteClass = deleteClass;
        vm.clickAdd = clickAdd;

        activate();

        function activate() {
            classService.getClasses()
                .success(function (data) {
                    vm.classes = data;
            });

            teacherService.getTeachers()
                .success(function (data) {
                     vm.teachers = data;
            });
        }

        function addClass(cls) {
            classService.insertClass(cls)
			.success(function (data) {
			    vm.classes.push(data);
			    notificationFactory.success('Saved new class');
			    vm.showAdd = false;
			    vm.newClass = {};
			})
            .error(function (data) {
                notificationFactory.error('Failed to create class');
            });
        }

        function deleteClass(idx) {
            var c = vm.classes[idx];
            classService.deleteClass(c.Id)
            .success(function (data) {
                vm.classes.splice(idx, 1);
                notificationFactory.success('Deleted class');
            })
            .error(function (data) {
                notificationFactory.error('Delete class Failed')
            });
        }

        function clickAdd() {
            vm.showAdd = !vm.showAdd;
        }
    }
})();
