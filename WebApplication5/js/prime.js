function primeNo() {
var userInput = parseInt(document.getElementById("prime1").value);
var vali = validatePrime(userInput);
var posi = positivePrime(userInput);

	if (!vali) {
		document.getElementById("printprime").innerHTML = "Please enter a number!"
	}
	else if (!posi) {
		document.getElementById("printprime").innerHTML = "Please enter a positive number great than 1."
	}
	else {
	var arr = [];
	for (a=2; a<=userInput; a++) {
		var prime = true;
		
		for (b=2; b < a; b++) {
			if(a % b === 0)
			{
				prime = false;
			}
		}
		if (prime) {
			arr.push(a);
		}
	}

		document.getElementById("printprime").innerHTML = arr.join(" ");
	}	
}

function validatePrime(num1) {
	if (isNaN(num1)) 
		return false;
	else 
		return true;
}
function positivePrime(num1) {
	if (num1 <=1)
		return false
	else
		return true
}