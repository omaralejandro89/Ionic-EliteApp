/**
 * Created by Omar on 10/20/14.
 */
(function(){
    'use strict';

    angular
        .module('app.core')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('home', {
                    url: "/home",
                    templateUrl: "app/home/home.html"
                })

                .state('app', {
                    url: "/app",
                    templateUrl: 'app/layout/menu-layout.html'
                });


            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app');
        });


})();