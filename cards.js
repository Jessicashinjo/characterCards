
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

// Create an object that holds clusters of HTML code for formatting cards

var cluster = {
								article: 					"<article class='card' style='background:",
								styleMid: 				"; color:",
								styleEnd: 				"'>",
								endArticle: 			"</article>",

								h3: 							"<h3 class='cardName'>",
								endH3: 						"</h3>",

								sectionText: 			"<section class='card-text'>",
								endSectionText: 	"</section>",

								divDelete: 				"<div class='cardDelete'>",
								endDivDelete: 		"</div>"
							}

// Create a function [createNewCard()] that...
 // a. takes values from the form fields on the sidebar and dumps them in "newCard"
 // b. copies the newly created object into "charCards" at the beginning
 // c. introduces the new object to the DOM

// Create a function [deleteCard()] that...
	// a. listens for a click on the card footer
	// b. removes the clicked card from "charCards"
	// c. removes the clicked card from the DOM
