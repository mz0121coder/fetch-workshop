/* Task 1 - fetch
Write an async function called getQuote.

Use fetch to send a GET request to https://zenquotes.io/api/random/ and store the resolved value of the returned promise in a variable called response.

Call the .json() method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called data.

Use that data to set the text of the h1 with id "quote".

Hint: You can use console.log to have a look at the structure of the data object to figure out how to get just the quote out!

Call this function so that the quote appears as soon as the page loads.
*/

async function getQuote() {
	const response = await fetch('https://meowfacts.herokuapp.com/');
	const data = await response.json();
	console.log(data);
	const h1 = document.querySelector('#quote');
	h1.textContent = data.data[0];
}

getQuote();
