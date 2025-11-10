import { loadNavBar } from "./components/navbar.js";
import { renderQuote } from "./utils/renderQuote.js";

import { loadFooter } from "./components/footer.js";

loadNavBar();

const quotesBtn = document.getElementById("quotes-btn");
quotesBtn.addEventListener("click", () => {
    renderQuote();
    quotesBtn.disabled = true;
});

loadFooter()
