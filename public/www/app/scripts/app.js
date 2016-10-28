'use strict';

/**
 * @ngdoc overview
 * @name wwwApp
 * @description
 * # wwwApp
 *
 * Main module of the application.
 */
angular
  .module('wwwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($rootScope){
    $rootScope.myTech = {
      f : ['angular','react','jquery','requirejs','es6','less','html5'],  
      b : ['node'],
      d : ['redis'],
      s : ['mac','windows','linux'],
      v : ['git','svn'],
      t : ['grunt','webpack','gulp']
    }    
  })
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('main',{
      url: '/main',
      views : {
        'main-view' : {
          templateUrl : 'views/main.html',
          controller : 'MainCtrl'
        }
      }
    })
    .state('tech',{
      url: '/tech/:type',
      views : {
        'main-view' : {
          templateUrl : 'views/tech.html',
          controller : 'TechCtrl'
        }
      }
    })
    $urlRouterProvider
    .otherwise('/main');
  });
