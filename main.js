
document.getElementsByTagName("footer")[0].style.bottom = 0;

const head = document.body.appendChild(document.createElement("div"));
head.id = "head";
head.style.height = "%100";
head.style.width = "%100";
head.textContent = "hihihi";


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    head.style.height = "%"+ (100-(window.screenY-50));
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}