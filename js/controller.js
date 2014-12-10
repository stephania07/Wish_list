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
		vm.addWish = function(wish){
		firebaseFactory.addNewWish(wish, function(cb){
		  vm.wishes[vm.wishes.name] = wish;
			vm.newWish = null;
		});
		}
	 vm.deleteWish = function(id){
		 console.log(id);
	 firebaseFactory.removeWish(id, function(cb){
	   delete vm.wishes[id];
		 console.log(id);
	 }); 
	 };
	})
  .controller("ShowController", function(firebaseFactory, $location){
	var vm = this;
	vm.editWish = function(){
	firebaseFactory.editWish(vm.newWish, function(data){
	  $location.path("/");
	})				
	
	};
	})
})();
