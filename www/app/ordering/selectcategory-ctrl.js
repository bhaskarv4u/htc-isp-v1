(function () {
    'use strict';

    angular.module('eliteApp').controller('SelectCategoryCtrl', ['$stateParams', 'orderingApi', SelectCategoryCtrl]);

    function SelectCategoryCtrl($stateParams, orderingApi){
        var vm = this;
        vm.header = "Select Order Category";       

         vm.orderCategories = orderingApi.getCategories();
        // vm.orderGroups = orderingApi.getOrderGroups();
        console.log("In SelectCategoryCtrl");
    };
   
})();