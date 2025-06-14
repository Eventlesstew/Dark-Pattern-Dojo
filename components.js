document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

function dropdown(id) {
    const leftDiv = item.getElementById("compLeft")
    const dropdownElement = leftDiv.getElementsByClassName("dropdown")[id];
    let dropdownContent = dropdownElement.getElementsByClassName("dropdown-content")[0];

    if (dropdownContent.style.display == "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}

async function addHeader() {
    let parser = new DOMParser();

    const response = await fetch("/Dark-Pattern-Dojo/components.html");
    let file = await response.text();
    let item = parser.parseFromString(file, "text/html");

    const leftDiv = item.getElementById("compLeft")
    let dropdownButtons = leftDiv.getElementsByClassName("dropdown-button");
    for (i = 0; i < dropdownButtons.length; i++) {
        dropdownButtons[i].addEventListener("click", dropdown(i));
    }

    const mainDiv = item.getElementById("compMiddle");
    mainDiv.innerHTML = document.body.innerHTML;
    document.body.innerHTML = "";
    document.body.appendChild(item.getElementsByClassName("body")[0]);
}