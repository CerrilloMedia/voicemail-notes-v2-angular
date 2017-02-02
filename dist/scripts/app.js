(function() {
	function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('messages', {
                url: "/",
                controller: "MessagesCtrl as messages",
                templateUrl: "/templates/message.html"
            })
			.state('deleted', {
					url: "/deleted",
					controller: "MessagesCtrl as messages",
					templateUrl: "/templates/deleted.html"
				})
			;
	}
	
	angular
		.module('voiceMailNotes', ['firebase',  'ui.bootstrap', 'ui.router'])
		.config(config);
	
})();