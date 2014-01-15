Package.describe({
	summary: "The simplest no-conflict way to use AngularJS with Meteor, Meteorite and Atmosphere Smart Packages."
});

Package.on_use(function (api) {
	// Exports the ngMeteor package scope
	api.export('ngMeteor', 'client');

	// Files to load in Client only.
	api.add_files([
		// NOTE: We removed included libs in favor of using meteor-bower to import them.

		// Module Files
		'modules/ngMeteor.touch.js',
		'modules/ngMeteor.collections.js',
		'modules/ngMeteor.template.js',
		'modules/ngMeteor.router.js',
		// Finally load ngMeteor File
		'ngMeteor.js'
	], 'client');

});
