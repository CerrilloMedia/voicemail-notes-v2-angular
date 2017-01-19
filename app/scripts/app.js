(function() {
	function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('mainview', {
                url: "/",
                controller: "MainviewCtrl as mainview",
                templateUrl: "/templates/mainview.html"
            });
	
	angular
		.module('voiceMailNotes', ['firebase',  'ui.bootstrap', 'ui.router'])
		.config(config);
	
})()