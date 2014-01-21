'use strict';

angular.module('Favor.Search',[])
.controller('FavorSearchCtrl',function($scope, $rootScope){
	$scope.activated = true;
	$scope.toggleActiveState = function(setState){
		if(setState) return $scope.activated = setState;
		$scope.activated = !$scope.activated;
		return;
	}

	$scope.search='';
	$scope.updateSearchText = function(){
		$rootScope.$broadcast('favorSearch',$scope.search);
	}
	$scope.clearSearch = function(){
		$scope.search='';
	}
})
.directive('favorSearchBox',function(){
	return {
		restrict:'EAC',
		transclude: true,
		replace: false,
		controller: 'FavorSearchCtrl',
		template: '<div ng-class="{\'active\': activated}"><input type="text" ng-change="updateSearchText()" ng-model="search"><span ng-click="clearSearch()"><i class="fa fa-times"></i></span><span><i class="fa fa-search"></i></span></div>',
		link: function(scope,elem,attrs){

		}
	}
});

