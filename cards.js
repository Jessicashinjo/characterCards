
// Create an array of objects named "charCards" and populate the array with a few premade objects.
// Include key/value pairs for all card specifications that need to be stored.

var charCards = [
	{

	},
	{

	},
	{

	},
	{

	}
];

// Define a placeholder array named "newCard".

var newCard = [];

// Create variables that hold clusters of HTML code for formatting cards

var article = 				"<article class='card' style='background:";
var styleMid = 				"; color:";
var styleEnd = 				"'>";
var endArticle = 			"</article>";

var h3 = 							"<h3 class='cardName'>";
var endH3 = 					"</h3>";

var sectionText = 		"<section class='card-text'>";
var endSectionText = 	"</section>";

var divDelete = 			"<div class='cardDelete'>";
var endDivDelete = 		"</div>";

// Create a function [createNewCard()] that...
 // a. takes values from the form fields on the sidebar and dumps them in "newCard"
 // b. copies the newly created object into "charCards" at the beginning
 // c. introduces the new object to the DOM

// Create a function [deleteCard()] that...
	// a. listens for a click on the card footer
	// b. removes the clicked card from "charCards"
	// c. removes the clicked card from the DOM
