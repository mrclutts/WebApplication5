function factorial() {
	var userInput = parseInt(document.getElementById("fac1").value);
	var vali = validateFac(userInput);
	var posi = positiveFac(userInput);
	if (!vali) {
		document.getElementById("showfac").innerHTML = "Please enter a number!";
	}
	else if (!posi) {
		document.getElementById("showfac").innerHTML = "Please enter a positive number.";
	}
	else {
		var fac = 1
		for (i = 1; i<=userInput; i++) {
			fac = fac * i;
		}
		document.getElementById("showfac").innerHTML = fac;
	}
}
function validateFac(num1) {
    if (isNaN(num1)) {
        return false;
    }
    else {
        return true;
    }
}
function positiveFac(num1) {
    if (num1 <= 1) {
        return false;
    }
    else {
        return true;
    }
}