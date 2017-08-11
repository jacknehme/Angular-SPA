(function () {
    "use strict";

    angular.module('jnMenu').controller('jnMenuController', ['$scope', '$rootScope', jnMenuController])

    function jnMenuController($scope, $rootScope) {
        //$scope.showMenu = true;
        $scope.isVertical = true;

        this.getActiveElement = function () {
            return $scope.activeElement;
        }
        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        }
        this.setRoute = function (route) {
            $rootScope.$broadcast('jn-menu-item-selected-event', {route: route})
        }

        this.isVertical = function () {
            return $scope.isVertical;
        }

        $scope.toggleMenuOrientation = function () {
            $scope.isVertical = !$scope.isVertical;

            $rootScope.$broadcast('jn-menu-orientation-changed-event', { isMenuVertical: $scope.isVertical });

        }

        //$scope.$on('jn-menu-show', function (evt,data) {
        //    $scope.showMenu = data.show;
        //})

    }

})();