function palindrome()
{
    var userInput = document.getElementById('pali1').value;
   
    var vali = validatePali(userInput);
    
	if (vali) {
		document.getElementById("showpali").innerHTML = "Please enter a word, phrase, or number.";
	} 
	else {
	var str = userInput.toUpperCase().replace(/\s+/g, '');
	strRev = str.split('').reverse().join('');
		if (str == strRev) {
			document.getElementById("showpali").innerHTML = "Yes, " + userInput + " is a Palindrome!";
		}
		else {
			document.getElementById("showpali").innerHTML = "No, " + userInput + " is not a Palindrome!";
		}
	}
}
function validatePali(userInput) {

    if (userInput == '' || userInput == ' ' || userInput == '  ')
       
        return true;
    else
        return false;
}
