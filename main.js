const head = document.body.appendChild(document.createElement("div"));
head.id = "head";
head.style.height = screen.height + "px";
const img = head.appendChild(document.createElement("img"));
img.src = "AAF7eCm4sbw_sWriQm_1707515503330.png";
img.style.height = "200px";
head.style.top = 100 + "px";


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  head.style.height = screen.height - window.scrollY + "px";
}