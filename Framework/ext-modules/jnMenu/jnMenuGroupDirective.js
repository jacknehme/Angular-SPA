(function () {
    "use strict";

    angular.module('jnMenu').directive('jnMenuGroup', jnMenuGroupDirective);

    function jnMenuGroupDirective() {
        return {
            require: '^jnMenu',
            scope: {
                label: '@',
                icon: '@'
            },
            transclude: true,
            templateUrl: 'ext-modules/jnMenu/jnMenuGroupTemplate.html',
            link: function (scope, el, attr, ctrl) {
                scope.isOpen = false;
                scope.closeMenu = function () {
                    scope.isOpen = false;
                }
                scope.clicked = function () {
                    scope.isOpen = !scope.isOpen;
                }
                scope.isVertical = function () {
                    return ctrl.isVertical();
                }
            },

        }
    }

})();