//Problem: Input field answers are lost when navigating to the next page.
//Solution: Store input answers in session storage for results output down the line.


var currentPageInputField = document.getElementById("parentOfInput").nextElementSibling;
var currentPageButton = document.getElementsByClassName("button")[0];
var currentPageInputFieldId;

var value;


currentPageInputField.addEventListener("blur", function () {

	value = currentPageInputField.value;
	currentPageInputFieldId = currentPageInputField.id;
	sessionStorage.setItem(currentPageInputFieldId, value);//Keeps answer in session storage
	console.log(currentPageInputFieldId,":", value);

});

window.addEventListener("keypress", function (event) {
	if (event.keyCode === 13) { 

	value = currentPageInputField.value;
	currentPageInputFieldId = currentPageInputField.id;
	sessionStorage.setItem(currentPageInputFieldId, value);//Keeps answer in session storage
	console.log(currentPageInputFieldId,":", value);
	currentPageButton.click();
	;
	}
})


//Get session variables and show on results page.
var results = document.getElementById("results");

if(results != null) {

	var email = sessionStorage.getItem('email');
	var userFrom = sessionStorage.getItem('userFrom');
	var interests = sessionStorage.getItem('interests');
	var skills = sessionStorage.getItem('skills');
	var passions = sessionStorage.getItem('passions');
	var results = document.getElementById("results");

	window.onload = function () {

	results.innerHTML = email + "," + userFrom + "," + interests + "," + skills, + "," + passions;

	}

};












