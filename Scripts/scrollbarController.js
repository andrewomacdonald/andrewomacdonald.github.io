(function() {
    'use strict';
    angular
        .module('myWebPage')
        .directive('scrollingDirective', scrollingDirective);

    function scrollingDirective() {
        var directive = {
            restrict: 'AE',
            link: link
        };
        return directive;

        function link (scope, element, attributes) {
            scope.actuallyScrolling = false;
            var timer;
            element.bind('scroll', function () {
                scope.actuallyScrolling = true;
                scope.$apply();
                clearTimeout(timer);
                setTimeout(function () {
                    scope.actuallyScrolling = false;
                    scope.$apply();
                }, 2000);
            })
        }

    }
})();