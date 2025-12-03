import { loadFooter } from "./components/footer.js";
import { loadNavBar } from "./components/navbar.js";
import { renderQuote } from "./utils/renderQuote.js";
import { loadSupportUsModal } from "./components/supportUsModal.js";

document.addEventListener("DOMContentLoaded", () => {
	loadNavBar();
	loadFooter();
});

if (document.getElementById("support-us-modal")) {
	loadSupportUsModal();
}

if (document.getElementById("quotes-btn")) {
	const quotesBtn = document.getElementById("quotes-btn");
	quotesBtn.addEventListener("click", () => {
		renderQuote();
		quotesBtn.disabled = true;
	});
}
