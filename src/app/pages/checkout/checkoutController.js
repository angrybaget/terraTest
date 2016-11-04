(function() {
    'use strict';

    angular
        .module('lionTest')
        .controller('checkoutController', checkoutController);

    /** @ngInject */
    function checkoutController($scope, $rootScope, $window, $timeout) {
        var vm = this;

        $rootScope.person = {
            name: 'John Smith',
            street: '15 Name street',
            index: 'Springwood 4127',
            country: 'QLD Australia'
        };


        vm.visionForm = false;




        $scope.visionFormHandler = function(visibility){
            $scope.visionForm = visibility;
        };
    }
})();
