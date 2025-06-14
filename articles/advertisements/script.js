document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    const input = document.body.getElementsByClassName("adblocker-toggle");
    input.addEventListener("click", toggleAds)
    setInterval(advertFunction, 1000)
});

function advertFunction() {
    console.log("Ad Chance")
}

function advertToggle() {
    console.log("Toggled")
    /* document.body.getElementsByClassName("advert") */
}