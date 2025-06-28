document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    const input = document.body.getElementsByClassName("adblocker-toggle")[0];
    input.addEventListener("click", adToggle);
    /* setInterval(adFunction, 1000);*/
});

function adFunction() {
    console.log("Ad Chance");
}

function adToggle() {
    console.log("Toggled");
    /* document.body.getElementsByClassName("advert") */
}