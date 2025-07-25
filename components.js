document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    addHeader();
})

async function addHeader() {
    function dropdownToggle(element) {
        if (element.style.display == "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    let parser = new DOMParser();

    const response = await fetch("/Dark-Pattern-Dojo/components.html");
    let file = await response.text();
    let item = parser.parseFromString(file, "text/html");

    const leftDiv = item.getElementById("compLeft");
    let dropdown = leftDiv.getElementsByClassName("dropdown");
    for (i = 0; i < dropdown.length; i++) {
        const dropdownButton = dropdown[i].getElementsByClassName("dropdown-button")[0];
        const dropdownContent = dropdown[i].getElementsByClassName("dropdown-content")[0];
        dropdownToggle(dropdownContent); /* This ensures the dropdown is hidden when first loading the page.*/
        dropdownButton.addEventListener("click", function() {dropdownToggle(dropdownContent);});
    }

    const mainDiv = item.getElementById("compMiddle");
    mainDiv.innerHTML = document.body.innerHTML;
    document.body.innerHTML = "";
    document.body.appendChild(item.getElementById("compBody"));
}