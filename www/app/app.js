angular.module("eliteApp", ["ionic","chart.js"])

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
})
.controller("LineCtrl", function ($scope) {

  $scope.labels = ["DEL", "Sales", "W.O", "O.O.S"];
  $scope.series = ['Series A'];
  $scope.title = "FP4";
  $scope.data = [
    [10, 6, 3, 2]
    
  ];
   $scope.data1 = [
    [12, 7, 5, 4]
    
  ];
   $scope.data2 = [
    [20, 15, 5, 6]
    
  ];
   $scope.data3 = [
    [20, 15, 5, 6]
    
  ];
	$scope.legend=true;  
 $scope.medals_colours = [{fillColor:["skyblue", "lightgreen", "lightyellow", "orange"]}];
 $scope.options = {responsive : false,
            showTooltips : false,
            showInlineValues : true,
            centeredInllineValues : true,
            tooltipCaretSize : 0,
            tooltipTemplate :"<%= value %>"};
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
   $scope.onAnimationComplete = function () {
      
                if (this.options.showInlineValues) {
                    if (this.name == "Bar") {
                        this.eachBars(function(bar){
                            var tooltipPosition = bar.tooltipPosition();
                            new Chart.Tooltip({
                                x: Math.round(tooltipPosition.x),
                                y: this.options.centeredInllineValues
                                    ? Math.round( bar.y + (bar.height() / 2) + ((this.options.tooltipFontSize + this.options.tooltipYPadding) / 2) )
                                    : Math.round(tooltipPosition.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: template(this.options.tooltipTemplate, bar),
                                chart: this.chart
                            }).draw();
                        });
                    }
                }
            
  };
});
     