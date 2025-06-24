document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

async function addHeader() {

    let parser = new DOMParser();

    const response = await fetch("/Dark-Pattern-Dojo/components.html");
    let file = await response.text();
    let item = parser.parseFromString(file, "text/html");

    const leftDiv = item.getElementById("compLeft");
    const categories = ["Temporal", "Psychological", "Monetary"]

    for (i = 0; i < categories.length; i++) {
        let tableSector = document.body.getElementById("homeTable" + categories[i]);
        let sidebarSector = leftDiv.getElementById("sidebar" + categories[i]).getElementsByClassName("dropdown-content")[0];
        tableSector.appendChild(sidebarSector);
    }
}