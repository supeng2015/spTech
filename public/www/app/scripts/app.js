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
    'ngTouch',
    'pascalprecht.translate',
    'selectize'
  ])
  .run(function($rootScope){
    $rootScope.myTech = {
      f : ['angular','react','jquery','requirejs','es6','less','html5'],  
      b : ['nodejs','kibana','java','spark'],
      d : ['redis','mongodb','mysql'],
      s : ['mac','windows'],
      v : ['git','svn'],
      t : ['grunt','webpack','gulp']
    }    
  })
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      'TRANSLATION_ID': 'Hello there!',
      'WITH_VALUES': 'The following value is dynamic: {{value}}'
    });
    $translateProvider.preferredLanguage('en');
 
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
