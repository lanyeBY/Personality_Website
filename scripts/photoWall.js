function createNewPhoto(imgSrc){
    var newphoto = document.createElement("div");
    newphoto.className = "photo";
    newphoto.innerHTML = "<img src='" + imgSrc +"'>";
    document.getElementById("main").appendChild(newphoto);
}
window.onload = function(){
    readStorage();
    var imgSrcArray = [];
    var showMore = document.getElementById("showMore").getElementsByTagName("a")[0];
    for(var i = 0;i < 30;i++){
        if(i < 9 ){
            imgSrcArray[i] = "../images/photo0" + ( i + 1 ) + ".jpg";
        }else{
            imgSrcArray[i] = "../images/photo" + ( i + 1 ) + ".jpg";
        }
        createNewPhoto(imgSrcArray[i]);
    }
    showMore.onclick = function(){
        for(var i = 0;i < 10;i++){
            createNewPhoto(imgSrcArray[i]);
        }
    };
};