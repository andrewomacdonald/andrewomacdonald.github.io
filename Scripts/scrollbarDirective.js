(function() {
    'use strict';
    angular
        .module('myWebPage')
        .directive('scrollingDirective', scrollingDirective);

    function scrollingDirective($timeout) {
        var directive = {
            restrict: 'AE',
            link: link
        };

        function link ($scope, $element, $attributes) {
            $scope.actuallyScrolling = false;
            var timer;
            $element.bind('scroll', function () {
                $scope.actuallyScrolling = true;
                $scope.$apply();
                $timeout.cancel(timer);
                $timeout(function () {
                    $scope.actuallyScrolling = false;
                }, 2000);
            })
        }
        return directive;
    }
})();