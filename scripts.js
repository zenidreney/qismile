import { loadNavBar } from "./components/navbar.js";

import { loadFooter } from "./components/footer.js";

import { renderQuote } from "./utils/renderQuote.js";

import { loadSupportUsModal } from "./components/supportUsModal.js";

/*Logic for daily-insipiration page*/

if (document.getElementById("quotes-btn")) {
    const quotesBtn = document.getElementById("quotes-btn");
    quotesBtn.addEventListener("click", () => {
        renderQuote();
        quotesBtn.disabled = true;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    
/*Load Navbar component at the top to header div*/
    
    loadNavBar();
    
/*Load footer to the footer tag*/
    
    loadFooter();
})

loadSupportUsModal()

