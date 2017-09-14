(function () {

    "use strict";

    angular.module("app").directive("wwaDashboard", wwaDashboard);

    function wwaDashboard() {
        return {
            scope: {},
            template: '<jn-dashboard></jn-dashboard>',
            link: function (scope) {

                scope.title = 'My First Dashboard';

                scope.gridsterOpt = {
                    columns: 12,
                    margins: [20, 20],
                    outerMargin: false,
                    pushing: true,
                    floating: true,
                    swaping: true
                }

                scope.widgets = [
                    {
                        title: 'First',
                        sizeX: 1,
                        sizeY: 1,
                        minSizeX: 1,
                        minSizeY: 1,
                        row: 0,
                        col: 0,
                        template: '<wwa-temperature></wwa-temperature>',
                        widgetSettings: {
                            id: 1000
                        }
                    },
                    {
                        title: 'Second',
                        sizeX: 2,
                        sizeY: 1,
                        row: 0,
                        col: 5,
                        template: '<wwa-employee></wwa-employee>',
                        widgetSettings: {
                            id: 5001
                        }
                    },
                    {
                        title: 'Third',
                        sizeX: 2,
                        sizeY: 1,
                        row: 3,
                        col: 5,
                        template: '<wwa-inventory></wwa-inventory>',
                        widgetSettings: {
                            id: 1002
                        }
                    },
                    //{
                    //    title: 'Second',
                    //    sizeX: 2,
                    //    sizeY: 4,
                    //    row: 0,
                    //    col: 5
                    //},

                ];
            }
        }
    };

})();

//https://github.com/ManifestWebDesign/angular-gridster