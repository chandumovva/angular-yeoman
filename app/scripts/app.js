'use strict';

/**
 * @ngdoc overview
 * @name buddiesApp
 * @description
 * # buddiesApp
 *
 * Main module of the application.
 */
angular
  .module('buddiesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($urlRouterProvider,$stateProvider) {

     $urlRouterProvider.otherwise('/');
      $stateProvider.state('home',{
        url:'/',
        templateUrl:'views/login.html',
        controller:'MainCtrl'
      })
      .state('dashboard',{  
        url:'/dashboard',
        templateUrl:'views/dashboard.html',
        controller:'dashboard'
      })
      .state('create',{
        url:'/create',
        templateUrl:'views/create.html',
        controller:'buddy'
      })
      .state('edit',{
        url:'/:username/edit',
        templateUrl:'views/edit.html',
        controller:'buddy'
      });
  });

  angular.module('buddiesApp')
    .run(function(){
      var buddies = localStorage.getItem('buddies');
      if(!buddies){
        buddies = {
          "amar":{
            "username":"amar",
            "firstName":"Amaranadh",
            "lastName":"Meda",
            "status":"active",
            "email":"sdfsafasf@gmail.com",
            "address":"sdfsafasfasa",
            "birthday":"01/04/1990",
            "bio":"Full stack developer "
          },
          "divya":{
            "username":"divya",
            "firstName":"Divya",
            "lastName":"Movva",
            "status":"active",
            "email":"divyamovva9@gmail.com",
            "address":"Tenali",
            "birthday":"01/04/1993",
            "bio":"Web & Mobile developer "
          }
        };
        localStorage.setItem('buddies',JSON.stringify(buddies));
      }
    });
