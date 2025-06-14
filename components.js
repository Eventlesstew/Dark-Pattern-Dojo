document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

document.addEventListener("click")

function dropdown(element) {
    console.log(element.style.display);
    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
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
        dropdownButtons[i].addEventListener("click", function() {
            const dropdownElement = leftDiv.getElementsByClassName("dropdown")[id];
            const dropdownContent = dropdownElement.getElementsByClassName("dropdown-content")[0];
            dropdown(dropdownContent)
        });
    }

    const mainDiv = item.getElementById("compMiddle");
    mainDiv.innerHTML = document.body.innerHTML;
    document.body.innerHTML = "";
    document.body.appendChild(item.getElementById("compBody"));
}