
// Create an array of objects named "charCards" and populate the array with a few premade objects.
// Include key/value pairs for all card specifications that need to be stored.

var charCards = [
	{
		name: "Heathcliff",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum eros mauris, a rhoncus libero dictum id. Sed hendrerit fermentum consectetur. Nam ullamcorper non urna elementum tristique. Donec cursus faucibus congue. Nulla consequat, lacus vel lacinia tristique, erat sem venenatis nunc, quis sagittis magna lorem vitae quam. Sed sit amet augue id nibh dictum ultricies. Nulla cursus at purus quis faucibus.",
		bgcolor: "tomato",
		font: "black"
	},
	{
		name: "Mario",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum eros mauris, a rhoncus libero dictum id. Sed hendrerit fermentum consectetur. Nam ullamcorper non urna elementum tristique. Donec cursus faucibus congue. Nulla consequat, lacus vel lacinia tristique, erat sem venenatis nunc, quis sagittis magna lorem vitae quam. Sed sit amet augue id nibh dictum ultricies. Nulla cursus at purus quis faucibus.",
		bgcolor: "blue",
		font: "white"
	},
	{
		name: "Snoopy",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum eros mauris, a rhoncus libero dictum id. Sed hendrerit fermentum consectetur. Nam ullamcorper non urna elementum tristique. Donec cursus faucibus congue. Nulla consequat, lacus vel lacinia tristique, erat sem venenatis nunc, quis sagittis magna lorem vitae quam. Sed sit amet augue id nibh dictum ultricies. Nulla cursus at purus quis faucibus.",
		bgcolor: "green",
		font: "orange"
	},
	{
		name: "Arnold",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum eros mauris, a rhoncus libero dictum id. Sed hendrerit fermentum consectetur. Nam ullamcorper non urna elementum tristique. Donec cursus faucibus congue. Nulla consequat, lacus vel lacinia tristique, erat sem venenatis nunc, quis sagittis magna lorem vitae quam. Sed sit amet augue id nibh dictum ultricies. Nulla cursus at purus quis faucibus.",
		bgcolor: "pink",
		font: "yellow"
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

var divDelete = 			"<div class='cardDelete'>Delete Card</div>";

// Create a function that...
	// a. introduces all objects in "charCards" into the DOM with formatting

function dealCards() {
	for (var i = 0; i < charCards.length; i++) {
		var build = charCards[i];
		var cardTable = document.getElementById("mainContent");
		cardTable.innerHTML  += article + build.bgcolor + styleMid + build.font + styleEnd +
														h3 + build.name + endH3 +
														sectionText + build.text + endSectionText +
														divDelete + endArticle;
	}
}


// Create a function [createNewCard()] that...
 // a. takes values from the form fields on the sidebar and dumps them in "newCard"
 // b. copies the newly created object into "charCards" at the beginning
 // c. runs print function and inputs inputs all objects into the DOM

// Create a function [deleteCard()] that...
	// a. listens for a click on the card footer
	// b. removes the clicked card from "charCards"
	// c. removes the clicked card from the DOM







