document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

function dropdown(leftDiv, id) {
    const dropdownElement = leftDiv.getElementsByClassName("dropdown")[id];
    let dropdownContent = dropdownElement.getElementsByClassName("dropdown-content")[0];
    
    console.log(id);
    console.log(dropdownContent.style.display);
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
        dropdownButtons[i].addEventListener("click", dropdown(leftDiv, i));
    }

    const mainDiv = item.getElementById("compMiddle");
    mainDiv.innerHTML = document.body.innerHTML;
    document.body.innerHTML = "";
    document.body.appendChild(item.getElementById("compBody"));
}