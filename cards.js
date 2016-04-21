
// Create an array of objects named "charCards" and populate the array with a few premade objects.
// Include key/value pairs for all card specifications that need to be stored.

var charCards = [];

// Define a placeholder object named "newCard".

var newCard = {};

// Create variables that hold clusters of HTML code for formatting cards

var article = 				"<article class='card' id='art";
var articleIdEnd = 		"' style='background:";
var styleMid = 				"; color:";
var styleEnd = 				"'>";
var endArticle = 			"</article>";

var h3 = 							"<h3 class='cardName'>";
var endH3 = 					"</h3>";

var sectionText = 		"<section class='card-text'>";
var endSectionText = 	"</section>";

var divDelete = 			"<div class='cardDelete'>Delete Card</div>";

// Place DOM elements for form fields in variables

var userName = document.getElementById("userName");
var userText = document.getElementById("userText");

var bgColorId  = [
										{
											id: document.getElementById("tomato"),
											color: "tomato"
										},
										{
											id: document.getElementById("blue"),
											color: "blue"
										},
										{
											id: document.getElementById("green"),
											color: "green"
										},
										{
											id: document.getElementById("pink"),
											color: "pink"
										}
									];

var fontColorId = [
										{
											id: document.getElementById("black"),
											color: "black"
										},
										{
											id: document.getElementById("white"),
											color: "white"
										},
										{
											id: document.getElementById("orange"),
											color: "orange"
										},
										{
											id: document.getElementById("yellow"),
											color: "yellow"
										}
									];

// Create a function that...
	// a. introduces all objects in "charCards" into the DOM with formatting

function dealCards() {
	var cardTable = document.getElementById("mainContent");
	cardTable.innerHTML = "";
	for (var i = 0; i < charCards.length; i++) {
		var build = charCards[i];
		cardTable.innerHTML  += article + i + articleIdEnd + build.bgcolor + styleMid + build.font + styleEnd +
														h3 + build.name + endH3 +
														sectionText + build.text + endSectionText +
														divDelete + endArticle;
	}
}

// Create a function [previewCard()] that...
	// a. displays the card in the "preview" div

// Create a function [colorLoop(obj)] that...
	// a. loops through color radio IDs looking for .checked

function colorLoop(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log("arr[i].id.checked: ", arr[i].id.checked);
		if (arr[i].id.checked) {
		console.log("arr[i].color: ", arr[i].color);
		return arr[i].color;
		}
	}
}

// Create a function that validates all specifications in the sidebar (i.e. makes sure all specs have been selected)

function verifyText(obj) {
	if (obj === "") {
		alert("Please add text to both fields.");
		return true;
	}
}

function verifyColor(obj) {
	if (obj === undefined) {
		alert("Please select both a background and a font color.");
		return true;
	}
}

// Make an object constructor function that builds new cards

function Card(name, text, bgcolor, font) {
	this.name = name;
	this.text = text;
	this.bgcolor = bgcolor;
	this.font = font;
}

// Create a function [createNewCard()] that...
 // a. takes values from the form fields on the sidebar and dumps them in "newCard"
 	// i. verifies all input fields to find any empty or undefined values
 	// ii. runs colorLoop() to find correct color values
 // b. on submit, copies the newly created object into "charCards" at the beginning
 // c. runs print function and inputs inputs all objects into the DOM
 // d. resets all specifications in the card creation form

function createNewCard(event) {
	event.preventDefault();

	while (verifyText(userName.value)) {
		return;
	}

	while (verifyText(userText.value)) {
		return;
	}

	while (verifyColor(colorLoop(bgColorId))) {
		return;
	}

	while (verifyColor(colorLoop(fontColorId))) {
		return;
	}

	newCard = new Card(userName.value, userText.value, colorLoop(bgColorId), colorLoop(fontColorId));
	charCards.unshift(newCard);
	dealCards();
	cancelNew(event);
}

// Create a function [cancelNew()] that resets all specifications in the sidebar when the "Clear" button is clicked

function clearColors(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i].id.checked = false;
	}
}

function cancelNew(event) {
	event.preventDefault();
	userName.value = "";
	userText.value = "";
	clearColors(bgColorId);
	clearColors(fontColorId);
}

// Create a variable called "buttonDelete" that is set to an empty array
// Create a function [cardDelete()] that...
	// a. runs on the click event on mainContent
	// b.	defines "buttonDelete" as an array of delete div DOM elements
	// c. removes the clicked card from "charCards"
	// d. removes the clicked card from the DOM

var buttonDelete = [];

function cardDelete(event) {
	buttonDelete = document.getElementsByClassName("cardDelete");
	console.log("length", buttonDelete.length);
	for (var i = 0; i < buttonDelete.length; i++) {
		if (event.target === buttonDelete[i]) {
			mainContent.removeChild(buttonDelete[i].parentNode);
			charCards.splice(i, 1);
			console.log("charCards: ", charCards);
		}
	}
}

// Define an event listener [click "Create" button] to submit form data
// Define an event listener [click "Cancel" button] to clear form data
// Define an event listener [click "Delete Card" on card footer] to delete a card

var buttonCreate = document.getElementById("create");
buttonCreate.addEventListener("click", createNewCard);

var buttonCancel = document.getElementById("cancel");
buttonCancel.addEventListener("click", cancelNew);

var mainContent = document.getElementById("mainContent");
mainContent.addEventListener("click", cardDelete);




