	function perfect() {
		var userInput = parseInt(document.getElementById("per1").value);
		var arry = [];
		if (userInput < 0) {
			document.getElementById("showPer").innerHTML = "Pefect numbers cannot be negative.  Please enter a positive number."
		}
		else if (userInput === 0) {
			document.getElementById("showPer").innerHTML = "No, 0 is not a Perfect number.";
		}
		else if (userInput === 1){
			document.getElementById("showPer").innerHTML = "No, 1 is not a Perfect number.";
		}
		else {
		for (var i = 1; i < userInput; i++) {
			if (userInput % i === 0) {
				arry.push(i);
			}
			
			var arrSum = 0;
				for (var j=0, len=arry.length; j < len; j++) {
					arrSum += arry[j];
				}
					if (arrSum === userInput) {
						document.getElementById("showPer").innerHTML = "Yes, " + userInput + " is a Perfect number.";
					}
					else {
						document.getElementById("showPer").innerHTML = "No, " + userInput + " is not a Perfect number.";
					}
					
			}	
			
		}
	}
function perfectNo() {
	for (var i = 1; i < 10000; i++) {
		var arry = [];
		for (var j = 1; j < i; j++) {
			if (i % j === 0) {
				arry.push(j);
			}
			var arrSum = 0;
			for (var k=0; k < arry.length; k++) {
					arrSum += arry[k];		
			}		
		}
		if (arrSum === i) {
			document.getElementById("printPer").innerHTML += " The number " + i + " is a perfect number. ";
		}
	}
}
