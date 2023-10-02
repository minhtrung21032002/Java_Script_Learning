header = document.querySelector('.header')
modal = document.querySelector('.modal')

edit = document.getElementById('test')

modal_body = modal.querySelector('.modal_body')

modal.onclick = function(e) {

    // Check if the clicked element has the class "modal_overlay"
    if (e.target.classList.contains("modal_overlay")) {
        modal.style.display = "none";
    }
}


function test(){
    modal.style.display = "flex"


}
