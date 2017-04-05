function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function daysInMonth(month, year) {
	if (month == 2) {
		if (leapYear(year)) {
			return 29;
		}
		else {
			return 28;
		}
	}
	else if (month == 4 || month == 6 || month == 9 || month == 11) {
		return 30;
	}
	else {
		return 31;
	}
}

var monthNames = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

var callback = null;

function datePickerDayClick(year, month, day) {
	callback(year, month, day);
}

function datePickerMonthPrev(containerID, year, month, day, selectedyear, selectedmonth, selectedday) {
	month--;
	if (month == 0) {
		month = 12;
		year--;
	}
	
	prepDatePicker(containerID, year, month, day, selectedyear, selectedmonth, selectedday, callback);
}

function datePickerMonthNext(containerID, year, month, day, selectedyear, selectedmonth, selectedday) {
	month++;
	if (month > 12) {
		month = 1;
		year++;
	}
	
	prepDatePicker(containerID, year, month, day, selectedyear, selectedmonth, selectedday, callback);
}

function datePickerYearPrev(containerID, year, month, day, selectedyear, selectedmonth, selectedday) {
	year--;
	
	prepDatePicker(containerID, year, month, day, selectedyear, selectedmonth, selectedday, callback);
}

function datePickerYearNext(containerID, year, month, day, selectedyear, selectedmonth, selectedday) {
	year++;
	
	prepDatePicker(containerID, year, month, day, selectedyear, selectedmonth, selectedday, callback);
}

function datePickerShowMonths(containerID, year, month, day, selectedyear, selectedmonth, selectedday) {
	var html = "";
	
	html += "<div class='datepickertext'>Select month</div>";
	
	for (i=1; i<=12; i++) {
		html += "<div class='datepickerlink datepickertext";
		if (i == selectedmonth) {
			html += " datepickerselected";
		}
		html += "' style='display:inline-block; width:73px' onClick='prepDatePicker(&quot;" + containerID + "&quot;, " + year.toString() + ", " + i.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ", callback);'>" + monthNames[(i-1)] + "</div>";
		if (i % 3 == 0) {
			html += "<br>";
		}
	}
	
	html += "<div class='datepickerlink datepickertext' onClick='prepDatePicker(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ", callback);'>Back</div>";
	
	var div = document.getElementById(containerID);
	div.innerHTML = html;
}

function datePickerShowYears(containerID, year, month, day, selectedyear, selectedmonth, selectedday) {
	var html = "";
	
	html += "<div class='datepickerheadercontainer'>";
	
	html += "<div class='datepickerarrow datepickerlink datepickertext' style='float:left' onClick='datePickerYearJumpBack(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ");'>&lt;</div>";
	
	html += "<div class='datepickerarrow datepickerlink datepickertext' style='float:right' onClick='datePickerYearJumpForward(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ");'>&gt;</div>";
	
	html += "<div class='datepickertext'>Select year</div>";
	
	html += "</div>";
	
	var startYear = year-4;
	var endYear = startYear+9;
	var count = 0;
	
	for (i=startYear; i<endYear; i++) {
		html += "<div class='datepickerlink datepickertext";
		if (i == selectedyear) {
			html += " datepickerselected";
		}
		html += "' style='display:inline-block; width:73px' onClick='prepDatePicker(&quot;" + containerID + "&quot;, " + i.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ", callback);'>" + i.toString() + "</div>";
		
		count++;
		if (count == 3) {
			html += "<br>";
			count = 0;
		}
	}
	
	html += "<div class='datepickerlink datepickertext' onClick='prepDatePicker(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ", callback);'>Back</div>";
	
	var div = document.getElementById(containerID);
	div.innerHTML = html;
}

function datePickerYearJumpBack(containerID, year, month, day, selectedyear, selectedmonth, selectedday) {
	year -= 9;
	datePickerShowYears(containerID, year, month, day, selectedyear, selectedmonth, selectedday);
}

function datePickerYearJumpForward(containerID, year, month, day, selectedyear, selectedmonth, selectedday) {
	year += 9;
	datePickerShowYears(containerID, year, month, day, selectedyear, selectedmonth, selectedday);
}

function prepDatePicker(containerID, year, month, day, selectedyear, selectedmonth, selectedday, aCallback) {
	callback = aCallback;

	var html = "";

	html += "<div class='datepickerheadercontainer'>";

	html += "<div class='datepickerarrow datepickerlink datepickertext' style='float:left' onClick='datePickerMonthPrev(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ");'>&lt;</div>";
	
	html += "<div class='datepickerarrow datepickerlink datepickertext' style='float:right' onClick='datePickerMonthNext(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ");'>&gt;</div>";
	
	html += "<div class='datepickerheader datepickerlink datepickertext' onClick='datePickerShowMonths(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ");'>" + monthNames[(month-1)] + "</div>";
	
	html += "</div>";
	
	
	
	
	
	html += "<div class='datepickerheadercontainer'>";
	
	html += "<div class='datepickerarrow datepickerlink datepickertext' style='float:left' onClick='datePickerYearPrev(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ");'>&lt;</div>";
	
	html += "<div class='datepickerarrow datepickerlink datepickertext' style='float:right' onClick='datePickerYearNext(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ");'>&gt;</div>";
	
	html += "<div class='datepickerheader datepickerlink datepickertext' onClick='datePickerShowYears(&quot;" + containerID + "&quot;, " + year.toString() + ", " + month.toString() + ", " + day.toString() + ", " + selectedyear.toString() + ", " + selectedmonth.toString() + ", " + selectedday.toString() + ");'>" + year + "</div>";
	
	html += "</div>";
	
	
	
	
	
	var days = daysInMonth(month, year);
	for (i=1; i<=days; i++) {
		html += "<div class='datepickerday datepickerlink datepickertext";
		if (year == selectedyear && month == selectedmonth && i == selectedday) {
			html += " datepickerselected";
		}
		html += "' onClick='datePickerDayClick(" + year.toString() + ", " + month.toString() + ", " + i.toString() + ")'>" + i.toString() + "</div>";
		if (i % 7 == 0) {
			html += '<br>';
		}
	}
	
	if (days == 28) {
		html += "<div style='height:32px;'></div>";
	}
	
	var div = document.getElementById(containerID);
	div.innerHTML = html;
	div.style.backgroundColor = 'white';
	div.style.display = 'inline-block';
}