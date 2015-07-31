'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')

  .controller('Upload', ['$log', '$scope', '$state', 'APP_PROPERTIES', 'AuthenticationService', 'ChaletService', 'SingleFileUploadService',
    function ($log, $scope, $state, APP_PROPERTIES, AuthenticationService, ChaletService, SingleFileUploadService) {

      // change this to true when login succeeds
      AuthenticationService.isLogged().then(function (success) {
        if (!success) {
          $state.go('login');
        }
        else {
          $scope.phone = AuthenticationService.getUsername()
          $scope.fullname = AuthenticationService.getFullname();
        }
      });

      ChaletService.getList(0, 0, 200).then(function (data) {
        $scope.chalets = data;
      });

      $scope.upload = {};

      $scope.uploadFile = function () {
        $log.debug('file is ' + JSON.stringify($scope.upload.image));
        var uploadUrl = 'http://' + APP_PROPERTIES.HOST + '/api/v1/photos/chalet/' + $scope.upload.chaletId;
        var fileObj = {};
        fileObj.name = $scope.upload.chaletId + '_' + $scope.upload.image.name;
        fileObj.description = 'Uploaded by ' + $scope.fullname + ' on ' + new Date().toString();
        fileObj.file = $scope.upload.image.file;
        SingleFileUploadService.uploadFileToUrl(uploadUrl, fileObj);
      };

    }])

  .
  config(['$stateProvider', function ($stateProvider) {

    $stateProvider

      .state('upload', {
        url: '/upload',
        controller: 'Upload',
        templateUrl: 'views/upload.html'
      })

  }]);