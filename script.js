const quoteBtn = document.querySelector('.new-button');
const twitterBtn = document.querySelector('.twitter-button');
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author-text');
const loader = document.querySelector('.loader');
const quoteContainer = document.querySelector('.quote-container');

let quotes = [];

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function loaded(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

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
        changeQuote();
    }catch(err){
        alert(err);
    }

    
};

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

function changeQuote(){
    const result = pickQuote();

    const currQuote = result.text;
    const currAuthor = result.author;

    if(currQuote.length > 100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = currQuote;

    if(currAuthor)
        authorText.innerText = currAuthor;
    else
        authorText.innerText = 'Unknown';
};

//on load
loading();
getQuotes();
loaded();


quoteBtn.addEventListener('click', () => {
    loading();
    changeQuote();
    loaded();
});


twitterBtn.addEventListener('click', () => {
    tweetQuote();
});