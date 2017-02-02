(function() {
	function Message(DateFactory) {
		
		var totalMessages = 0;
		
		return {
			messages: [
//				TEST OBJECTS
//				{date: "Monday", time: "1am", note: "foo", noteNumber: 1},
//				{date: "Tuesday", time: "2am", note: "bar", noteNumber: 2},
//				{date: "Thursday", time: "3am", note: "baz", noteNumber: 3},
//				{date: "Friday", time: "4am", note: "fab", noteNumber: 4}
			],			
			add: function() {
				totalMessages += 1;
				
				var emptyMessageObject = {
					date: "",
					time: "",
					note: "",
					noteNumber: totalMessages,
					callbackNumber: "",
					dateCreated: Date()
				}
				
				this.messages.push(emptyMessageObject);
				
				this.totalActiveMessages += 1;
//				console.log("created note #" + emptyMessageObject.noteNumber);
//				console.log(this.messages);
			},			
			remove: function(noteNumber, args) {
				
				//////////////////
//				@ return true if the array object finds the property number that matching noteNumber
				function matchNoteIndex(object) {
					return object.noteNumber == noteNumber;					
				};
//				Use .findIndex passing each message object into matchNoteIndex (above)
				var index = this.messages.findIndex(matchNoteIndex);
				//////////////////
				
//				Move message to deletedMessages object if any note has been updated
				if (this.messages[index].note == "") {
					// if note is empty, delete
					this.messages.splice(index, 1);
				} else {
					// else move it to deletedMessages array
					this.deletedMessages.push(this.messages.splice(index, 1)[0]);
					console.log("note was moved to trash");
				}
				
				this.totalActiveMessages -= 1;
				
//				TESTING DELETED MESSAGES ARRAY
//				console.log(this.deletedMessages.length);
//				console.log(this.deletedMessages);
			},
			update: function(date, time, note, noteNumber) {
				var callbackNumber = "null" // doSomethingWith(note) & return an callback number;
				
//				TESTING INPUT OBJECT
//				console.log(
//					"TESTING OBJECT UPDATE..."+
//					"\ndate: " + date + 
//					"\ntime: " + time + 
//					"\nnote: " + note +
//					"\nnoteNumber: " + noteNumber +
//					"\ncallbackNumber: " + callbackNumber);
//				TESTING FINISHED
				
//				@ return true if the array object finds the property number matching noteNumber
				function matchNoteIndex(object) {
					return object.noteNumber == noteNumber;					
				};
				var index = this.messages.findIndex(matchNoteIndex);
				
				this.messages[index].date = DateFactory.parseDate(date) || "";
				this.messages[index].time = time || "";
				this.messages[index].note = note || "";
				
			},
			totalActiveMessages: null,
			deletedMessages: []
		}
	}
	
	angular
		.module('voiceMailNotes')
		.factory('Message', ['DateFactory',Message]);
})();