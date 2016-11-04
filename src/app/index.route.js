(function() {
  'use strict';

  angular
    .module('lionTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
            '': {
                templateUrl: 'app/pages/main/main.html',
                controller: 'MainController'
            },
            '@home': {
                templateUrl: "app/pages/checkout/checkout.html",
                controller: "checkoutController"
            },
            'header@home': {
                templateUrl: "app/pages/header/header.html",
                controller: "MainController"
            },
            'footer@home': {
                templateUrl: "app/pages/footer/footer.html",
                controller: "MainController"
            }
        }
      })

        .state('home.thanks', {
            url: 'thanks',
            templateUrl: 'app/pages/thanks/thanks.html',
            controller: 'thanksController',
            controllerAs: 'thanks'
        });



    $urlRouterProvider.otherwise('/');
  }

})();
