export async function loadFooter() {
    const res = await fetch("./components/footer.html")
    const rawHtmlText = await res.text()
    
    const parser = new DOMParser()
    const doc = parser.parseFromString(rawHtmlText, "text/html")
    
    const footer = doc.getElementById("footer-container")

    document.querySelector("footer").append(footer)  
}