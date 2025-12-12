/* global bootstrap */

export async function loadSupportUsModal() {
	const modalContainer = document.getElementById("support-us-modal");

	if (modalContainer) {
		const res = await fetch("/components/support-us-modal.html");
		const rawHtmlText = await res.text();

		const parser = new DOMParser();
		const doc = parser.parseFromString(rawHtmlText, "text/html");

		const modal = doc.querySelector(".modal-dialog");

		modalContainer.append(modal);

		const supportUsModal = new bootstrap.Modal(modalContainer);
		setTimeout(() => {
			supportUsModal.show();
		}, 8000);
	}
}
