document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

async function addHeader() {
    let parser = new DOMParser();

    const response = await fetch("/Dark-Pattern-Dojo/components.html");
    let file = await response.text();
    let item = parser.parseFromString(file, "text/html");

    let contentDiv = document.createElement("div");

    let leftSidebar = item.getElementsByTagName("left")[0]
    contentDiv.appendChild(leftSidebar);

    let bodyDiv = document.createElement("div");
    bodyDiv.appendChild(document.body.innerHTML);
    contentDiv.appendChild(bodyDiv);

    document.body.appendChild(contentDiv);

    let itemInternal = item.getElementsByTagName("internal")[0];
    document.body.appendChild(itemInternal);


}