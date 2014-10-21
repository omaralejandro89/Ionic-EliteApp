(function() {
    'use strict';

    angular
        .module('app.locations')
        .controller('LocationsController', ['eliteApi', LocationsController]);

    /* @ngInject */
    function LocationsController(eliteApi) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'LocationsController';

        var data = eliteApi.getLeagueData();
        vm.locations = data.locations;

        activate();

        ////////////////

        function activate() {
        }


    }
})();
