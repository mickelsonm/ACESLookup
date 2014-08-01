define([
	'/js/vendor/requirejs-text/text.js!/js/views/home.html'
],function(homeTemplate){
	return {
		home: {
			title: 'Home',
			route: '/home',
			controller: 'home',
			template: homeTemplate
		}
	};
});