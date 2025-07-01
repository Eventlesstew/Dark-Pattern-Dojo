document.addEventListener('DOMContentLoaded', ()=>{ /*How to trigger code.*/
    const popup = document.getElementById("confirmShamingPopup");
    const cancel = popup.getElementsByClassName("cancel")[0];
    cancel.addEventListener(('click'), ()=>{
        const popup = document.getElementById("confirmShamingPopup");
        popup.style.display = "none";
    });
});