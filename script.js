let quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Do or do not. There is no try.", author: "Yoda" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

function newQuote() {
    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText = quotes[random].text;
    document.getElementById("author").innerText = "- " + quotes[random].author;
}

// Show one quote on load
newQuote();