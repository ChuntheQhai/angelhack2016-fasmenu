angular.module("eliteApp", ["ngCordova","ionic","timer"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })



    .state('app.qrbarcode',{
        url: "/qrbarcode",
        views: {
          "mainContent": {
            templateUrl: "app/qrbarscanner/home.html"
          }
        }
    })

    .state('app.ads',{
        url: "/ads",
        views: {
          "mainContent":{
            templateUrl: "app/ads/ads.html"
          }
        }
    })

    .state('app.menu',{
        url: "/menu",
        views:{
            "mainContent":{
                templateUrl: "app/menu/menu.html"
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/qrbarcode');
});