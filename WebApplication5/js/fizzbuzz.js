function fizzBuzz() {
var user1 = parseInt(document.getElementById('fb1').value);
var user2 = parseInt(document.getElementById('fb2').value);
var vali = validateFB(user1, user2);
var check = checkNoFB(user1, user2);
var number = numberCheckFB(user1, user2);
var negative = negativeCheckFB(user1, user2);
if (!vali) {
	document.getElementById("showfb").innerHTML = "Please enter two numbers!";
}
else if (!check) {
	document.getElementById("showfb").innerHTML = "Please enter two different numbers.";
}
else if (!number) {
	document.getElementById("showfb").innerHTML = "Please enter two numbers between 1-100.";
}
else if (!negative) {
	document.getElementById("showfb").innerHTML = "Please enter two numbers between 1-100.";
}
else {
		var numArr = [user1, user2];
		console.log(numArr);
		var fizzRemain = 1;
		var buzzRemain = 1;
		var fizzBuzzRemain = 1;
		var fizz = numArr[0];
		var buzz = numArr[1];
		var fizzBuzz = fizz * buzz;
		var output = "";
		output += "";
			for (var i = 1; i <= 100; i++) {
				numArr[i] = parseInt(numArr[i]);
				fizzRemain = i % fizz;
				buzzRemain = i % buzz;
				fizzBuzzRemain = i % fizzBuzz;
				if (fizzBuzzRemain == 0) {
					output += "FizzBuzz ";
				}
				else if (fizzRemain == 0) {
					output += "Fizz ";
				}
				else if (buzzRemain == 0) {
					output += "Buzz ";
				}
				else {
					output += i + " ";
				}
				
			}
		document.getElementById("showfb").innerHTML = output;
	}	
}
function validateFB(user1, user2) {
	if (isNaN(user1) || isNaN(user2)) {
		return false;
	}
	else {
		return true;
	}
}
function checkNoFB(user1, user2){
	if (user1 === user2) {
		return false;
	}
	else{
		return true;
	}
}
function numberCheckFB(user1, user2) {
	if (user1 >=100 || user2 >=100) {
		return false;
	}
	else {
		return true;
	}
}
function negativeCheckFB(user1, user2) {
	if (user1 <=0 || user2 <=0) {
		return false;
	}
	else {
		return true;
	}
}