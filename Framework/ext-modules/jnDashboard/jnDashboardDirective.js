(function () {

    "use strict";

    angular.module("jnDashboard").directive("jnDashboard", [jnDashboard]);

    function jnDashboard() {
        return {
            templateUrl: 'ext-modules/jnDashboard/jnDashboardTemplate.html'
        }
    };

})();