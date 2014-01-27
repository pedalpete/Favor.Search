Favor Search
============

Purpose
-------

Favor Search is an Angular Module which creates a search box which other modules can listen to via the 
<code>$rootScope.$broadcast('favorsearch', searchTerms)</code> method. 

Requirements
------------
* Angular.js >=1.2.5

Usage
-----

1. Include the Favor.Search module in your angular app
2. Trigger the favorSearchBox directive as an element, attribute or class in your html.

Favor.Search provides 3 methods via the FavorSearchCtrl
1. $scope.activated provides an active or focused state for the text box
2. $scope.updateSearchText watches for changes to the search input, and then broadcasts the search
4. $scope.clearSearch removes the current text of the searchBox and search text. 