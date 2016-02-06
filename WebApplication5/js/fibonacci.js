function fibonacci() {
var userInput = parseInt(document.getElementById("fib1").value);
var vali = validateFib(userInput);
	if (!vali) {
		document.getElementById("printfib").innerHTML = "Please enter a positive integer."
	}
	else {
	var a = 1;
	var b = 0;
	var c = a + b;
	var arr = [];
		for(i=1; c < userInput; ) {		
			c = a + b;
			if(c>= userInput)
				{
					break;
				}
				arr.push(c);
				document.getElementById("printfib").innerHTML = arr.join(" ");
				a=b;
				b=c;
				
		}
	}
}

function validateFib(userInput) {
	if(userInput <= 0)
		return false
	else
		return true
}