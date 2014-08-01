define([
	'jquery',
	'nprogress',
	'routes/routes',
	'controllers/AppController',
	'controllers/HomeController'],
	function($, NProgress, routes, app, home){

		var controllers = {
			home: home
		};

		var setUpRoutes = function(angModule){
			angModule.config(function($routeProvider, $locationProvider) {
				$.each(routes, function(key, val) {
					$routeProvider.when(val.route,{
						template: val.template,
						controller: val.controller,
						title: val.title
					});
					$routeProvider.otherwise({ redirectTo: "/home" });
				});

				$locationProvider.html5Mode(true);
				$routeProvider.otherwise({ redirectTo: routes.home.route });
			});
			angModule.run(function($rootScope, $location){
				$rootScope.$on('$routeChangeStart',function(){
					NProgress.start();
				});
				$rootScope.$on('$routeChangeSuccess', function(next, last){
					NProgress.done();
				});

				$rootScope.isActive = function(viewPath){
					return viewPath == $location.path();
				};
			});
		};

		var initialize = function(angModule){
			angModule.controller('AppController', app);
			$.each(controllers, function(name, ctrl) {
				angModule.controller(name, ctrl);
			});
			setUpRoutes(angModule);
		};

		return {
			initialize: initialize
		};
});
