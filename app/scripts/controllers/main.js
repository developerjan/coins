'use strict';

/**
 * @ngdoc function
 * @name coinsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coinsAppApp
 */
angular.module('coinsAppApp')
  .controller('MainCtrl', function ($scope, $interval, $location, surveyService) {

    $scope.timerTime = '02:00';

    var timerTime = 120;

    $interval(function () {
      timerTime--;
      var minutes = Math.floor(timerTime / 60);
      var seconds = timerTime - minutes * 60;

      $scope.timerTime = '0'+minutes+':'+seconds;

      if(timerTime <= 0) {
        $scope.resultPage();
      }
    }, 1000);

    $scope.totalCoins = 10;

    $scope.categories = {
      entertainment: 0,
      foodClothing: 0,
      loans: 0,
      miscellaneousExpenses: 0
    };

    $scope.addCoin = function (amount, category) {
      if(amount < 0) {
        if($scope.totalCoins >= 0 && $scope.categories[category] > 0) {
          $scope.categories[category]--;
          $scope.totalCoins++;
        }
      } else if (amount > 0){
        if($scope.totalCoins > 0) {
          $scope.categories[category]++;
          $scope.totalCoins--;
        }
      }
      surveyService.set($scope.categories);
    };

    $scope.resultPage = function () {
      surveyService.setIsRef();
      surveyService.set($scope.categories);
      $location.path('/result');
    };

  });
