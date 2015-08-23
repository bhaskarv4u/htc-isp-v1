(function () {
    'use strict';

    angular.module('eliteApp').controller('OrderCtrl', ['$stateParams', 'orderingApi', OrderCtrl]);

    function OrderCtrl($stateParams, orderingApi){
        var vm = this;
        
        console.log("$stateParams", $stateParams);

        vm.test = "Manoj Databinding";

        vm.mainMenuItems = orderingApi.getMainMenus();

        

        // function to be invoked when clicked by Main Menu button
        vm.showSubMenuItems = function (mainMenuId) {
        
        	console.log(mainMenuId);
            vm.subMenuItems  = orderingApi.getSubMenus(mainMenuId);

            console.log("vm submenu items : ")
            console.log(vm.subMenuItems)
        	// body...
        };

        

    };
   
})();