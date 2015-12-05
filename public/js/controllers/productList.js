/**
 * Created by user on 2015-12-05
 */

 angular.module('product')
 .controller('productListCtrl', function($scope, $filter){
 	var selectedCategory = null;

 	$scope.selectCategory = function(newCategory){
 		selectedCategory = newCategory;
 	}

 	$scope.categoryFilterFn = function(product){
 		return selectedCategory == null || product.category == selectedCategory;
 	}
 });