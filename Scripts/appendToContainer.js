(function(){
    'use strict';
    angular
        .module('myWebPage')
        .controller('appendToContainer', appendToContainer);

    function appendToContainer($scope) {
        $scope.append = function() {
            var elementToAppend = angular.element(document.querySelector('#appendToDiv'));
            elementToAppend.append('<div class=projectThumbnail> <a href="http://rottentomatoes.com" target="_blank"> <i class="fa fa-asterisk fa-3x"></i> <p>Placeholder!</p> </a> </div>')
        }
    }

})();