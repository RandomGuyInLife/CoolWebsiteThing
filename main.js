function run() {
    var body = document.getElementsById("main");
    body.innerHTML = "Hi. This website is a work in proggrest and I would appreciate if you could wubmit ideas <a href=\"https://docs.google.com/forms/d/e/1FAIpQLScTzw-G6-45gjl9YghlbxGihFEmTlBvZpE4sc9hJc93XHaKxg/viewform?usp=sf_link\">here</a> or continue to that current games <button id=\"start\">here</button>." + "<div id=\"invis\">_" + body.innerHTML + "_</div>";
    document.getElementById("start").onclick = body.innerHTML += body.innerHTML.split("_")[1];
}