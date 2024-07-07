// let apiQuotes = [];

// get new quote
function newQuote() {
    // selects a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

// fetch quotes from API
// async function getQuotes() {
//     const apiURL = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiURL);
//         apiQuotes = await response.json();
//         newQuote();

//     } catch (error) {
//         //error handling

//     }

// }

// on load
// getQuotes();
newQuote();