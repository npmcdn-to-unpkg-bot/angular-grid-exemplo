(function () {
  'use strict';
  angular.module('appMain', [
    // Core dependency Injection
    'ui.bootstrap',

    // Components dependency Injection
    'app.home',

    //Shared dependency Injection
    'app.header',
    'app.footer'
  ]);
})();
