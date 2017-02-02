(function() {
	function DateCtrl($scope,DateFactory) {
		$scope.today = DateFactory.today();
	}
	
	angular
		.module('voiceMailNotes')
		.controller('DateCtrl', ['$scope','DateFactory',DateCtrl]);
})();