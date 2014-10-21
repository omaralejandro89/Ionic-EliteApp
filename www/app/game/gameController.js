(function() {
    'use strict';

    angular
        .module('app.games')
        .controller('GamesController', ['$stateParams', 'eliteApi', GamesController]);

    /* @ngInject */
    function GamesController($stateParams, eliteApi) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'GamesController';
        vm.gameId = Number($stateParams.id);
        var data =eliteApi.getLeagueData();

        vm.game = _.find(data.games, {'id': vm.gameId});


        activate();

        ////////////////

        function activate() {
        }


    }
})();
