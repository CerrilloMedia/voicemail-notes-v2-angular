(function() {
	function AddMessageCtrl($document, $scope,Message) {
		$scope.totalActiveMessages = 0;
		
		$scope.addNote = function() {
			Message.add();
		}
	}
	
	angular
		.module('voiceMailNotes')
		.controller('AddMessageCtrl', ['$document','$scope','Message', AddMessageCtrl]);
})();