export async function loadNavBar() {
    const res = await fetch("/components/navbar.html")
    const rawHtmlText = await res.text()
    
    const parser = new DOMParser()
    const doc = parser.parseFromString(rawHtmlText, "text/html")
    
    const navBar = doc.querySelector("nav")

    document.getElementById("navbar-container").append(navBar)  
}