(function () {
    'use strict';

    angular
        .module('app')
        .factory('notificationFactory', notification);

    notification.$inject = ['toastr'];

    function notification(toastr) {
        var factory = {
            success: success,
            error: error
        };

        return factory;

        function success(text) {
            toastr.success(text);
        }

        function error(text) {
            toastr.error(text);
        }
    }
})();