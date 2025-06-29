document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    const input = document.body.getElementsByClassName("adblocker-toggle")[0];

    setTimeout(setup, 500)
});

let toggleAds = true;

function setup() {
    console.log(document.getElementById("compLeft"))
    const leftSidebar = document.getElementById("compLeft").getElementsByClassName("sidebar")[0];
    leftSidebar.appendChild(adDiv());

    const rightSidebar = document.getElementById("compRight").getElementsByClassName("sidebar")[0];
    for (i = 0; i < 3; i++) {
        rightSidebar.appendChild(adDiv());
    }

    const adElements = document.body.getElementsByClassName("ad");
    for (i = 0; i < adElements.length; i++) {
        adElements[i].style.display = "none";
        adElements[i].appendChild(adImage());
    }

    setInterval(adFunction, 1000);
}

function adImage() {
    const advertImg = document.createElement("img");
    advertImg.setAttribute("src", "/Dark-Pattern-Dojo/articles/advertisements/images/Mumbo.jpg");
    return advertImg;
};

function adDiv() {
    const advertDiv = document.createElement("div");
    advertDiv.setAttribute("class", "ad");

    return advertDiv;
};

function adFunction() {
    if (toggleAds) {
        const adElements = document.body.getElementsByClassName("ad");
        const adIndex = Math.floor(Math.random() * adElements.length);

        console.log(adElements);
        adElements[adIndex].style.display = "block"
    }
};

function adToggle() {
    console.log("Toggled");

    if (toggleAds) {
        const adElements = document.body.getElementsByClassName("ad");
        for (i = 0; i < adElements.length; i++) {
            adElements[i].style.display = "none";
        }

    }

    toggleAds = !toggleAds;
};