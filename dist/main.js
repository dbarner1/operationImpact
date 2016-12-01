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

window.onload = function() {
  currentPageInputField.focus();
}













