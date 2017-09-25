(function () {
    'use strict';

    angular.module("app").controller("appController", ["$scope", AppController]);

    function AppController($scope) {
        $scope.state = 'unauthorized';
        $scope.signIn = function () {
            $scope.state = 'authorized';
        }
    };

})();