/* Task 1 - Fetch
Write an async function called getQuote.

Use fetch to send a GET request to https://zenquotes.io/api/random/ and store the resolved value of the returned promise in a variable called response.

Call the .json() method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called data.

Use that data to set the text of the h1 with id "quote".

Hint: You can use console.log to have a look at the structure of the data object to figure out how to get just the quote out!

Call this function so that the quote appears as soon as the page loads.
*/

// getQuote();

/* Task 2 - On Click 
Sweet - we're getting a new inspirational quote every time the page is refreshed! Let's make the page more interactive.

Attach an event listener to the button already on the page with id "new-quote-button" to call getQuote when the user clicks.

Note: As it's a free API, requests are limited to five per 30 second period; if you exceed this, until that timer resets, you'll receive: "Too many requests. Obtain an auth key for unlimited access."
*/

/* Task 3 - History 
Create a function that takes in a string, creates a new list item with that string, and adds it to the ol with the id "quote-history".

Call this function within your getQuote function so that the quotes get stored in the "quote-history" list.
*/

function addQuote(string) {
	const quotes = document.querySelector('#quote-history');
	quotes.insertAdjacentHTML('beforeend', `<li>${string}</li>`);
}

async function getQuote() {
	const response = await fetch('https://meowfacts.herokuapp.com/');
	const data = await response.json();
	console.log(data);
	const h1 = document.querySelector('#quote');
	h1.textContent = data.data[0];
	addQuote(h1.textContent);
}

const newQuote = document.querySelector('#new-quote-button');
newQuote.addEventListener('click', getQuote);
