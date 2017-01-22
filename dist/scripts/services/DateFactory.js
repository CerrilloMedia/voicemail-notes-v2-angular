(function() {
	function DateFactory() {
			
			function formatDate(dateObject) {
				return (dateObject.getMonth()+1 + "/" + dateObject.getDate() + "/" + dateObject.getFullYear().toString());
			};
		
			return {
				parseDate: function(input) {
					var weekdayIndex = null, returnString = null;
					var dateToday = new Date();
					var todayIndex = dateToday.getDay(); // get weekday index for today

					// weekday array for indexOf
					var shortformDay = ["sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

					// 24hrs in milliseconds
					var dayInMilliseconds = 24 * 60 * 60 * 1000;


					/// test / verify input data
					if ( input.match(/(\d{1,2})[\/|\-|\.](\d{1,2})/) ) {
						var string = input.match(/(\d{1,2})[\/|\-|\.](\d{1,2})/);
						 var month = parseInt(string[1]) - 1; // regExp capture group 1, months are from (0 - 11), integer.
						   var day = parseInt(string[2]);     // regExp capture group 2, days are 1 - 31, integer.
						// dealing with past dates, if the date input is greater than todays date, subtract a year.
						pastDate = new Date(dateToday.getFullYear(), month, day );
						if ( pastDate > dateToday ) {
							console.log(typeof pastDate);
							pastDate.setYear(pastDate.getFullYear() - 1);
						}
						returnString = formatDate(pastDate);
					} else if ( shortformDay.indexOf(input.slice(0,3).toLowerCase() ) !== -1 ) {
						// truncate input to first 3 chars.
						input = input.slice(0,3).toLowerCase();
						weekdayIndex = shortformDay.indexOf(input);
					} else if (input.toLowerCase() == "yesterday" || input.toLowerCase() == "yes" ) {
						returnString = formatDate( new Date( dateToday - dayInMilliseconds) );
					} else if ( input.toLowerCase() == "today" ) {
						returnString = formatDate( dateToday );
					} else if ( input.toLowerCase() == "last week") {
						returnString = formatDate( new Date( dateToday - (7) * dayInMilliseconds ) );
					}

					// analyzing word-type input
					if (weekdayIndex != null ) {
						if (todayIndex > weekdayIndex) {
							// if index value of today is greater than, multiply the difference by 24hrs
							returnString = new Date( dateToday - (todayIndex - weekdayIndex) * dayInMilliseconds );
							returnString = formatDate(returnString); // format to mm/dd/yy
						} else if ( weekdayIndex >= todayIndex ) {
							// if index value of todayIndex is less than weekdayIndex, 
							returnString = new Date( dateToday - (todayIndex - weekdayIndex + 7 ) * dayInMilliseconds );
							returnString = formatDate(returnString); // format to calendar
						}
					}

					return returnString;
				}
			}
	}
	
	angular
		.module('voiceMailNotes')
		.factory('DateFactory', DateFactory);
	
})();