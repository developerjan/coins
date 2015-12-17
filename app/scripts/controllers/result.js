'use strict';

/**
 * @ngdoc function
 * @name coinsAppApp.controller:ResultCtrl
 * @description
 * # ResultCtrl
 * Controller of the coinsAppApp
 */
angular.module('coinsAppApp')
  .controller('ResultCtrl', function ($scope, surveyService, $location) {
    if(!surveyService.getIsRef()){
      $location.path('/');
    }

    $scope.surveyResult = surveyService.get();
  });
