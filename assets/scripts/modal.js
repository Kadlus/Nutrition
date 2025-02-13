const modal = document.getElementById("myModal");
const btn = document.getElementById("shopping-cart");
const closeBtn = document.querySelector(".close");

btn.onclick = function() {
    modal.style.display = "flex";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.body.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = "none";
    }
});