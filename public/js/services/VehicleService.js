define([], function () {
	'use strict';

	var service = ['$resource', function ($resource) {
		return $resource('http://localhost:8080/vehicles',{
			query:{method: 'GET'}
		});
	}];

	return service;
});