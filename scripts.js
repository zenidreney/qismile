import { loadNavBar } from "./components/navbar.js";

import { loadFooter } from "./components/footer.js";

import { renderQuote } from "./utils/renderQuote.js";

import { loadSupportUsModal } from "./components/supportUsModal.js";


document.addEventListener("DOMContentLoaded", () => {
    
    /*Load Navbar component at the top to header div*/
    
    loadNavBar();

    /*Load footer to the footer tag*/

    loadFooter();
})

/* Some pages have a moda popup */


if (document.getElementById("support-us-modal")) {
    
    loadSupportUsModal()
}

/*Logic for daily-insipiration page*/

if (document.getElementById("quotes-btn")) {
    const quotesBtn = document.getElementById("quotes-btn");
    quotesBtn.addEventListener("click", () => {
        renderQuote();
        quotesBtn.disabled = true;
    });
}