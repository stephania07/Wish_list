;(function(){
  'use strict';
	angular.module("wishListApp")
  .controller("tableController", function(firebaseFactory){
	var vm = this;
	vm.getWish = function(){
	firebaseFactory.getWishes(function(data){
	  vm.wishes = data;
	});
	}
	  vm.getWish();
	})

})();
