'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
.controller('TechCtrl',function($scope,$stateParams){
	$scope.currType;
	$scope.currInclude = 'react';
    switch($stateParams.type){
	  case 'front' : 
	    $scope.currType = $scope.myTech.f;
	    $scope.currInclude = $scope.currType[0];
	    break;
	  case 'backend' :  
	    $scope.currType = $scope.myTech.b;
	    $scope.currInclude = $scope.currType[0];
	    break;
	  case 'database' :  
	    $scope.currType = $scope.myTech.d;
	    $scope.currInclude = $scope.currType[0];
	    break;
	  case 'system' :  
	    $scope.currType = $scope.myTech.s;
	    $scope.currInclude = $scope.currType[0];
	    break;
	  case 'versionManager' :  
	    $scope.currType = $scope.myTech.v;
	    $scope.currInclude = $scope.currType[0];
	    break;
	  case 'tool' :  
	    $scope.currType = $scope.myTech.t;
	    $scope.currInclude = $scope.currType[0];
	    break; 
	  default :
	    $scope.currType = $scope.myTech.f;
	    $scope.currInclude = $scope.currType[0];
	    break;  	
	};

	$scope.changeTemp = function(l){
      console.log(l);
      $scope.currInclude = l;
	}
});
