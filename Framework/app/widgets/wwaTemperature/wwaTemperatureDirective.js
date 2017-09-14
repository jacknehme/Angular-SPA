(function () {

    "use strict";

    angular.module("app").directive("wwaTemperature", ['dataService', wwaTemperature]);

    function wwaTemperature(dataService) {
        return {
            templateUrl: 'app/widgets/wwaTemperature/wwaTemperatureTemplate.html',
            link: function (scope, el, attr) {
                dataService.getLocation(scope.item.widgetSettings.id).then(function (data) {
                    scope.selectedLocation = data;
                });
            }
        }
    };

})();