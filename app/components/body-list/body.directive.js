(function() {
    'use strict'

    angular.module('app.body', [])

    .directive('uiBody', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/components/body-list/body.view.html',
            controller: ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

              var getAlbumById = function (id) {
                return httpData.filter(function(e) { return e.albumId == id; });
              };

              var getIdAlbuns = function () {
                var ids = httpData.reduce(function(array, el){
                  if (array.indexOf(el.albumId) == -1) {
                    array.push(el.albumId)
                  }
                    return array;
                }, []);
                return ids;
              };

              var changedAlbumId = function() {
                  $scope.albuns = getAlbumById($scope.albumId + 1);
              };

              var httpData;
              var albumId = 1;

              $http.get('https://jsonplaceholder.typicode.com/photos')
              .then(function (e) {
                  init(e.data);
              });

              function init(data) {
                httpData = data;
                $scope.albuns = getAlbumById(albumId);
                $scope.albunsId = getIdAlbuns();
                $scope.changedAlbumId = changedAlbumId;
              }
            }]
        }
    });
})();
