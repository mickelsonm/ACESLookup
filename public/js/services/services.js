define(['jquery',
		'services/VehicleService'],function($, vs){
		'use strict';

		var services = {
			VehicleService: vs
		};

		var initialize = function(angModule){
			$.each(services, function(name, service) {
				angModule.factory(name, service);
			});
		};

		return {
			initialize: initialize
		};
});