/* global angular, document, window */
'use strict';

angular.module('votalatuaestate')

    // basato su profile

    .controller('ChaletSingleCtrl',
    ['$scope', '$stateParams', 'ChaletService', 'IonicService', 'APP_PROPERTIES', 'ClassificaService',
        function ($scope, $stateParams, ChaletService, IonicService, APP_PROPERTIES, ClassificaService) {

            // Headers and co
            IonicService.expand($scope);

            // fill this with the desired element
            $scope.element = {};
            ChaletService.getElement($stateParams.id).then(function (element) {
                $scope.element = element;


                $scope.backgroundImage = "url('img/black-logo.jpg')";
                if (element.images && element.images.length > 0) {
                    $scope.backgroundImage = "url('" + $scope.imgSrc(element.images[0]) + "')";
                }
            });

            // Set Motion
            IonicService.motion($scope, 'slideUp', '.slide-up', 300);
            IonicService.motion($scope, 'fadeSlideIn', '.animate-fade-slide-in', 700);

            // Set Ink
            IonicService.ink($scope);

            $scope.imgSrc = function (src) {
                if (src && src.filename) {
                    if (src.filename.indexOf('http') === 0) {
                        return src;
                    }
                    else {
                        return APP_PROPERTIES.PROTOCOL + "://" + APP_PROPERTIES.HOST + "/img/" + src.filename;
                    }
                }
            }

            $scope.vota = function () {
                ClassificaService.vota($scope.element.id).then(function (result) {
                    console.log('result');
                });
            }

        }]);
