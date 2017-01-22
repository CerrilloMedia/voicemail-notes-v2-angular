(function() {
	function AddMessageCtrl($document, $scope,Message) {
		
		$scope.addNote = function() {
			Message.add();
			$scope.totalActiveMessages = Message.totalActiveMessages;
			console.log($scope.totalActiveMessages);
		}
	}
	
	angular
		.module('voiceMailNotes')
		.controller('AddMessageCtrl', ['$document','$scope','Message', AddMessageCtrl]);
})();