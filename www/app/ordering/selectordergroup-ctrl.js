(function () {
    'use strict';

    angular.module('eliteApp').controller('SelectOrderGroupCtrl', ['$stateParams', 'orderingApi', SelectOrderGroupCtrl]);

    function SelectOrderGroupCtrl($stateParams, orderingApi){
        var vm = this;
        vm.header = "Select Order Group";
        

        vm.orderGroups = orderingApi.getOrderGroups();


        console.log("In SelectOrderGroupCtrl");
    };
   
})();