(function () {

    "use strict";

    angular.module("app").directive("wwaLocation", [wwaLocation]);

    function wwaLocation() {
        return {
            scope: {},
            template: '<h1>Locations Page</h1>'
        }
    };

})();