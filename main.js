function somethin(){
var body = document.getElementsById("main");
var e = "<div id=\"invis\">_" + body.innerHTML + "_</div>";
body.innerHTML = e.split("_")[1];
document.getElementById("temp").innerHTML = "";
}