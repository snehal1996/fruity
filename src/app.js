
var app = angular.module("myApp", ['ui.router']);

 
  app.config(function($stateProvider, $urlRouterProvider, $locationProvider)
  {
      
      $stateProvider.state('homepage',{
      url:'/homepage',
      templateUrl:'../templates/home.html',
      controller:'appController'
      
  });
      
      $stateProvider.state('search',{
      url:'/search',
      templateUrl:'../templates/search.html',
      controller:'searchController'
      
  });
      
      $stateProvider.state('aboutus',{
      url:'/aboutus',
      templateUrl:'../templates/aboutus.html',
      controller:'aboutController'
      
  });
      
      $stateProvider.state('contactus',{
      url:'/contactus',
      templateUrl:'../templates/contactus.html',
      controller:'contactController'
      
  });
      $stateProvider.state('login',{
      url:'/login',
      templateUrl:'../templates/login.html',
      controller:'loginController'
      
  });
  
   $stateProvider.state('signup',{
      url:'/signup',
      templateUrl:'templates/signup.html',
      controller:'signupController'
      
});


}).run(function($state,$http,$rootScope){

      $state.go('homepage');
     
      
});
  
  
  