

import { dailyQuotes } from "/data.js";



export function renderQuote() {
    
    const quotesPara = document.getElementById("quotes-para");
    const randomNumber = Math.floor(Math.random() * dailyQuotes.length);
    const quotePara = document.createElement("p");
    
    quotePara.classList.add("lead", "fw-bolder");
    quotePara.textContent = dailyQuotes[randomNumber];

    quotesPara.append(quotePara);

   
    
}