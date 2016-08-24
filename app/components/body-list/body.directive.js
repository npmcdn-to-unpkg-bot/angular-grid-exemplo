(function() {
    'use strict'

    angular.module('app.body', [])

    .directive('uiBody', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/components/body-list/body.view.html',
            controller: ['$scope', '$filter', function ($scope, $filter) {

            }]
        }
    });
})();
