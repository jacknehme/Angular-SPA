(function () {

    "use strict";

    angular.module("app").directive("wwaLocations", [wwaLocations]);

    function wwaLocations() {
        return {
            scope: {},
            template: '<h1>Locations Page</h1>'
        }
    };

})();