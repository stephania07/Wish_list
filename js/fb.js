;(function(){
  'use strict';
  angular.module("wishListApp")
  .factory("firebaseFactory", function($http, $location){
	 var url = "https://x-masswishlist.firebaseio.com/wishes/";
	 function getWishes(cb){
	   $http.get(url + ".json")
		 .success(function(data){
		   cb(data);
		 })			
	   .error(function(err){
		   console.log(err);
		 })
	}
	 function addNewWish(wish, cb){
	   $http.post(url + ".json", wish)
		 .success(function(data){
		   cb(data);
		 })			
	   .error(function(err){
		   console.log(err);
		})
	 }
	function removeWish(id, cb){
	  $http.delete(url + id + '.json')			 
	    .success(function(data){
	      cb(data);
		})
		.error(function(err){
		  console.log(err);
		})
	}
	function editWish(wish, cb){
	  $http.patch(url + $location.$$path + ".json" , wish)
	    .success(function(data){
		  cb(data);
		})				 
		.error(function(err){
		  console.log(err);
		})
	}
     return {getWishes: getWishes,
			 addNewWish: addNewWish,
	         removeWish: removeWish,
             editWish: editWish
			}	
	})				
})();
