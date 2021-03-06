/**
 * Created by Omar on 10/20/14.
 */
(function() {
    'use strict';

    angular
        .module('app.teams')
        .controller('TeamDetailController', [ '$stateParams', 'eliteApi', '$ionicPopup', TeamDetailController]);


    /* @ngInject */
    function TeamDetailController($stateParams, eliteApi, $ionicPopup) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'TeamDetailController';

        //console.log('$stateParams', $stateParams);
        vm.teamId = Number($stateParams.id);
        var data = eliteApi.getLeagueData();

        vm.toggleFollow = toggleFollow;
        vm.following = false;


        activate();

        ////////////////

        function activate() {
        }

        var team = _.chain(data.teams)
                    .flatten("divisionTeams")
                    .find({ "id": vm.teamId })
                    .value();

        vm.teamName = team.name;

        vm.games = _.chain(data.games)
                    .filter(isTeamInGame)
                    .map(function (item) {
                        var isTeam1 = (item.team1Id === vm.teamId ? true : false);
                        var opponentName = isTeam1 ? item.team2 : item.team1;
                        var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score, item.team2Score);
                        return {
                            gameId: item.id,
                            opponent: opponentName,
                            time: item.time,
                            location: item.location,
                            locationUrl: item.locationUrl,
                            scoreDisplay: scoreDisplay,
                            homeAway: (isTeam1 ? "vs." : "at")
                        };
            })
            .value();

        vm.teamStanding = _.chain(data.standings)
            .flatten("divisionStandings")
            .find({"teamId": vm.teamId})
            .value();


        function toggleFollow() {
            if( vm.following) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Unfollow?',
                    template: 'Are you sure you want to unfollow?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        vm.following = !vm.following;
                    }
                })
            } else {
                vm.following = !vm.following;
            }
        }


        function isTeamInGame(item){
            return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
        }

        function getScoreDisplay(isTeam1, team1Score, team2Score) {
            if (team1Score && team2Score) {
                var teamScore = (isTeam1 ? team1Score : team2Score);
                var opponentScore = (isTeam1 ? team2Score : team1Score);
                var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
                return winIndicator + teamScore + "-" + opponentScore;
            }
            else {
                return "";
            }
        }

    }


})();