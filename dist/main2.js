//Problem: Need to get session values for results.
//Solution: Get session variable values and display.

var i;
var button1;
var opps = [

   [ 1,
   	 "Call Elizabeth Warren",
	 "To oppose pipeline development",
	 "Hi Elizabeth Warren.  Thanks.",
	 15, 
	 "202-244-4543",
	 "humanRights",
	 "phoneCall",
	 "Anywhere Boston"
	],

   [ 2,
     "Call Dave Barner",
	 "To oppose something else",
	 "Hi Dave Barner.  Thanks.",
	 20, 
	 "102-244-4543",
	 "animalRights",
	 "phoneCall",
	 "Anywhere 2Boston"
	]
]

window.onload = function match () {


//Get results div.
var resultsDiv = document.getElementById("results");

//Get session variables and show on results page.
var email = sessionStorage.getItem('email');
var userFrom = sessionStorage.getItem('userFrom');
var interests = sessionStorage.getItem('interests');
var skills = sessionStorage.getItem('skills');
var passions = sessionStorage.getItem('passions');
var results = document.getElementById("results");
 
	for (i=0;i<2;i++) {

		if(opps[i][7]===skills) {
			results.innerHTML += "<div class='result'>" + (opps[i][0]) + "<br>" + (opps[i][1]) + "<br>" +(opps[i][2]) + "<br>" +(opps[i][3] + "<br>" +(opps[i][4]) + "<br>" +(opps[i][5]) + "<br>" +(opps[i][6]) + "<br>" +(opps[i][7]) + "<button id='save" + i + "'>Save</button>") ;
			sessionStorage.setItem("shown_opp" + [i], opps[i][0]);
			}
		else {console.log("1 no-match: " + i)
	 		 };
	}

	console.log(sessionStorage);
}
	