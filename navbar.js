export async function loadNavBar() {
    const res = await fetch("./navbar.html")
    const rawHtmlText = await res.text()
    
    const parser = new DOMParser()
    const doc = parser.parseFromString(rawHtmlText, "text/html")
    
    const header = doc.querySelector("header")

    document.getElementById("navbar-container").append(header)  
}