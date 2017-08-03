(function () {
    "use strict";

    angular.module("jnFramework").controller("jnFrameworkController", FrameworkController);

    FrameworkController.$inject = ['$rootScope', '$scope', '$window', '$timeout'];

    function FrameworkController($rootScope, $scope, $window, $timeout) {
        $scope.isMenuVisible = true;
        $scope.isMenuButtonVisible = true;

        $scope.$on('jn-menu-item-selected-event', function (evt, data) {
            $scope.routeString = data.route;
            checkWidth();
            broadcastMenuState();
        })
        $($window).on('resize.jnFramework', function () {
            $scope.$apply(function () {
                checkWidth();
                broadcastMenuState();
            })
        })
        $scope.$on('$destory', function () {
            $($window).off('resize.jnFramework');
        })
        var checkWidth = function () {
            var width = Math.max($($window).width(), $window.innerWidth);
            $scope.isMenuVisible = (width > 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        }

        $scope.menuButtonClicked = function () {
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            //$scope.$apply();
        }

        var broadcastMenuState = function () {
            $rootScope.$broadcast('jn-menu-show', {
                show: $scope.isMenuVisible
            })
        }

        $timeout(function () {
            checkWidth();
        }, 0)
    }


})();