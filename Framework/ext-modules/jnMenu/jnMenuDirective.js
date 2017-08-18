(function () {
    "use strict";

    angular.module('jnMenu').directive('jnMenu', ['$timeout',jnMenuDirective]);

    function jnMenuDirective($timeout) {
        return {
            scope: {

            },
            transclude: true,
            templateUrl: 'ext-modules/jnMenu/jnMenuTemplate.html',
            controller: 'jnMenuController',
            //controllerAs: 'jnMenuCtrl',
            link: function (scope, el, attr) {
                var item = el.find('.jn-selectable-item:first');
                $timeout(function () {
                    item.trigger('click'); // this not working?
                })
            },
            
        }
    }

})();