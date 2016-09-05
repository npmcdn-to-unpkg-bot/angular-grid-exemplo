(function() {
    'use strict'

    angular.module('app.body', [])

    .directive('uiBody', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/components/body-list/body.view.html',
            controller: ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

              var getIdAlbuns = function () {
                var ids = httpData.reduce(function(array, el){
                  if (array.indexOf(el.albumId) === -1) {
                    array.push(el.albumId);
                  }
                    return array;
                }, []);
                return ids;
              };

              var changedAlbumId = function() {
            	  var filter = $scope.albumId + 1;
                  $scope.albuns = app.util.filterArrayObjBy(httpData, filter, "albumId");
              };

              var httpData;
              
              var adapter = app.adapter.get("GaleriaDeAlbuns");
              adapter.then(function (e) {
                  init(e.data);
              });

              function init(data) {
                httpData = data;
                $scope.albuns = app.util.filterArrayObjBy(httpData, 1, "albumId");
                $scope.albunsId = getIdAlbuns();
                $scope.changedAlbumId = changedAlbumId;
              }
            }]
        }
    });
})();
