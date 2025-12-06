/* global bootstrap */

export async function loadSupportUsModal() {
	const modalContainer = document.getElementById("support-us-modal");
	// console.log(modalContainer)

	if (modalContainer) {
		const res = await fetch("/components/support-us-modal.html");
		const rawHtmlText = await res.text();
		// console.log(rawHtmlText)

		const parser = new DOMParser();
		const doc = parser.parseFromString(rawHtmlText, "text/html");

		const modal = doc.querySelector(".modal-dialog");
		// console.log(modal)

		modalContainer.append(modal);

		const supportUsModal = new bootstrap.Modal(modalContainer);
		setTimeout(() => {
			supportUsModal.show();
		}, 8000);
	}
}
