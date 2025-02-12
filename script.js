const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

// show loading
function loading () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loading
function complete () {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// get new quote
function newQuote() {

    loading();

    // selects a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //check if author field is null
    if (!quote.author){
        authorText.textContent = 'Unknown';
    } else {
    authorText.textContent = quote.author;
    }

    //check quote length
    if(quote.text > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');

    }

    // set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}

// fetch quotes from API
async function getQuotes() {

    loading ();

    //const apiURL = 'https://type.fit/api/quotes';
     const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {
        //error handling

    }

}

//tweet the quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load
getQuotes();
