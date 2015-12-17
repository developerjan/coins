'use strict';

/**
 * @ngdoc service
 * @name coinsAppApp.surveyService
 * @description
 * # surveyService
 * Factory in the coinsAppApp.
 */
angular.module('coinsAppApp')
  .factory('surveyService', function () {
    var surveyData = {};
    var isRef = false;

    function getIsRef() {
      return isRef;
    }
    function setIsRef() {
      isRef = true;
    }

    function set(data) {
      surveyData = data;
    }
    function get() {
      return surveyData;
    }

    return {
      setIsRef: setIsRef,
      getIsRef: getIsRef,
      set: set,
      get: get
    };
  });
