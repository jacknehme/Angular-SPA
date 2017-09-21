(function () {

    "use strict";

    angular.module("app").directive("wwaDashboard", wwaDashboard);

    function wwaDashboard() {
        return {
            scope: {},
            template: '<jn-dashboard></jn-dashboard>',
            link: function (scope) {

                scope.title = 'My First Dashboard';

                scope.gridsterOpts = {
                    columns: 12,
                    margins: [20, 20],
                    outerMargin: false,
                    pushing: true,
                    floating: false,
                    swapping: false
                };

                scope.widgetDefinitions = [{
                    title: 'Temperature',
                    settings: {
                        sizeX: 2,
                        sizeY: 1,
                        minSizeX: 2,
                        minSizeY: 1,
                        template: '<wwa-temperature></wwa-temperature>',
                        widgetSettings: {
                            id: 1000,
                            templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'
                        }
                    }
                },
                {
                    title: 'Inventory',
                    settings: {
                        sizeX: 4,
                        sizeY: 2,
                        minSizeX: 2,
                        minSizeY: 1,
                        template: '<wwa-inventory></wwa-inventory>',
                        widgetSettings: {
                            id: 1002,
                            templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'
                        }
                    }
                },
                {
                    title: 'Employee',
                    settings: {
                        sizeX: 4,
                        sizeY: 2,
                        minSizeX: 2,
                        minSizeY: 1,
                        template: '<wwa-employee></wwa-employee>',
                        widgetSettings: {
                            id: 5000,
                            templateUrl: 'app/dialogs/wwaSelectEmployeeTemplate.html',
                            controller: 'wwaSelectEmployeeController'
                        }
                    }
                }];

                scope.widgets = [];
            }
        }
    };

})();

//https://github.com/ManifestWebDesign/angular-gridster