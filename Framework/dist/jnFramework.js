(function () {



    angular.module("jnFramework", ["jnMenu", "jnDashboard"]);

})();

(function () {



    angular.module('jnFramework').directive('jnUserProfileSmall', function () {
        return {
            templateUrl: 'ext-modules/jnFramework/jnUserProfile/jnUserProfileSmallTemplate.html'
        };
    });

})();


(function () {



    angular.module('jnFramework').directive('jnUserProfile', function () {
        return {
            templateUrl: 'ext-modules/jnFramework/jnUserProfile/jnUserProfileTemplate.html'
        };
    });

})();
angular.module('jnFramework').run(['$templateCache', function($templateCache) {$templateCache.put('ext-modules/jnFramework/jnFrameworkTemplate.html','<div class="jn-title-bar">\r\n    <div class="row">\r\n        <div class="jn-logo-area col-sm-6">\r\n            <img ng-src="{{iconFile}}" alt="kayak" class="jn-icon" />\r\n            <div class="jn-title-area">\r\n                <p class="jn-logo-title">{{title}}</p>\r\n                <p class="jn-logo-subtitle">{{subtitle}}</p>\r\n            </div>\r\n\r\n            <div ng-if="isMenuButtonVisible" ng-click="menuButtonClicked()"\r\n                 class="jn-collapsed-menu pull-right">\r\n                <button type="button" class="btn jn-nav-button">\r\n                    <i class="fa fa-bars"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class="jn-right-side-controls col-sm-6">\r\n            <jn-user-profile-small></jn-user-profile-small>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="jn-menu-area"\r\n     ng-show="isMenuVisible"\r\n     ng-class="{\'jn-menu-area-vertical\': isMenuVertical, \'jn-menu-area-horizontal\': !isMenuVertical}">\r\n    <jn-user-profile></jn-user-profile>\r\n    <ng-transclude></ng-transclude>\r\n</div>\r\n\r\n<div ng-view class="jn-view"\r\n     ng-class="{\'jn-view-full-width\': !isMenuVertical || !isMenuVisible}">\r\n</div>');
$templateCache.put('ext-modules/jnFramework/jnUserProfile/jnUserProfileSmallTemplate.html','\r\n<div class="jn-user-profile-small pull-right">\r\n    <img src="images/employee-don.png" style="width:40px;height:40px;" alt="user image" />\r\n    <span>Don Morgan</span>\r\n    <button class="btn btn-default btn-sm">\r\n        <i class="fa fa-chevron-down"></i>\r\n    </button>\r\n</div>\r\n');
$templateCache.put('ext-modules/jnFramework/jnUserProfile/jnUserProfileTemplate.html','\r\n<div class="jn-user-profile" ng-if="isMenuVertical && !isMenuButtonVisible">\r\n    <img src="images/employee-don.png" style="margin:10px;float:left;width:80px;height:80px;" alt="user image"/>\r\n    <div>\r\n        <p>Don</p>\r\n        <p>Morgan</p>\r\n        <button class="btn btn-default btn-sm">\r\n            <i class="fa fa-chevron-down"></i>\r\n        </button>\r\n    </div>\r\n</div>\r\n');}]);
(function () {



    angular.module("jnFramework").directive("jnFramework", Framework);

    function Framework() {
        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            controller: "jnFrameworkController",
            templateUrl: "ext-modules/jnFramework/jnFrameworkTemplate.html",
        }
    }

})();
(function () {


    angular.module("jnFramework").controller("jnFrameworkController", FrameworkController);

    FrameworkController.$inject = ['$rootScope', '$scope', '$window', '$timeout', '$location'];

    function FrameworkController($rootScope, $scope, $window, $timeout, $location) {
        $scope.isMenuVisible = true;
        $scope.isMenuButtonVisible = true;
        $scope.isMenuVertical = true;

        $scope.$on('jn-menu-item-selected-event', function (evt, data) {
            $scope.routeString = data.route;
            $location.path(data.route);
            checkWidth();
            broadcastMenuState();
        })

        $scope.$on("jn-menu-orientation-changed-event", function (evt, data) {
            $scope.isMenuVertical = data.isMenuVertical;
            $timeout(function () {
                $($window).tigger('resize');
            }, 0);
        })

        $($window).on('resize.jnFramework', function () {
            $scope.$apply(function () {
                checkWidth();
                broadcastMenuState();
            })
        })
        $scope.$on('$destory', function () {
            $($window).off('resize.jnFramework');
        })
        var checkWidth = function () {
            var width = Math.max($($window).width(), $window.innerWidth);
            $scope.isMenuVisible = (width > 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        }

        $scope.menuButtonClicked = function () {
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
        }

        var broadcastMenuState = function () {
            $rootScope.$broadcast('jn-menu-show', {
                show: $scope.isMenuVisible,
                isVertical: $scope.isMenuVertical,
                allowHorizontalToggle: !$scope.isMenuButtonVisible
            })
        }

        $timeout(function () {
            checkWidth();
        }, 0)
    }


})();
(function () {



    angular.module("jnMenu", ["ngAnimate"]);

})();

angular.module('jnMenu').run(['$templateCache', function($templateCache) {$templateCache.put('ext-modules/jnMenu/jnMenuGroupTemplate.html','<li class="jn-selectable-item" ng-click="clicked()" ng-class="{\'jn-item-horizontal\':!isVertical()}">\r\n    <div class="jn-noselect">\r\n        <i class="fa {{icon}} jn-menu-icon"></i>\r\n        {{label}}\r\n        <i ng-if="isVertical()"\r\n           class="fa fa-chevron-left jn-group-indicator-left"\r\n           ng-class="{\'fa-rotate-270\': isOpen}"></i>\r\n    </div>\r\n</li>\r\n<div ng-show="isOpen" class="jn-subitem-section jn-fade-in-animation" ng-class="{\'jn-popup-menu\':!isVertical()}">\r\n    <ul ng-transclude></ul>\r\n</div>');
$templateCache.put('ext-modules/jnMenu/jnMenuItemTemplate.html','<li class="jn-selectable-item" ng-class="{\'jn-item-horizontal\':!isVertical()}">\r\n    <div class="jn-noselect">\r\n        <i class="fa {{icon}} jn-menu-icon"></i>\r\n        {{label}}\r\n    </div>\r\n    <i ng-if="isActive() && isVertical()"\r\n       class="fa fa-2x fa-caret-left jn-menu-active-indicator"></i>\r\n</li>\r\n');
$templateCache.put('ext-modules/jnMenu/jnMenuTemplate.html','<div>\r\n    <ul class="jn-menu" ng-transclude></ul>\r\n    <a class="btn jn-menu-layout-button"\r\n       ng-show="allowHorizontalToggle"\r\n       ng-class="{\'jn-layout-button-horizontal\':!isVertical}"\r\n       ng-click="toggleMenuOrientation()">\r\n        <i class="fa fa-chevron-up"\r\n           ng-class="{\'fa-chevron-up\':isVertical,\'fa-chevron-left\':!isVertical}"></i>\r\n    </a>\r\n</div>');}]);
(function () {


    angular.module('jnMenu').directive('jnMenuItem', jnMenuItemDirective)

    function jnMenuItemDirective() {
        return {
            require: '^jnMenu',
            scope:{
                label: '@',
                icon: '@',
                route: '@'
            },
            templateUrl: 'ext-modules/jnMenu/jnMenuItemTemplate.html',
            link: function (scope, el, attr, ctrl) {
                scope.isActive = function () {
                    return el === ctrl.getActiveElement();
                }

                scope.isVertical = function () {
                    return ctrl.isVertical() || el.parents('.jn-subitem-section').length > 0;
                }

                el.on('click', function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(function () {
                        ctrl.setActiveElement(el);
                        ctrl.setRoute(scope.route);
                    })
                })
            },

        }
    }

})();
(function () {


    angular.module('jnMenu').directive('jnMenuGroup', jnMenuGroupDirective);

    function jnMenuGroupDirective() {
        return {
            require: '^jnMenu',
            scope: {
                label: '@',
                icon: '@'
            },
            transclude: true,
            templateUrl: 'ext-modules/jnMenu/jnMenuGroupTemplate.html',
            link: function (scope, el, attr, ctrl) {
                scope.isOpen = false;
                scope.closeMenu = function () {
                    scope.isOpen = false;
                }
                scope.clicked = function () {
                    scope.isOpen = !scope.isOpen;
                    if (el.parents('.jn-subitem-section').length == 0) {
                        scope.setSubmenuPosition();
                    }
                    ctrl.setOpenMenuScope(scope);
                }
                scope.isVertical = function () {
                    return ctrl.isVertical() || el.parents('.jn-subitem-section').length > 0;
                }
                scope.setSubmenuPosition = function () {
                    var pos = el.offset();
                    $('.jn-subitem-section').css({ 'left': pos.left + 20, 'top': 36 });
                }
            },
        }
    }

})();
(function () {


    angular.module('jnMenu').directive('jnMenu', ['$timeout',jnMenuDirective]);

    function jnMenuDirective($timeout) {
        return {
            scope: {

            },
            transclude: true,
            templateUrl: 'ext-modules/jnMenu/jnMenuTemplate.html',
            controller: 'jnMenuController',
            //controllerAs: 'jnMenuCtrl',
            link: function (scope, el, attr) {
                var item = el.find('.jn-selectable-item:first');
                $timeout(function () {
                    item.trigger('click'); // this not working?
                })
            },
            
        }
    }

})();
(function () {


    angular.module('jnMenu').controller('jnMenuController', ['$scope', '$rootScope', jnMenuController])

    function jnMenuController($scope, $rootScope) {
        $scope.showMenu = true;
        $scope.isVertical = true;
        $scope.openMenuScope = null;
        $scope.allowHorizontalToggle = true;

        this.getActiveElement = function () {
            return $scope.activeElement;
        }
        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        }
        this.setRoute = function (route) {
            $rootScope.$broadcast('jn-menu-item-selected-event', {route: route})
        }

        this.isVertical = function () {
            return $scope.isVertical;
        }
        this.setOpenMenuScope = function (scope) {
            $scope.openMenuScope = scope;
        }
        $scope.toggleMenuOrientation = function () {
            //close any open menu
            if ($scope.openMenuScope) {
                $scope.openMenuScope.closeMenu();
            }

            $scope.isVertical = !$scope.isVertical;

            $rootScope.$broadcast('jn-menu-orientation-changed-event', { isMenuVertical: $scope.isVertical });

        }

        angular.element(document).bind('click', function (e) {
            if ($scope.openMenuScope && !$scope.isVertical) {
                if($(e.target).parent().hasClass('jn-selectable-item')){
                    return;
                }
                $scope.$apply(function () {
                    $scope.openMenuScope.closeMenu();
                })
                e.preventDefault();
                e.stopPropagation();
            }
        })

        $scope.$on('jn-menu-show', function (evt,data) {
            $scope.showMenu = data.show;
            $scope.isVertical = data.isVertical;
            $scope.allowHorizontalToggle = data.allowHorizontalToggle;
        })

    }

})();
(function () {



    angular.module("jnDashboard", ["gridster", "ui.bootstrap"]);

})();

angular.module('jnDashboard').run(['$templateCache', function($templateCache) {$templateCache.put('ext-modules/jnDashboard/jnDashboardTemplate.html','<div class="jn-dashboard-header">\r\n    {{title}}\r\n    <div class="jn-dashboard-controls pull-right">\r\n\r\n        <div class="dropdown">\r\n            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">\r\n                <i class="fa fa-plus"></i>\r\n                Add Widget\r\n                <span class="caret"></span>\r\n            </button>\r\n            <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">\r\n                <li ng-repeat="widget in widgetDefinitions">\r\n                    <a role="menuitem" ng-click="addNewWidget(widget)">{{widget.title}}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div gridster="gridsterOpts">\r\n    <ul>\r\n        <li gridster-item="item" ng-repeat="item in widgets">\r\n            <!--<div class="jn-widget-header">\r\n                <span>{{item.title}}</span>\r\n                <div class="jn-widget-header-buttons">\r\n                    <button class="btn btn-default pull-right">\r\n                        <i class="fa fa-remove"/>\r\n                    </button>\r\n                    <button class="btn btn-default pull-right">\r\n                        <i class="fa fa-gear" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class="jn-widget-body"></div>-->\r\n            <jn-widget-body></jn-widget-body>\r\n        </li>\r\n    </ul>\r\n</div>');
$templateCache.put('ext-modules/jnDashboard/jnWidgetBodyTemplate.html','<div class="jn-widget-body">\r\n    <div class="jn-widget-menu-area btn-group">\r\n        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\r\n            <i class="fa fa-bars" ng-click="iconClicked()" />\r\n        </a>\r\n\r\n        <ul class="dropdown-menu" role="menu">\r\n            <li ng-click="close()"><i class="fa fa-2x fa-close" ng-click="iconClicked()" /></li>\r\n            <li ng-click="settings()"><i class="fa fa-2x fa-gear" ng-click="iconClicked()" /></li>\r\n        </ul>\r\n    </div>\r\n</div>');}]);
(function () {



    angular.module("jnDashboard").directive("jnWidgetBody", ['$compile', '$uibModal', jnWidgetBody]);

    function jnWidgetBody($compile, $uibModal) {
        return {
            //scope: inheireted
            templateUrl: 'ext-modules/jnDashboard/jnWidgetBodyTemplate.html',
            link: function (scope, element, attrs) {
                var newElement = angular.element(scope.item.template);
                element.append(newElement);
                $compile(newElement)(scope);

                scope.close = function () {
                    scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
                }

                scope.settings = function () {
                    var options = {
                        templateUrl: scope.item.widgetSettings.templateUrl,
                        controller: scope.item.widgetSettings.controller,
                        scope: scope,
                    }
                    $uibModal.open(options);
                }

                scope.iconClicked = function () {
                    //empty body
                    // this function is used by ng-click in the template
                    // so that icon clicks aren't intercetped by widgets
                }
            }
        }
    };

})();
(function () {



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