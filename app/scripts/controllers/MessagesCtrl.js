(function() {
	function MessagesCtrl($scope,Message) {
		this.all = Message.messages;
		
		$scope.update = function(date, time, note, noteNumber) {
			Message.update(date, time, note, noteNumber);
		};
		
		$scope.remove = function(noteNumber) {
			Message.remove(noteNumber);
		};
	}
	
	angular
		.module('voiceMailNotes')
		.controller('MessagesCtrl', ['$scope','Message', MessagesCtrl]);
})();