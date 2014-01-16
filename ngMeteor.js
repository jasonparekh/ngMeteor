// ngMeteor - Package Scope Variable
ngMeteor = angular.module('ngMeteor', [/*'ngMeteor.touch'*/, 'ngMeteor.collections', /*'ngMeteor.template',*/ /*'ngMeteor.router',*/ /*'ui.select2'*/]
);

// Change the data-bindings from {{foo}} to [[foo]]
ngMeteor.config(['$interpolateProvider',
	function ($interpolateProvider) {
		$interpolateProvider.startSymbol('[[');
		$interpolateProvider.endSymbol(']]');
	}
]);

// Manual initilisation of the ngMeteor module
angular.element(document).ready(function() {
	angular.bootstrap(document, ['ngMeteor', 'angled']);
});