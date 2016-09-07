(function () {
  'use strict';
  angular.module('appMain', [
    'app.header',
    'app.body',
    'app.footer'
  ])  
  .controller('appController', function($http) {
	  app.adapter.http = app.adapter.http || $http;
  });
})();
