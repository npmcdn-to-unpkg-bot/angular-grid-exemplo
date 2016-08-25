(function() {
    'use strict'

    angular.module('app.body', [])

    .directive('uiBody', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/components/body-list/body.view.html',
            controller: ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
              $http({
                url: "https://jsonplaceholder.typicode.com/photos",
                dataType: "json",
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
              })
              .success(function (data) {
                  console.log(data);
              })
              .error(function (data, status, headers, config) {

              });
            }]
        }
    });
})();
