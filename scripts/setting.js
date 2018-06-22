function changeSkin(num){
    var skins = ["white","pink","blue","green","purple","black"];
    document.getElementById("skinCss").href = "../styles/" + skins[num] + ".css";
}
onload = function(){
    readStorage();
    var motto = document.getElementById("name").getElementsByTagName("p")[0];
    var information = document.getElementById("information");
    var mottoChange = information.getElementsByTagName("textarea")[0];
    mottoChange.value = motto.innerHTML;
    document.getElementById("informationChange").onclick = function(){
        motto.innerHTML = mottoChange.value;
        window.localStorage.setItem("motto",mottoChange.value);
    };
    document.getElementById("skinChange").onclick = function(){
        var skinCss = document.getElementById("skinCss");
        var skinCssHref = skinCss.href;
        window.localStorage.setItem("skinCss",skinCssHref);
    }; 
};