(function () {

    "use strict";

    angular.module("jnDashboard").directive("jnWidgetBody", ['$compile', jnWidgetBody]);

    function jnWidgetBody($compile) {
        return {
            //scope: inheireted
            templateUrl: 'ext-modules/jnDashboard/jnWidgetBodyTemplate.html',
            link: function (scope, element, attrs) {
                var newElement = angular.element(scope.item.template);
                element.append(newElement);
                $compile(newElement)(scope);
            }
        }
    };

})();