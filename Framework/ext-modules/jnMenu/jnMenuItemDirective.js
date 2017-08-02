(function () {
    "use strict";

    angular.module('jnMenu').directive('jnMenuItem', jnMenuItemDirective)

    function jnMenuItemDirective() {
        return {
            require: '^jnMenu',
            scope:{
                label: '@',
                icon: '@'
            },
            templateUrl: 'ext-modules/jnMenu/jnMenuItemTemplate.html',
            link: function (scope, el, attr, ctrl) {

            },

        }
    }

})();