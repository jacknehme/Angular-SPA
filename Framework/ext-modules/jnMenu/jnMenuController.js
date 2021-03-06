﻿(function () {
    "use strict";

    angular.module('jnMenu').controller('jnMenuController', ['$scope', '$rootScope', jnMenuController])

    function jnMenuController($scope, $rootScope) {
        $scope.showMenu = true;
        $scope.isVertical = true;
        $scope.openMenuScope = null;
        $scope.allowHorizontalToggle = true;

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
        this.setOpenMenuScope = function (scope) {
            $scope.openMenuScope = scope;
        }
        $scope.toggleMenuOrientation = function () {
            //close any open menu
            if ($scope.openMenuScope) {
                $scope.openMenuScope.closeMenu();
            }

            $scope.isVertical = !$scope.isVertical;

            $rootScope.$broadcast('jn-menu-orientation-changed-event', { isMenuVertical: $scope.isVertical });

        }

        angular.element(document).bind('click', function (e) {
            if ($scope.openMenuScope && !$scope.isVertical) {
                if($(e.target).parent().hasClass('jn-selectable-item')){
                    return;
                }
                $scope.$apply(function () {
                    $scope.openMenuScope.closeMenu();
                })
                e.preventDefault();
                e.stopPropagation();
            }
        })

        $scope.$on('jn-menu-show', function (evt,data) {
            $scope.showMenu = data.show;
            $scope.isVertical = data.isVertical;
            $scope.allowHorizontalToggle = data.allowHorizontalToggle;
        })

    }

})();