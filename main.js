const height = screen.height
const head = document.body.appendChild(document.createElement("div"));
head.id = "head";
head.style.height = height + "px";
const img = head.appendChild(document.createElement("img"));
img.src = "AAF7eCm4sbw_sWriQm_1707515503330.png";
img.style.height = "300px";

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.screenY < 213) {
        head.style.height = (height - (window.scrollY)) + "px";
    }
}