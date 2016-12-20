'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('MainCtrl', function ($scope,$filter) {
  	$scope.myModel = 1;
    $scope.myOptions = [
      {id: 1, title: 'Spectrometer'},
      {id: 2, title: 'Star Chart'},
      {id: 3, title: 'Laser Pointer'}
    ];
    //console.log($filter('translate')('TRANSLATION_ID'));
    $scope.translationId = 'TRANSLATION_ID';
	$scope.myConfig = {
	  create: true,
	  valueField: 'id',
	  labelField: 'title',
	  delimiter: '|',
	  placeholder: $filter('translate')('TRANSLATION_ID'),
	  onInitialize: function(selectize){
	    // receives the selectize object as an argument
	  },
	  // maxItems: 1
	};
    
    
    $scope.values = {
      value: 78
    };
  
  });
