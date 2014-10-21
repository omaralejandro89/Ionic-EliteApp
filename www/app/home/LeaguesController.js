/**
 * Created by Omar on 10/21/14.
 */
(function() {
 'use strict';

    angular
        .module('app.home')
        .controller('LeaguesController', ['$state', 'eliteApi', LeaguesController]);

    /* @ngInject */
    function LeaguesController($state, eliteApi) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'LeaguesController';
        vm.leagues = eliteApi.getLeagues();
        vm.leagueData = eliteApi.getLeagueData();

        vm.selectLeague = selectLeague;

        console.log(vm.leagues, vm.leagueData);
        activate();

        ////////////////

        function activate() {
        }

        function selectLeague(leagueId) {
            //TODO: Select correct league
            $state.go("app.teams");
        }


    }
}());