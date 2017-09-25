(function () {
    "use strict";

    angular.module("jnFramework").controller("jnFrameworkController", FrameworkController);

    FrameworkController.$inject = ['$rootScope', '$scope', '$window', '$timeout', '$location'];

    function FrameworkController($rootScope, $scope, $window, $timeout, $location) {
        $scope.isMenuVisible = true;
        $scope.isMenuButtonVisible = true;
        $scope.isMenuVertical = true;

        $scope.$on('jn-menu-item-selected-event', function (evt, data) {
            $scope.routeString = data.route;
            $location.path(data.route);
            checkWidth();
            broadcastMenuState();
        })

        $scope.$on("jn-menu-orientation-changed-event", function (evt, data) {
            $scope.isMenuVertical = data.isMenuVertical;
            $timeout(function () {
                $($window).tigger('resize');
            }, 0);
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
        }

        var broadcastMenuState = function () {
            $rootScope.$broadcast('jn-menu-show', {
                show: $scope.isMenuVisible,
                isVertical: $scope.isMenuVertical,
                allowHorizontalToggle: !$scope.isMenuButtonVisible
            })
        }

        $timeout(function () {
            checkWidth();
        }, 0)
    }


})();