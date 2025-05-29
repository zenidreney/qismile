import { dailyQuotes } from "/data.js";

const quotesPara = document.getElementById("quotes-para");
const quotesBtn = document.getElementById("quotes-btn");
const randomNumber = Math.floor(Math.random() * dailyQuotes.length);

quotesBtn.addEventListener("click", renderQuote);

function renderQuote() {
    quotesPara.innerHTML = `
                <div id="quotes-para" class="mt-3">
                
                    <p class="lead fw-bolder">
                        ${dailyQuotes[randomNumber]}
                    </p>
                    
                </div>
                `;
}
