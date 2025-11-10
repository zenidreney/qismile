

import { dailyQuotes } from "/data.js";

const quotesBtn = document.getElementById("quotes-btn");

quotesBtn.addEventListener("click", renderQuote);

function renderQuote() {
    
    const quotesPara = document.getElementById("quotes-para");
    const randomNumber = Math.floor(Math.random() * dailyQuotes.length);
    const quotePara = document.createElement("p");
    
    quotePara.classList.add("lead", "fw-bolder");
    quotePara.textContent = dailyQuotes[randomNumber];

    quotesPara.append(quotePara);

    console.log(quotesBtn, quotesPara);
    quotesBtn.disabled = true;
    
}


