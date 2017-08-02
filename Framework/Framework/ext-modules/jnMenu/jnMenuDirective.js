(function () {
    "use strict";

    angular.module('jnMenu').directive('jnMenu', jnMenuDirective);

    function jnMenuDirective() {
        return {
            scope: {

            },
            transclude: true,
            templateUrl: 'ext-modules/jnMenu/jnMenuTemplate.html',
            controller: 'jnMenuController',
            //controllerAs: 'jnMenuCtrl',
            link: function (scope, el, attr) {

            },
            
        }
    }

})();