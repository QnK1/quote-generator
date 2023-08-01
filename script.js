const quoteBtn = document.querySelector('.new-button');
const twitterBtn = document.querySelector('.twitter-button');
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author-text');

let quotes = [];

function pickQuote(){
    const rnd = Math.floor(Math.random() * quotes.length);
    const quote = quotes[rnd];

    return quote;
};

async function getQuotes(){
    const url = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try{
        const response = await fetch(url);
        const data = await response.json();

        quotes = data;
    }catch(err){
        alert(err);
    }
};

//on load
getQuotes();

quoteBtn.addEventListener('click', () => {
    const result = pickQuote();

    const currQuote = result.text;
    const currAuthor = result.author;

    quoteText.innerText = currQuote;
    authorText.innerText = currAuthor;
});