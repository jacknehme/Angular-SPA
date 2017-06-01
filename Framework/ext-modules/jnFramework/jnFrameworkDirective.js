(function () {

    "use strict";

    angular.module("jnFramework").directive("jnFramework", Framework);

    function Framework() {
        return {
            transclude: false,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            controller: "jnFrameworkController",
            templateUrl: "ext-modules/jnFramework/jnFrameworkTemplate.html",
        }
    }

})();