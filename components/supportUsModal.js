/* global bootstrap */

export async function loadSupportUsModal() {

    const supportUsModalContainer = document.getElementById("support-us-modal")

    if(supportUsModalContainer) {


        const res = await fetch("/components/support-us-modal.html")
        const rawHtmlText = await res.text()
        console.log(rawHtmlText)
        
        const parser = new DOMParser()
        const doc = parser.parseFromString(rawHtmlText, "text/html")
        
        const modal = doc.getElementById("support-us-modal")
        console.log(modal)
    
        document.body.append(modal)  
    
        const supportUsModal = new bootstrap.Modal(modal)
        setTimeout(() => {
            supportUsModal.show()
        }, 5000);

    }

}