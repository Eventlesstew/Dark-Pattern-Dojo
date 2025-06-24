document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

async function addHeader() {

    let parser = new DOMParser();

    const response = await fetch("/Dark-Pattern-Dojo/components.html");
    let file = await response.text();
    let item = parser.parseFromString(file, "text/html");
    const categories = ["Temporal", "Psychological", "Monetary"]

    for (i = 0; i < categories.length; i++) {
        let tableSector = document.getElementById("homeTable" + categories[i]);
        let sidebarSector = item.getElementById("sidebar" + categories[i]).getElementsByClassName("dropdown-content")[0];
        tableSector.appendChild(sidebarSector);
    }
}