(function () {

    "use strict";

    angular.module("jnDashboard").directive("jnDashboard", [jnDashboard]);

    function jnDashboard() {
        return {
            templateUrl: 'ext-modules/jnDashboard/jnDashboardTemplate.html',
            link: function (scope, element, attrs) {
                scope.addNewWidget = function (widget) {
                    var newWidget = angular.copy(widget.settings);
                    scope.widgets.push(newWidget);
                }

            }
        }
    };

})();