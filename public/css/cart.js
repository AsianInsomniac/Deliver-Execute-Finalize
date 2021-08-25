function openCart() {
    document.getElementById("cart").style.width = "400px";
}

function closeCart() {
    document.getElementById("cart").style.width = "0";
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
