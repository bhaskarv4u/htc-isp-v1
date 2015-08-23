(function () {
    'use strict';

    angular.module('eliteApp').controller('OrderCtrl', ['$stateParams', 'orderingApi', OrderCtrl]);

    function OrderCtrl($stateParams, orderingApi){
        var vm = this;
        
        console.log("$stateParams", $stateParams);

        vm.test = "Manoj Databinding";

        vm.mainMenuItems = orderingApi.getMainMenus();

        vm.showSubMenuItems = function (argument) {
        
        	console.log(argument);
        	// body...
        };

        vm.subMenuItems = orderingApi.getSubMenus();

    };
   
})();