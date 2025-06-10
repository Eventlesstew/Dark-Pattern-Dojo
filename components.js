document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

async function addHeader() {
    let parser = new DOMParser();

    const response = await fetch("/Dark-Pattern-Dojo/components.html");
    let file = await response.text();
    let item = parser.parseFromString(file, "text/html");

    let contentDiv = document.createElement("div");

    let leftSidebar = item.getElementsByClassName("left")[0]
    contentDiv.appendChild(leftSidebar);

    let bodyDiv = document.createElement("div");
    bodyDiv.innerHTML = document.body.innerHTML;
    contentDiv.appendChild(bodyDiv);

    document.body.innerHTML = ""
    document.body.appendChild(contentDiv);

    let itemInternal = item.getElementsByClassName("internal")[0];
    document.body.appendChild(itemInternal);


}