(function () {

    "use strict";

    angular.module('app').directive('wwaInventory', ['dataService', wwaInventory]);

    function wwaInventory(dataService) {
        return {
            templateUrl: 'app/widgets/wwaInventory/wwaInventoryTemplate.html',
            link: function (scope, el, attrs) {
                dataService.getLocation(scope.item.widgetSettings.id)
                    .then(function (data) {
                        scope.selectedLocation = data;
                    });
            }
        };
    }
})();