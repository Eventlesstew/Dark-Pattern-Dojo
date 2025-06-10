document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

async function addHeader() {
    let parser = new DOMParser();

    const response = await fetch("/Dark-Pattern-Dojo/components.html");
    let file = await response.text();
    let item = parser.parseFromString(file, "text/html");

    let mainDiv = item.getElementsByClassName("main")[0];
    mainDiv.innerHTML = document.body.innerHTML;
    document.body.innerHTML = "";
    document.body.appendChild(item.getElementsByClassName("body")[0]);
}