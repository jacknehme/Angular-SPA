(function () {

    "use strict";

    angular.module("app").directive("wwaDashboard", [wwaDashboard]);

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
                        sizeX: 3,
                        sizeY: 3,
                        row: 0,
                        col: 0,
                        template: '<wwa-temperature></wwa-temperature>'
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