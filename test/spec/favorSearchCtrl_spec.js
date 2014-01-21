'use strict';

describe('Search Controller', function () {
  var scope;
  beforeEach(angular.mock.module('Favor.Search'));
  
  beforeEach(angular.mock.inject(function($rootScope,$controller){
  	scope = $rootScope.$new();
    $controller('FavorSearchCtrl', {$scope: scope});
  })
  );

  describe('activating search',function(){
      it('should be activated',function(){
        scope.toggleActiveState();
      	expect(scope.activated).toBe(true);
      });
  });

  describe('clear search',function(){
    it('should be cleared', function(){
      scope.search='test';
      scope.clearSearch();
      expect(scope.search).toBe('');
    });
  });

  describe('deactivating search', function(){
    it('should be deactivated', function(){
        var activated = scope.activated;
        scope.toggleActiveState();
        expect(scope.activated).toNotBe(activated);
        scope.toggleActiveState(true);
        expect(scope.activated).toBe(true);
        scope.toggleActiveState(false);
        expect(scope.activated).toBe(false);
    });
  });
});
