(function() {
	function MessagesCtrl($scope,$location,Message) {
		this.all = Message.messages;
		
		//this.currentPath = $location.path();
		
		this.deleted = Message.deletedMessages;
		
		$scope.update = function(date, time, note, noteNumber) {
			Message.update(date, time, note, noteNumber);
		};
		
		$scope.remove = function(noteNumber) {
			Message.remove(noteNumber);
		};
	}
	
	angular
		.module('voiceMailNotes')
		.controller('MessagesCtrl', ['$scope','$location','Message', MessagesCtrl]);
})();