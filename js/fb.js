;(function(){
  'use strict';
  angular.module("wishListApp")
  .factory("firebaseFactory", function($http){
	 var url = "https://x-masswishlist.firebaseio.com/wishes";
	 function getWishes(cb){
	   $http.get(url + ".json")
		 .success(function(data){
		   cb(data);
		 })			
	   .error(function(err){
		   console.log(err);
		 })
		 }
     return {getWishes: getWishes
						 
		 }	
	})				
})();
