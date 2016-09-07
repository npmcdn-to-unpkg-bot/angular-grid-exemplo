(function() {
    'use strict'

    angular.module('app.body', [])

    .directive('uiBody', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/components/body-list/body.view.html',
            controller: ['$scope', '$filter', function ($scope, $filter) {

            	var getRaritys = function (results) {
                    var raritys = results.reduce(function(array, el){
                      if (array.indexOf(el.rarity) === -1) {
                        array.push(el.rarity);
                      }
                        return array;
                    }, ["All"]);
                    return raritys;
                  };

                  var changedRarity = function () {
                	  var filter = $scope.rarity;
                	  var newResult = app.util.filterArrayObjBy(results, filter, "rarity");
                	  $scope.results = newResult.length > 0 ? newResult : results;
                  };
                  
                  var results;
                  
                  var adapter = app.adapter.get("Pokes");
                  adapter.then(function (e) {
                      init(e.data);
                  });

                  function init(data) {
                	  results = data.results
	                  $scope.results = results;
	                  $scope.raritys = getRaritys(results);
	                  $scope.changedRarity = changedRarity;
                  }
            }]
        }
    });
})();
