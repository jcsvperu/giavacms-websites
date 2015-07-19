/* global angular, document, window */
'use strict';

angular.module('votalatuaestate')

    // basato su LoginCtrl

    .controller('LoginCtrl', ['$scope', '$interval', '$log', '$state', 'AuthenticationService',
        'IonicService', function ($scope, $interval, $log, $state, AuthenticationService, IonicService) {

            IonicService.clear($scope);

            // change this to true when login succeeds
            AuthenticationService.isLogged().then(function (success) {
                $scope.loginOk = success;
            });

            // use cordova to get it from device or leave user input it
            $scope.auth = {};

            $scope.login = function () {
                AuthenticationService.login($scope.auth.phone);
            }

            // try to login by means of the authentication service
            $scope.numbertocall;
            var timer = {};
            $scope.$on('login-unconfirmed', function () {
                $scope.numbertocall = AuthenticationService.getTocall(function () {
                });
                if ($scope.numbertocall) {
                    $log.info('not logged');
                    timer = $interval(function () {
                        AuthenticationService.confirm();
                    }, 2000);
                }
            });

            $scope.$on('login-confirmed', function () {
                if (timer) {
                    $interval.cancel(timer);
                    timer = undefined;
                }
                $scope.loginOk = true;
                $state.go('app.home');
            });


            IonicService.ink($scope);

        }])

;
