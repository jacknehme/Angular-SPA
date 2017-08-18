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
                    if (el.parents('.jn-subitem-section').length == 0) {
                        scope.setSubmenuPosition();
                    }
                    ctrl.setOpenMenuScope(scope);
                }
                scope.isVertical = function () {
                    return ctrl.isVertical() || el.parents('.jn-subitem-section').length > 0;
                }
                scope.setSubmenuPosition = function () {
                    var pos = el.offset();
                    $('.jn-subitem-section').css({ 'left': pos.left + 20, 'top': 36 });
                }
            },
        }
    }

})();