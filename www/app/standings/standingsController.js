(function() {
    'use strict';

    angular
        .module('app.standings')
        .controller('StandingsController', ['$stateParams','eliteApi', StandingsController]);

    /* @ngInject */
    function StandingsController($stateParams, eliteApi) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'StandingsController';
        var data =eliteApi.getLeagueData();
        vm.standings = data.standings;

        activate();

        ////////////////

        function activate() {
        }


    }
})();
