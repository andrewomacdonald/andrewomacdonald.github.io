(function() {
    'use strict';
    angular
        .module('myWebPage')
        .directive('overflowDirective', overflowDirective);

    function overflowDirective() {
        var directive = {
            restrict: 'AE',
            link: link
        };

        function link ($scope, $element, $attributes) {
            
            function containerVisibility() {
                if($('.projectContent').height() === 0 || $('.projectContentWithoutScroll').height() === 0) {
                    $element.css('overflow', 'hidden');
                } else if($('.projectContent').height() > 0 || $('.projectContentWithoutScroll').height() > 0) {
                    $element.css('visibility', 'visible');
                }
            }
            
            $(window).resize(containerVisibility);
        }
        return directive;
    }
})();