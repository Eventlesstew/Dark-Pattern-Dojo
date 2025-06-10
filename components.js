document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

async function addHeader() {
    let parser = new DOMParser();

    const response = await fetch("/Dark-Pattern-Dojo/components.html");
    let file = await response.text();
    let item = parser.parseFromString(file, "text/html");

    let bodyDiv = item.getElementsByClassName("main")[0];
    bodyDiv.innerHTML = document.body.innerHTML;
    document.body.innerHTML = ""
    document.body.appendChild(item);
}