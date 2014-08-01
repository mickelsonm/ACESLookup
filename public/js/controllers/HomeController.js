define([],function(){
	'use strict';
	var ctlr = ['$scope','VehicleService', function($scope, VehicleService){
		VehicleService.query({}, function(vehicles){
			$scope.vehicles = vehicles;
		});
	}];

	return ctlr;
});