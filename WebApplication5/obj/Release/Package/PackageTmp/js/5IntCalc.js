function maxNumber()
{
var str1 = parseInt(document.getElementById('num1').value);
var str2 = parseInt(document.getElementById('num2').value);
var str3 = parseInt(document.getElementById('num3').value);
var str4 = parseInt(document.getElementById('num4').value);
var str5 = parseInt(document.getElementById('num5').value);
var vali = validate(str1, str2, str3, str4, str5);
	if(!vali) {
		document.getElementById("show").innerHTML = "Enter all numbers";
	}
	else {
		var numArr = Math.max(str1,str2,str3,str4,str5);
		document.getElementById("show").innerHTML = "Maximum: " + numArr;
	}
}

function minNumber()
{
var str1 = parseInt(document.getElementById('num1').value);
var str2 = parseInt(document.getElementById('num2').value);
var str3 = parseInt(document.getElementById('num3').value);
var str4 = parseInt(document.getElementById('num4').value);
var str5 = parseInt(document.getElementById('num5').value);

var vali = validate(str1,str2,str3,str4,str5);
	if(!vali) {
		document.getElementById("show").innerHTML = "Enter all numbers";
	}
	else {
		var numArr = Math.min(str1,str2,str3,str4,str5);
		document.getElementById("show").innerHTML = "Minimum: " + numArr;
	}
}

function meanNumber() 
{
var str1 = parseInt(document.getElementById('num1').value);
var str2 = parseInt(document.getElementById('num2').value);
var str3 = parseInt(document.getElementById('num3').value);
var str4 = parseInt(document.getElementById('num4').value);
var str5 = parseInt(document.getElementById('num5').value);
var vali = validate(str1,str2,str3,str4,str5);
	if(!vali) {
		document.getElementById("show").innerHTML = "Enter all numbers";
	}
	else {

var numArr = [str1, str2, str3, str4, str5]
var sumNum = 0;
var mean = 0;
	for (var i = 0; i < numArr.length; i++) {
		numArr[i] = parseInt(numArr[i]);
		sumNum = sumNum + numArr[i];
	}
	mean = sumNum / numArr.length;
	document.getElementById("show").innerHTML = "Mean: " + mean;
}
}

function sumNumber() {
var str1 = parseInt(document.getElementById('num1').value);
var str2 = parseInt(document.getElementById('num2').value);
var str3 = parseInt(document.getElementById('num3').value);
var str4 = parseInt(document.getElementById('num4').value);
var str5 = parseInt(document.getElementById('num5').value); 
var vali = validate(str1, str2, str3, str4, str5);
	if(!vali) {
		document.getElementById("show").innerHTML = "Enter all numbers";
	}
	else {
		var numArr = [str1, str2, str3, str4, str5];
		var sumNum = 0;
			for (var i = 0; i < numArr.length; i++) {
			numArr[i] = parseInt(numArr[i]);
			sumNum = sumNum + numArr[i];
		}
		document.getElementById("show").innerHTML = "Sum: " + sumNum;
	}
}

function prdNumber(){
	var str1 = parseInt(document.getElementById('num1').value);
	var str2 = parseInt(document.getElementById('num2').value);
	var str3 = parseInt(document.getElementById('num3').value);
	var str4 = parseInt(document.getElementById('num4').value);
	var str5 = parseInt(document.getElementById('num5').value); 
	var vali = validate(str1, str2, str3, str4, str5);
	if(!vali) {
		document.getElementById("show").innerHTML = "Enter all numbers"
	}
	else {
	var numArr = [str1, str2, str3, str4, str5];
	var prdNum = 1;
		for (var i = 0; i < numArr.length; i++) {
			numArr[i] = parseInt(numArr[i]);
			prdNum = prdNum * numArr[i];
		}
		document.getElementById("show").innerHTML = "Product: " + prdNum;
	}
}
function validate(str1,str2,str3,str4,str5){
	if(isNaN(str1) || isNaN(str2) || isNaN(str3) || isNaN(str4) || isNaN(str5))
		return false;
	else
		return true;
}