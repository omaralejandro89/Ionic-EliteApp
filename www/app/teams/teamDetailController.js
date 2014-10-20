/**
 * Created by Omar on 10/20/14.
 */
(function() {
    'use strict';

    angular
        .module('app.teams')
        .controller('TeamDetailController', [ '$stateParams', TeamDetailController]);


    /* @ngInject */
    function TeamDetailController($stateParams) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'TeamDetailController';

        console.log('$stateParams', $stateParams);

        activate();

        ////////////////

        function activate() {
        }


    }


})();