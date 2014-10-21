(function() {
    'use strict';

    angular
        .module('app.teams')
        .controller('TeamsController', ['eliteApi',TeamsController]);

    /* @ngInject */
    function TeamsController(eliteApi) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'TeamsController';
        var data = eliteApi.getLeagueData();
        vm.teams = data.teams;

        activate();

        ////////////////

        function activate() {
        }
    }


})();
