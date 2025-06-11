function dropdown(id) {
    let dropdownElement = document.body.getElementsByClassName("dropdown")[id]
    let dropdownContent = dropdownElement.getElementsByClassName("dropdown-content")

    if (dropdownContent.style.display == "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}