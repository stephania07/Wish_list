;(function(){

  'use strict';
	angular.module("wishListApp")
	.config(function($routeProvider){
	  $routeProvider
		.when('/', { 
		  templateUrl: "views/table.html",
      controller: "tableController",
      controllerAs: "wishCtrl"			
		})
	  .when('/new', {
		  templateUrl: 'views/form.html',
			controller: "tableController",
			controllerAs: "wishCtrl"			
		})
		.when('/:id', {
		  templateUrl: 'views/show.html',
			controller: "ShowController",
		  controllerAs: "show"
		})
    
		


    .otherwise({redirectTo: '/'});	
	})
  


})();
