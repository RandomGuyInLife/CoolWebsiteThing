const head = document.body.appendChild(document.createElement("div"));
head.id = "head";
head.style.height = screen.height + "px";
const img = head.appendChild(document.createElement("img"));
img.src = "AAF7eCm4sbw_sWriQm_1707515503330.png";
img.style.height = "200px";

const test = function () {
  for (i = 0; i < 100;) {
  setTimeout(() => {
      head.style.top = i + "px";
      i++;
      head.textContent = head.style.top + "q2e2qe21e12e12e12e21e12e12e12ee1212";
    
  }, 5000);}
}
setTimeout(test(), 10000)


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  head.style.height = screen.height - window.scrollY + "px";
}