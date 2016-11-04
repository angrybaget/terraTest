(function() {
    'use strict';

    angular
        .module('lionTest')
        .controller('thanksController', thanksController);

    /** @ngInject */
    function thanksController($scope,$window, $timeout) {
        var vm = this;

        $scope.rate = 4;
        $scope.max = 5;
        $scope.isReadonly = true;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };

        $scope.ratingStates = [
            {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            {stateOn: 'glyphicon-heart'},
            {stateOff: 'glyphicon-off'}
        ];

    }
})();
