(function (angular) {
    'use strict';

    angular.module('marwood.home')
        .controller('HomeController', HomeController);

    // @ngInject
    function HomeController() {
        var vm = this;

        vm.title = 'Hello';
    }
}(angular));
