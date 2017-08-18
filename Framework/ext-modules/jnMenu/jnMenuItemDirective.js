(function () {
    "use strict";

    angular.module('jnMenu').directive('jnMenuItem', jnMenuItemDirective)

    function jnMenuItemDirective() {
        return {
            require: '^jnMenu',
            scope:{
                label: '@',
                icon: '@',
                route: '@'
            },
            templateUrl: 'ext-modules/jnMenu/jnMenuItemTemplate.html',
            link: function (scope, el, attr, ctrl) {
                scope.isActive = function () {
                    return el === ctrl.getActiveElement();
                }

                scope.isVertical = function () {
                    return ctrl.isVertical() || el.parents('.jn-subitem-section').length > 0;
                }

                el.on('click', function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(function () {
                        ctrl.setActiveElement(el);
                        ctrl.setRoute(scope.route);
                    })
                })
            },

        }
    }

})();