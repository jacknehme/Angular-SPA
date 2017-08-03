(function () {
    "use strict";

    angular.module('jnMenu').controller('jnMenuController', ['$scope', '$rootScope', jnMenuController])

    function jnMenuController($scope, $rootScope) {
        $scope.showMenu = true;

        this.getActiveElement = function () {
            return $scope.activeElement;
        }
        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        }
        this.setRoute = function (route) {
            $rootScope.$broadcast('jn-menu-item-selected-event', {route: route})
        }

        $scope.$on('jn-menu-show', function (evt,data) {
            $scope.showMenu = data.show;
        })
    }

})();