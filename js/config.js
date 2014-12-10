;(function(){

				console.log('routes')
  'use strict';
	angular.module("wishListApp")
	.config(function($routeProvider){
	  $routeProvider
		.when('/', { 
		  templateUrl: "views/table.html",
      controller: "tableController",
      controllerAs: "wishCtrl"			
		})
    .otherwise({redirectTo: '/'});	
	})



})();
