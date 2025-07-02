document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    let popup = document.getElementById("confirmShamingPopup");
    let cancel = popup.getElementsByClassName("cancel")[0];
    let Acancel = cancel.querySelector("a");

    Acancel.onclick = function(){
        popup.style.display = "none";
    }
});