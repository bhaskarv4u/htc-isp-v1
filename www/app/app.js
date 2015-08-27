angular.module("eliteApp", ["ionic"])

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

    .state('home', {
      abstract: true,
      url: "/home",
      templateUrl: "app/home/home.html"
    })

    .state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })

    .state('app.dashboard', {
      url: "/dashboard",
      views: {
        'mainContent': {
          templateUrl: "app/dashboard/dashboard.html"
        }
      }
    })

    .state('app.ordering', {
      url: "/ordering/:id",
      views: {
        'mainContent': {
          templateUrl: "app/ordering/ordering.html"
        }
      }
    })

     .state('app.selectordergroup', {
      url: "/selectordergroup",
      views: {
        'mainContent': {
          templateUrl: "app/ordering/selectordergroup.html"
        }
      }
    })

    .state('app.selectcategory', {
      url: "/selectcategory",
      views: {
        'mainContent': {
          templateUrl: "app/ordering/selectcategory.html"
        }
      }
    })

    .state('app.orderitems', {
      url: "/orderitems",
      views: {
        'mainContent': {
          templateUrl: "app/ordering/orderitems.html"
        }
      }
    })

    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});